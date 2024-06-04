---
sidebar_position: 1
---

# Certificate Management

`kube-green` webhooks require a valid certificate exposes the webhook server to the Kubernetes API server.

## With cert-manager

By default, `kube-green` webhooks are designed to work with `cert-manager`.  
This is the recommended way to manage certificates for the webhook.

## Without cert-manager

If you want to avoid deploying `cert-manager`, you can use the following alternatives.

### Manual management of certificates

To manually manage the certificates, you need to create a K8s secret of type `kubernetes.io/tls` with `tls.crt` and `tls.key` keys.
The certificate in this secret must be signed by a CA and valid for the DNS name:

- SERVICE_NAME
- SERVICE_NAME.NAMESPACE
- SERVICE_NAME.NAMESPACE.svc
- SERVICE_NAME.NAMESPACE.svc.cluster.local

where `SERVICE_NAME` is the name of the service (eg. `kube-green`) and `NAMESPACE` is the namespace where the service is deployed.

The CA which sign the certificate must be set as caBundle of clientConfig in the webhook configuration.

Example of the webhook configuration to patch:

```yaml
webhooks:
  - name: vsleepinfo.kb.io
    clientConfig:
      caBundle: <CA_BUNDLE>
```

Each time the certificate will expire, you will need to update the secret with a new certificate.

### Automated Management of Webhook Certificates

Another solution is to use a tool that automatically rotates the certificates.

You can add it as `initContainer` in the `kube-green` deployment, or set up a specific `Job` which manage it at deploy (for example, as helm hook).

The following is an example of the configured `initContainer`. It is needed to replace `<SERVICE_NAME>` and `<SECRET_NAME>` with the correct ones.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: kube-green
spec:
  template:
    spec:
      initContainers:
        - name: kube-webhook-certgen
          image: registry.k8s.io/ingress-nginx/kube-webhook-certgen:latest
          args:
          - create
          - --host=$(SERVICE_NAME),$(SERVICE_NAME).$(POD_NAMESPACE).svc
          - --namespace=$(POD_NAMESPACE)
          - --secret-name=$(SECRET_NAME)
          - --cert-name=tls.crt
          - --key-name=tls.key
          env:
          - name: SERVICE_NAME
            value: <SERVICE_NAME>
          - name: POD_NAMESPACE
            valueFrom:
              fieldRef:
                fieldPath: metadata.namespace
          - name: SECRET_NAME
            value: <SECRET_NAME>
          securityContext:
            allowPrivilegeEscalation: false
            readOnlyRootFilesystem: true
            privileged: false
            seccompProfile:
              type: RuntimeDefault
            capabilities:
              drop:
              - ALL
          volumeMounts:
          - mountPath: /var/run/secrets/kubernetes.io/serviceaccount
            name: serviceaccount-token
            readOnly: true
        - name: kube-webhook-certpatch
          image: registry.k8s.io/ingress-nginx/kube-webhook-certgen:latest
          args:
          - patch
          - --namespace=$(POD_NAMESPACE)
          - --patch-mutating=false
          - --patch-validating=true
          - --secret-name=$(SECRET_NAME)
          - --webhook-name=kube-green
          env:
          - name: POD_NAMESPACE
            valueFrom:
              fieldRef:
                fieldPath: metadata.namespace
          - name: SECRET_NAME
            value: SECRET
          securityContext:
            allowPrivilegeEscalation: false
            readOnlyRootFilesystem: true
            privileged: false
            seccompProfile:
              type: RuntimeDefault
            capabilities:
              drop:
              - ALL
          volumeMounts:
          - mountPath: /var/run/secrets/kubernetes.io/serviceaccount
            name: serviceaccount-token
            readOnly: true
      containers:
      - name: kube-green
        image: ghcr.io/kube-green/kube-green:latest
        ...other configuration...
        volumeMounts:
        - name: webhook-tls
          mountPath: /tmp/k8s-webhook-server/serving-certs
        - mountPath: /var/run/secrets/kubernetes.io/serviceaccount
          name: serviceaccount-token
          readOnly: true
      volumes:
      - name: webhook-tls
        secret:
          secretName: <SECRET_NAME>
          optional: true
      - name: serviceaccount-token
        projected:
          defaultMode: 0444
          sources:
          - serviceAccountToken:
              expirationSeconds: 3600
              path: token
          - configMap:
              items:
              - key: ca.crt
                path: ca.crt
              name: kube-root-ca.crt
          - downwardAPI:
              items:
              - fieldRef:
                  apiVersion: v1
                  fieldPath: metadata.namespace
                path: namespace
```
