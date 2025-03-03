---
name: Update an issue
example: octokit.rest.issues.update({ owner, repo, issue_number })
route: PATCH /repos/{owner}/{repo}/issues/{issue_number}
scope: issues
type: API method
---

# Update an issue

Issue owners and users with push access can edit an issue.

```js
octokit.rest.issues.update({
  owner,
  repo,
  issue_number,
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
<tr><td>issue_number</td><td>yes</td><td>

The number that identifies the issue.

</td></tr>
<tr><td>title</td><td>no</td><td>

The title of the issue.

</td></tr>
<tr><td>body</td><td>no</td><td>

The contents of the issue.

</td></tr>
<tr><td>assignee</td><td>no</td><td>

Login for the user that this issue should be assigned to. **This field is deprecated.**

</td></tr>
<tr><td>state</td><td>no</td><td>

State of the issue. Either `open` or `closed`.

</td></tr>
<tr><td>state_reason</td><td>no</td><td>

The reason for the current state

</td></tr>
<tr><td>milestone</td><td>no</td><td>

</td></tr>
<tr><td>labels</td><td>no</td><td>

Labels to associate with this issue. Pass one or more Labels to _replace_ the set of Labels on this Issue. Send an empty array (`[]`) to clear all Labels from the Issue. _NOTE: Only users with push access can set labels for issues. Labels are silently dropped otherwise._

</td></tr>
<tr><td>assignees</td><td>no</td><td>

Logins for Users to assign to this issue. Pass one or more user logins to _replace_ the set of assignees on this Issue. Send an empty array (`[]`) to clear all assignees from the Issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues/#update-an-issue).
