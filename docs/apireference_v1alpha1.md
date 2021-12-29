---
title: "API Reference"
---
<p>Packages:</p>
<ul>
<li>
<a href="#kube-green.com%2fv1alpha1">kube-green.com/v1alpha1</a>
</li>
</ul>
<h2 id="kube-green.com/v1alpha1">kube-green.com/v1alpha1</h2>
<p>
<p>Package v1alpha1 contains API Schema definitions for the  v1alpha1 API group</p>
</p>
Resource Types:
<ul><li>
<a href="#kube-green.com/v1alpha1.SleepInfo">SleepInfo</a>
</li></ul>
<h3 id="kube-green.com/v1alpha1.SleepInfo">SleepInfo
</h3>
<p>
<p>SleepInfo is the Schema for the sleepinfos API</p>
</p>
<table>
<thead>
<tr>
<th>Field</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<code>apiVersion</code><br></br>
string</td>
<td>
<code>
kube-green.com/v1alpha1
</code>
</td>
</tr>
<tr>
<td>
<code>kind</code><br></br>
string
</td>
<td><code>SleepInfo</code></td>
</tr>
<tr>
<td>
<code>metadata</code><br></br>
<em>
<a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta">
Kubernetes meta/v1.ObjectMeta
</a>
</em>
</td>
<td>
Refer to the Kubernetes API documentation for the fields of the
<code>metadata</code> field.
</td>
</tr>
<tr>
<td>
<code>spec</code><br></br>
<em>
<a href="#kube-green.com/v1alpha1.SleepInfoSpec">
SleepInfoSpec
</a>
</em>
</td>
<td>
<br/>
<br/>
<table>
<tr>
<td>
<code>weekdays</code><br></br>
<em>
string
</em>
</td>
<td>
<p>Weekdays are in cron notation.</p>
<p>For example, to configure a schedule from monday to friday, set it to &ldquo;1-5&rdquo;</p>
</td>
</tr>
<tr>
<td>
<code>sleepAt</code><br></br>
<em>
string
</em>
</td>
<td>
<p>Hours:Minutes</p>
<p>Accept cron schedule for both hour and minute.
For example, <em>:</em>/2 is set to configure a run every even minute.</p>
</td>
</tr>
<tr>
<td>
<code>wakeUpAt</code><br></br>
<em>
string
</em>
</td>
<td>
<em>(Optional)</em>
<p>Hours:Minutes</p>
<p>Accept cron schedule for both hour and minute.
For example, <em>:</em>/2 is set to configure a run every even minute.
It is not required.</p>
</td>
</tr>
<tr>
<td>
<code>timeZone</code><br></br>
<em>
string
</em>
</td>
<td>
<em>(Optional)</em>
<p>Time zone to set the schedule, in IANA time zone identifier.
It is not required, default to UTC.
For example, for the Italy time zone set Europe/Rome.</p>
</td>
</tr>
<tr>
<td>
<code>excludeRef</code><br></br>
<em>
<a href="#kube-green.com/v1alpha1.ExcludeRef">
[]ExcludeRef
</a>
</em>
</td>
<td>
<em>(Optional)</em>
<p>ExcludeRef define the resource to exclude from the sleep.</p>
</td>
</tr>
<tr>
<td>
<code>suspendCronJobs</code><br></br>
<em>
bool
</em>
</td>
<td>
<em>(Optional)</em>
<p>If SuspendCronjobs is set to true, on sleep the cronjobs of the namespace will be suspended.</p>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td>
<code>status</code><br></br>
<em>
<a href="#kube-green.com/v1alpha1.SleepInfoStatus">
SleepInfoStatus
</a>
</em>
</td>
<td>
</td>
</tr>
</tbody>
</table>
<h3 id="kube-green.com/v1alpha1.ExcludeRef">ExcludeRef
</h3>
<p>
(<em>Appears on: </em>
<a href="#kube-green.com/v1alpha1.SleepInfoSpec">SleepInfoSpec</a>)
</p>
<p>
</p>
<table>
<thead>
<tr>
<th>Field</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<code>apiVersion</code><br></br>
<em>
string
</em>
</td>
<td>
<p>ApiVersion of the kubernetes resources.
Supported api version is &ldquo;apps/v1&rdquo;.</p>
</td>
</tr>
<tr>
<td>
<code>kind</code><br></br>
<em>
string
</em>
</td>
<td>
<p>Kind of the kubernetes resources of the specific version.
Supported kind is &ldquo;Deployment&rdquo;.</p>
</td>
</tr>
<tr>
<td>
<code>name</code><br></br>
<em>
string
</em>
</td>
<td>
<p>Name which identify the kubernetes resource.</p>
</td>
</tr>
</tbody>
</table>
<h3 id="kube-green.com/v1alpha1.SleepInfoSpec">SleepInfoSpec
</h3>
<p>
(<em>Appears on: </em>
<a href="#kube-green.com/v1alpha1.SleepInfo">SleepInfo</a>)
</p>
<p>
<p>SleepInfoSpec defines the desired state of SleepInfo</p>
</p>
<table>
<thead>
<tr>
<th>Field</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<code>weekdays</code><br></br>
<em>
string
</em>
</td>
<td>
<p>Weekdays are in cron notation.</p>
<p>For example, to configure a schedule from monday to friday, set it to &ldquo;1-5&rdquo;</p>
</td>
</tr>
<tr>
<td>
<code>sleepAt</code><br></br>
<em>
string
</em>
</td>
<td>
<p>Hours:Minutes</p>
<p>Accept cron schedule for both hour and minute.
For example, <em>:</em>/2 is set to configure a run every even minute.</p>
</td>
</tr>
<tr>
<td>
<code>wakeUpAt</code><br></br>
<em>
string
</em>
</td>
<td>
<em>(Optional)</em>
<p>Hours:Minutes</p>
<p>Accept cron schedule for both hour and minute.
For example, <em>:</em>/2 is set to configure a run every even minute.
It is not required.</p>
</td>
</tr>
<tr>
<td>
<code>timeZone</code><br></br>
<em>
string
</em>
</td>
<td>
<em>(Optional)</em>
<p>Time zone to set the schedule, in IANA time zone identifier.
It is not required, default to UTC.
For example, for the Italy time zone set Europe/Rome.</p>
</td>
</tr>
<tr>
<td>
<code>excludeRef</code><br></br>
<em>
<a href="#kube-green.com/v1alpha1.ExcludeRef">
[]ExcludeRef
</a>
</em>
</td>
<td>
<em>(Optional)</em>
<p>ExcludeRef define the resource to exclude from the sleep.</p>
</td>
</tr>
<tr>
<td>
<code>suspendCronJobs</code><br></br>
<em>
bool
</em>
</td>
<td>
<em>(Optional)</em>
<p>If SuspendCronjobs is set to true, on sleep the cronjobs of the namespace will be suspended.</p>
</td>
</tr>
</tbody>
</table>
<h3 id="kube-green.com/v1alpha1.SleepInfoStatus">SleepInfoStatus
</h3>
<p>
(<em>Appears on: </em>
<a href="#kube-green.com/v1alpha1.SleepInfo">SleepInfo</a>)
</p>
<p>
<p>SleepInfoStatus defines the observed state of SleepInfo</p>
</p>
<table>
<thead>
<tr>
<th>Field</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<code>lastScheduleTime</code><br></br>
<em>
<a href="https://pkg.go.dev/k8s.io/apimachinery/pkg/apis/meta/v1#Time">
Kubernetes meta/v1.Time
</a>
</em>
</td>
<td>
<em>(Optional)</em>
<p>Information when was the last time the run was successfully scheduled.</p>
</td>
</tr>
<tr>
<td>
<code>operation</code><br></br>
<em>
string
</em>
</td>
<td>
<em>(Optional)</em>
<p>The operation type handled in last schedule. SLEEP or WAKE_UP are the
possibilities</p>
</td>
</tr>
</tbody>
</table>
<hr/>
<p><em>
Generated with <code>gen-crd-api-reference-docs</code>
on git commit <code>439ab63</code>.
</em></p>
