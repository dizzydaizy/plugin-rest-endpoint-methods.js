---
name: Check if a pull request has been merged
example: octokit.rest.pulls.checkIfMerged({ owner, repo, pull_number })
route: GET /repos/{owner}/{repo}/pulls/{pull_number}/merge
scope: pulls
type: API method
---

# Check if a pull request has been merged

```js
octokit.rest.pulls.checkIfMerged({
  owner,
  repo,
  pull_number,
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
<tr><td>pull_number</td><td>yes</td><td>

The number that identifies the pull request.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/pulls#check-if-a-pull-request-has-been-merged).
