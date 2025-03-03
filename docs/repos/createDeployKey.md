---
name: Create a deploy key
example: octokit.rest.repos.createDeployKey({ owner, repo, key })
route: POST /repos/{owner}/{repo}/keys
scope: repos
type: API method
---

# Create a deploy key

You can create a read-only deploy key.

```js
octokit.rest.repos.createDeployKey({
  owner,
  repo,
  key,
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
<tr><td>title</td><td>no</td><td>

A name for the key.

</td></tr>
<tr><td>key</td><td>yes</td><td>

The contents of the key.

</td></tr>
<tr><td>read_only</td><td>no</td><td>

If `true`, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.

Deploy keys with write access can perform the same actions as an organization member with admin access, or a collaborator on a personal repository. For more information, see "[Repository permission levels for an organization](https://docs.github.com/articles/repository-permission-levels-for-an-organization/)" and "[Permission levels for a user account repository](https://docs.github.com/articles/permission-levels-for-a-user-account-repository/)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#create-a-deploy-key).
