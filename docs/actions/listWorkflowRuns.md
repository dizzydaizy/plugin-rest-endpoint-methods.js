---
name: List workflow runs for a workflow
example: octokit.rest.actions.listWorkflowRuns({ owner, repo, workflow_id })
route: GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs
scope: actions
type: API method
---

# List workflow runs for a workflow

List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.

```js
octokit.rest.actions.listWorkflowRuns({
  owner,
  repo,
  workflow_id,
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
<tr><td>workflow_id</td><td>yes</td><td>

The ID of the workflow. You can also pass the workflow file name as a string.

</td></tr>
<tr><td>actor</td><td>no</td><td>

Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.

</td></tr>
<tr><td>branch</td><td>no</td><td>

Returns workflow runs associated with a branch. Use the name of the branch of the `push`.

</td></tr>
<tr><td>event</td><td>no</td><td>

Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see "[Events that trigger workflows](https://docs.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)."

</td></tr>
<tr><td>status</td><td>no</td><td>

Returns workflow runs with the check run `status` or `conclusion` that you specify. For example, a conclusion can be `success` or a status can be `in_progress`. Only GitHub can set a status of `waiting` or `requested`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
<tr><td>created</td><td>no</td><td>

Returns workflow runs created within the given date-time range. For more information on the syntax, see "[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."

</td></tr>
<tr><td>exclude_pull_requests</td><td>no</td><td>

If `true` pull requests are omitted from the response (empty array).

</td></tr>
<tr><td>check_suite_id</td><td>no</td><td>

Returns workflow runs with the `check_suite_id` that you specify.

</td></tr>
<tr><td>head_sha</td><td>no</td><td>

Only returns workflow runs that are associated with the specified `head_sha`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#list-workflow-runs).
