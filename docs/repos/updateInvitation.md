---
name: Update a repository invitation
example: octokit.rest.repos.updateInvitation({ owner, repo, invitation_id })
route: PATCH /repos/{owner}/{repo}/invitations/{invitation_id}
scope: repos
type: API method
---

# Update a repository invitation

```js
octokit.rest.repos.updateInvitation({
  owner,
  repo,
  invitation_id,
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
<tr><td>invitation_id</td><td>yes</td><td>

The unique identifier of the invitation.

</td></tr>
<tr><td>permissions</td><td>no</td><td>

The permissions that the associated user will have on the repository. Valid values are `read`, `write`, `maintain`, `triage`, and `admin`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/collaborators/invitations#update-a-repository-invitation).
