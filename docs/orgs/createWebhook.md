---
name: Create an organization webhook
example: octokit.rest.orgs.createWebhook({ org, name, config, config.url })
route: POST /orgs/{org}/hooks
scope: orgs
type: API method
---

# Create an organization webhook

Here's how you can create a hook that posts payloads in JSON format:

```js
octokit.rest.orgs.createWebhook({
        org,
name,
config,
config.url
      })
```

## Parameters

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>required</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>name</td><td>yes</td><td>

Must be passed as "web".

</td></tr>
<tr><td>config</td><td>yes</td><td>

Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/orgs#create-hook-config-params).

</td></tr>
<tr><td>config.url</td><td>yes</td><td>

The URL to which the payloads will be delivered.

</td></tr>
<tr><td>config.content_type</td><td>no</td><td>

The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.

</td></tr>
<tr><td>config.secret</td><td>no</td><td>

If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).

</td></tr>
<tr><td>config.insecure_ssl</td><td>no</td><td>

</td></tr>
<tr><td>config.username</td><td>no</td><td>

</td></tr>
<tr><td>config.password</td><td>no</td><td>

</td></tr>
<tr><td>events</td><td>no</td><td>

Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for.

</td></tr>
<tr><td>active</td><td>no</td><td>

Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/orgs#create-an-organization-webhook).
