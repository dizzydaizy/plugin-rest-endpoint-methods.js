---
name: Get a repository subscription
example: octokit.rest.activity.getRepoSubscription({ owner, repo })
route: GET /repos/{owner}/{repo}/subscription
scope: activity
type: API method
---

# Get a repository subscription

```js
octokit.rest.activity.getRepoSubscription({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/activity#get-a-repository-subscription).
