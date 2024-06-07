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

where `SERVICE_NAME` is the name of the service which exposes the webhook (`kube-green-webhook-service` by default) and `NAMESPACE` is the namespace where the service is deployed.

Once created the secret, it must be mounted in the `kube-green` deployment as volume. If the secret is called `webhook-server-cert`, the volumes configuration should be the following:

```yaml
volumes:
- name: webhook-server-cert
  secret:
    secretName: <SECRET_NAME>
    optional: true
```

and the volume mount in the container:

```yaml
volumeMounts:
- name: webhook-server-cert
  mountPath: /tmp/k8s-webhook-server/serving-certs
```

The CA which sign the certificate must be set as caBundle of clientConfig in the webhook configuration.

With the `kustomize` configuration in the [kube-green repository](https://github.com/kube-green/kube-green/tree/main/config), you can comment all the parts below the `[CERT-MANAGER]` comment.

Example of the webhook configuration to patch, with `<CA_BUNDLE>` as the base64 of the `ca.crt` file:

```yaml
webhooks:
  - name: vsleepinfo.kb.io
    clientConfig:
      caBundle: <CA_BUNDLE>
```

Each time the certificate will expire, you will need to update the secret with a new certificate.

<details>
<summary><i>Generate Self-Signed Certificates step by step</i></summary>

To generate self-signed certificates, it is possible to use the following commands (take this as an example):


Write a file with the following content with the openssl configuration (name it `openssl.conf`):

```bash
[ req ]
default_bits = 2048
prompt = no
default_md = sha256
req_extensions = req_ext
distinguished_name = dn

[ dn ]
CN = kube-green-webhook-service.kube-green.svc.cluster.local

[ req_ext ]
subjectAltName = @alt_names

[ alt_names ]
DNS.1 = kube-green-webhook-service
DNS.2 = kube-green-webhook-service.kube-green
DNS.3 = kube-green-webhook-service.kube-green.svc
DNS.4 = kube-green-webhook-service.kube-green.svc.cluster.local
```

And then run the following commands:

```bash
# Generate CA private key
openssl genpkey -algorithm RSA -out ca.key

# Generate CA certificate for 100 years
openssl req -new -nodes -x509 -key ca.key -out ca.crt -days 36500 -subj "/CN=The CA"

# Generate private key
openssl genpkey -algorithm RSA -out tls.key

# Generate certificate signing request
openssl req -new -key tls.key -out tls.csr -config openssl.conf

# Generate certificate signed with the CA
openssl x509 -req -in tls.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out tls.crt -days 365 -extfile openssl.conf -extensions req_ext
```

After the creation of the certificates, you can create the secret with the following command:

```bash
kubectl create secret tls webhook-server-cert --cert=./tls.crt --key=./tls.key
```

Once generated, you can create the `kube-green` manifests (commenting the `[CERT-MANAGER]` part), create the base64 of the `ca.crt` file and patch the webhook configuration with the new caBundle.

</details>

### Automated Management of Webhook Certificates

It is possible to manually manage the certificates using some tools which automate the process described above.

One tool that can be used is [kube-webhook-certgen](https://github.com/kubernetes/ingress-nginx/tree/main/images/kube-webhook-certgen). It is possible to view a configuration of this tool in the [kube-green chart](https://github.com/kube-green/kube-green/tree/main/charts).

It is possible to enable it with setting the `jobsCert.enabled` to `true` in the `values.yaml` file of the chart and `certManager.enabled` to false.
