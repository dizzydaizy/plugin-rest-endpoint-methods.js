---
name: List repository notifications for the authenticated user
example: octokit.rest.activity.listRepoNotificationsForAuthenticatedUser({ owner, repo })
route: GET /repos/{owner}/{repo}/notifications
scope: activity
type: API method
---

# List repository notifications for the authenticated user

List all notifications for the current user.

```js
octokit.rest.activity.listRepoNotificationsForAuthenticatedUser({
  owner,
  repo,
});
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
    <tr><td>owner</td><td>yes</td><td>

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>all</td><td>no</td><td>

If `true`, show notifications marked as read.

</td></tr>
<tr><td>participating</td><td>no</td><td>

If `true`, only shows notifications in which the user is directly participating or mentioned.

</td></tr>
<tr><td>since</td><td>no</td><td>

Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>before</td><td>no</td><td>

Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/activity#list-repository-notifications-for-the-authenticated-user).
