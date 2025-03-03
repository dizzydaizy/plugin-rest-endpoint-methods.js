---
name: List reactions for an issue comment
example: octokit.rest.reactions.listForIssueComment({ owner, repo, comment_id })
route: GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions
scope: reactions
type: API method
---

# List reactions for an issue comment

List the reactions to an [issue comment](https://docs.github.com/rest/reference/issues#comments).

```js
octokit.rest.reactions.listForIssueComment({
  owner,
  repo,
  comment_id,
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
<tr><td>comment_id</td><td>yes</td><td>

The unique identifier of the comment.

</td></tr>
<tr><td>content</td><td>no</td><td>

Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to an issue comment.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/reactions#list-reactions-for-an-issue-comment).
