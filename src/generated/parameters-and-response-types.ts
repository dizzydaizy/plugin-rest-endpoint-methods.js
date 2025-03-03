import { Endpoints, RequestParameters } from "@octokit/types";

export type RestEndpointMethodTypes = {
  actions: {
    addCustomLabelsToSelfHostedRunnerForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/actions/runners/{runner_id}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/actions/runners/{runner_id}/labels"]["response"];
    };
    addCustomLabelsToSelfHostedRunnerForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"]["response"];
    };
    addSelectedRepoToOrgSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"]["response"];
    };
    approveWorkflowRun: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve"]["response"];
    };
    cancelWorkflowRun: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"]["response"];
    };
    createOrUpdateEnvironmentSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"]["response"];
    };
    createOrUpdateOrgSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/actions/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/actions/secrets/{secret_name}"]["response"];
    };
    createOrUpdateRepoSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"]["response"];
    };
    createRegistrationTokenForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/actions/runners/registration-token"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/actions/runners/registration-token"]["response"];
    };
    createRegistrationTokenForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/actions/runners/registration-token"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/actions/runners/registration-token"]["response"];
    };
    createRemoveTokenForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/actions/runners/remove-token"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/actions/runners/remove-token"]["response"];
    };
    createRemoveTokenForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/actions/runners/remove-token"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/actions/runners/remove-token"]["response"];
    };
    createWorkflowDispatch: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"]["response"];
    };
    deleteActionsCacheById: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}"]["response"];
    };
    deleteActionsCacheByKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}"]["response"];
    };
    deleteArtifact: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"]["response"];
    };
    deleteEnvironmentSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"]["response"];
    };
    deleteOrgSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/actions/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/actions/secrets/{secret_name}"]["response"];
    };
    deleteRepoSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"]["response"];
    };
    deleteSelfHostedRunnerFromOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/actions/runners/{runner_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/actions/runners/{runner_id}"]["response"];
    };
    deleteSelfHostedRunnerFromRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"]["response"];
    };
    deleteWorkflowRun: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"]["response"];
    };
    deleteWorkflowRunLogs: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"]["response"];
    };
    disableSelectedRepositoryGithubActionsOrganization: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"]["response"];
    };
    disableWorkflow: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"]["response"];
    };
    downloadArtifact: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"]["response"];
    };
    downloadJobLogsForWorkflowRun: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"]["response"];
    };
    downloadWorkflowRunAttemptLogs: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs"]["response"];
    };
    downloadWorkflowRunLogs: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"]["response"];
    };
    enableSelectedRepositoryGithubActionsOrganization: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"]["response"];
    };
    enableWorkflow: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"]["response"];
    };
    getActionsCacheList: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/caches"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/caches"]["response"];
    };
    getActionsCacheUsage: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/cache/usage"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/cache/usage"]["response"];
    };
    getActionsCacheUsageByRepoForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/actions/cache/usage-by-repository"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/actions/cache/usage-by-repository"]["response"];
    };
    getActionsCacheUsageForEnterprise: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /enterprises/{enterprise}/actions/cache/usage"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /enterprises/{enterprise}/actions/cache/usage"]["response"];
    };
    getActionsCacheUsageForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/actions/cache/usage"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/actions/cache/usage"]["response"];
    };
    getAllowedActionsOrganization: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/actions/permissions/selected-actions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/actions/permissions/selected-actions"]["response"];
    };
    getAllowedActionsRepository: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/permissions/selected-actions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/permissions/selected-actions"]["response"];
    };
    getArtifact: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"]["response"];
    };
    getEnvironmentPublicKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key"]["response"];
    };
    getEnvironmentSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"]["response"];
    };
    getGithubActionsDefaultWorkflowPermissionsEnterprise: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /enterprises/{enterprise}/actions/permissions/workflow"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /enterprises/{enterprise}/actions/permissions/workflow"]["response"];
    };
    getGithubActionsDefaultWorkflowPermissionsOrganization: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/actions/permissions/workflow"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/actions/permissions/workflow"]["response"];
    };
    getGithubActionsDefaultWorkflowPermissionsRepository: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/permissions/workflow"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/permissions/workflow"]["response"];
    };
    getGithubActionsPermissionsOrganization: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/actions/permissions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/actions/permissions"]["response"];
    };
    getGithubActionsPermissionsRepository: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/permissions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/permissions"]["response"];
    };
    getJobForWorkflowRun: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"]["response"];
    };
    getOrgPublicKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/actions/secrets/public-key"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/actions/secrets/public-key"]["response"];
    };
    getOrgSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/actions/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/actions/secrets/{secret_name}"]["response"];
    };
    getPendingDeploymentsForRun: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"]["response"];
    };
    getRepoPermissions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/permissions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/permissions"]["response"];
    };
    getRepoPublicKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/secrets/public-key"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/secrets/public-key"]["response"];
    };
    getRepoSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"]["response"];
    };
    getReviewsForRun: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals"]["response"];
    };
    getSelfHostedRunnerForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/actions/runners/{runner_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/actions/runners/{runner_id}"]["response"];
    };
    getSelfHostedRunnerForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/runners/{runner_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/runners/{runner_id}"]["response"];
    };
    getWorkflow: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"]["response"];
    };
    getWorkflowAccessToRepository: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/permissions/access"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/permissions/access"]["response"];
    };
    getWorkflowRun: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/runs/{run_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/runs/{run_id}"]["response"];
    };
    getWorkflowRunAttempt: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}"]["response"];
    };
    getWorkflowRunUsage: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"]["response"];
    };
    getWorkflowUsage: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"]["response"];
    };
    listArtifactsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/artifacts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/artifacts"]["response"];
    };
    listEnvironmentSecrets: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repositories/{repository_id}/environments/{environment_name}/secrets"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repositories/{repository_id}/environments/{environment_name}/secrets"]["response"];
    };
    listJobsForWorkflowRun: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"]["response"];
    };
    listJobsForWorkflowRunAttempt: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs"]["response"];
    };
    listLabelsForSelfHostedRunnerForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/actions/runners/{runner_id}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/actions/runners/{runner_id}/labels"]["response"];
    };
    listLabelsForSelfHostedRunnerForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"]["response"];
    };
    listOrgSecrets: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/actions/secrets"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/actions/secrets"]["response"];
    };
    listRepoSecrets: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/secrets"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/secrets"]["response"];
    };
    listRepoWorkflows: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/workflows"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/workflows"]["response"];
    };
    listRunnerApplicationsForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/actions/runners/downloads"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/actions/runners/downloads"]["response"];
    };
    listRunnerApplicationsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/runners/downloads"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/runners/downloads"]["response"];
    };
    listSelectedReposForOrgSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/actions/secrets/{secret_name}/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/actions/secrets/{secret_name}/repositories"]["response"];
    };
    listSelectedRepositoriesEnabledGithubActionsOrganization: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/actions/permissions/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/actions/permissions/repositories"]["response"];
    };
    listSelfHostedRunnersForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/actions/runners"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/actions/runners"]["response"];
    };
    listSelfHostedRunnersForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/runners"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/runners"]["response"];
    };
    listWorkflowRunArtifacts: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"]["response"];
    };
    listWorkflowRuns: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"]["response"];
    };
    listWorkflowRunsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/actions/runs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/actions/runs"]["response"];
    };
    reRunJobForWorkflowRun: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun"]["response"];
    };
    reRunWorkflow: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"]["response"];
    };
    reRunWorkflowFailedJobs: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs"]["response"];
    };
    removeAllCustomLabelsFromSelfHostedRunnerForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/actions/runners/{runner_id}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/actions/runners/{runner_id}/labels"]["response"];
    };
    removeAllCustomLabelsFromSelfHostedRunnerForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"]["response"];
    };
    removeCustomLabelFromSelfHostedRunnerForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}"]["response"];
    };
    removeCustomLabelFromSelfHostedRunnerForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}"]["response"];
    };
    removeSelectedRepoFromOrgSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"]["response"];
    };
    reviewPendingDeploymentsForRun: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"]["response"];
    };
    setAllowedActionsOrganization: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/actions/permissions/selected-actions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/actions/permissions/selected-actions"]["response"];
    };
    setAllowedActionsRepository: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"]["response"];
    };
    setCustomLabelsForSelfHostedRunnerForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/actions/runners/{runner_id}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/actions/runners/{runner_id}/labels"]["response"];
    };
    setCustomLabelsForSelfHostedRunnerForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"]["response"];
    };
    setGithubActionsDefaultWorkflowPermissionsEnterprise: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /enterprises/{enterprise}/actions/permissions/workflow"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /enterprises/{enterprise}/actions/permissions/workflow"]["response"];
    };
    setGithubActionsDefaultWorkflowPermissionsOrganization: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/actions/permissions/workflow"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/actions/permissions/workflow"]["response"];
    };
    setGithubActionsDefaultWorkflowPermissionsRepository: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/actions/permissions/workflow"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/actions/permissions/workflow"]["response"];
    };
    setGithubActionsPermissionsOrganization: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/actions/permissions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/actions/permissions"]["response"];
    };
    setGithubActionsPermissionsRepository: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/actions/permissions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/actions/permissions"]["response"];
    };
    setSelectedReposForOrgSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"]["response"];
    };
    setSelectedRepositoriesEnabledGithubActionsOrganization: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/actions/permissions/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/actions/permissions/repositories"]["response"];
    };
    setWorkflowAccessToRepository: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/actions/permissions/access"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/actions/permissions/access"]["response"];
    };
  };
  activity: {
    checkRepoIsStarredByAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/starred/{owner}/{repo}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/starred/{owner}/{repo}"]["response"];
    };
    deleteRepoSubscription: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/subscription"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/subscription"]["response"];
    };
    deleteThreadSubscription: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /notifications/threads/{thread_id}/subscription"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /notifications/threads/{thread_id}/subscription"]["response"];
    };
    getFeeds: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /feeds"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /feeds"]["response"];
    };
    getRepoSubscription: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/subscription"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/subscription"]["response"];
    };
    getThread: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /notifications/threads/{thread_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /notifications/threads/{thread_id}"]["response"];
    };
    getThreadSubscriptionForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /notifications/threads/{thread_id}/subscription"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /notifications/threads/{thread_id}/subscription"]["response"];
    };
    listEventsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/events"]["response"];
    };
    listNotificationsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /notifications"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /notifications"]["response"];
    };
    listOrgEventsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/events/orgs/{org}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/events/orgs/{org}"]["response"];
    };
    listPublicEvents: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /events"]["response"];
    };
    listPublicEventsForRepoNetwork: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /networks/{owner}/{repo}/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /networks/{owner}/{repo}/events"]["response"];
    };
    listPublicEventsForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/events/public"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/events/public"]["response"];
    };
    listPublicOrgEvents: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/events"]["response"];
    };
    listReceivedEventsForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/received_events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/received_events"]["response"];
    };
    listReceivedPublicEventsForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/received_events/public"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/received_events/public"]["response"];
    };
    listRepoEvents: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/events"]["response"];
    };
    listRepoNotificationsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/notifications"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/notifications"]["response"];
    };
    listReposStarredByAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/starred"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/starred"]["response"];
    };
    listReposStarredByUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/starred"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/starred"]["response"];
    };
    listReposWatchedByUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/subscriptions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/subscriptions"]["response"];
    };
    listStargazersForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/stargazers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/stargazers"]["response"];
    };
    listWatchedReposForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/subscriptions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/subscriptions"]["response"];
    };
    listWatchersForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/subscribers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/subscribers"]["response"];
    };
    markNotificationsAsRead: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /notifications"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /notifications"]["response"];
    };
    markRepoNotificationsAsRead: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/notifications"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/notifications"]["response"];
    };
    markThreadAsRead: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /notifications/threads/{thread_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /notifications/threads/{thread_id}"]["response"];
    };
    setRepoSubscription: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/subscription"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/subscription"]["response"];
    };
    setThreadSubscription: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /notifications/threads/{thread_id}/subscription"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /notifications/threads/{thread_id}/subscription"]["response"];
    };
    starRepoForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /user/starred/{owner}/{repo}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /user/starred/{owner}/{repo}"]["response"];
    };
    unstarRepoForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/starred/{owner}/{repo}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/starred/{owner}/{repo}"]["response"];
    };
  };
  apps: {
    addRepoToInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /user/installations/{installation_id}/repositories/{repository_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /user/installations/{installation_id}/repositories/{repository_id}"]["response"];
    };
    addRepoToInstallationForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /user/installations/{installation_id}/repositories/{repository_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /user/installations/{installation_id}/repositories/{repository_id}"]["response"];
    };
    checkToken: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /applications/{client_id}/token"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /applications/{client_id}/token"]["response"];
    };
    createFromManifest: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /app-manifests/{code}/conversions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /app-manifests/{code}/conversions"]["response"];
    };
    createInstallationAccessToken: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /app/installations/{installation_id}/access_tokens"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /app/installations/{installation_id}/access_tokens"]["response"];
    };
    deleteAuthorization: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /applications/{client_id}/grant"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /applications/{client_id}/grant"]["response"];
    };
    deleteInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /app/installations/{installation_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /app/installations/{installation_id}"]["response"];
    };
    deleteToken: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /applications/{client_id}/token"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /applications/{client_id}/token"]["response"];
    };
    getAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /app"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /app"]["response"];
    };
    getBySlug: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /apps/{app_slug}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /apps/{app_slug}"]["response"];
    };
    getInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /app/installations/{installation_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /app/installations/{installation_id}"]["response"];
    };
    getOrgInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/installation"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/installation"]["response"];
    };
    getRepoInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/installation"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/installation"]["response"];
    };
    getSubscriptionPlanForAccount: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /marketplace_listing/accounts/{account_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /marketplace_listing/accounts/{account_id}"]["response"];
    };
    getSubscriptionPlanForAccountStubbed: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /marketplace_listing/stubbed/accounts/{account_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /marketplace_listing/stubbed/accounts/{account_id}"]["response"];
    };
    getUserInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/installation"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/installation"]["response"];
    };
    getWebhookConfigForApp: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /app/hook/config"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /app/hook/config"]["response"];
    };
    getWebhookDelivery: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /app/hook/deliveries/{delivery_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /app/hook/deliveries/{delivery_id}"]["response"];
    };
    listAccountsForPlan: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /marketplace_listing/plans/{plan_id}/accounts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /marketplace_listing/plans/{plan_id}/accounts"]["response"];
    };
    listAccountsForPlanStubbed: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"]["response"];
    };
    listInstallationReposForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/installations/{installation_id}/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/installations/{installation_id}/repositories"]["response"];
    };
    listInstallations: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /app/installations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /app/installations"]["response"];
    };
    listInstallationsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/installations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/installations"]["response"];
    };
    listPlans: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /marketplace_listing/plans"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /marketplace_listing/plans"]["response"];
    };
    listPlansStubbed: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /marketplace_listing/stubbed/plans"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /marketplace_listing/stubbed/plans"]["response"];
    };
    listReposAccessibleToInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /installation/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /installation/repositories"]["response"];
    };
    listSubscriptionsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/marketplace_purchases"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/marketplace_purchases"]["response"];
    };
    listSubscriptionsForAuthenticatedUserStubbed: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/marketplace_purchases/stubbed"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/marketplace_purchases/stubbed"]["response"];
    };
    listWebhookDeliveries: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /app/hook/deliveries"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /app/hook/deliveries"]["response"];
    };
    redeliverWebhookDelivery: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /app/hook/deliveries/{delivery_id}/attempts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /app/hook/deliveries/{delivery_id}/attempts"]["response"];
    };
    removeRepoFromInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/installations/{installation_id}/repositories/{repository_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/installations/{installation_id}/repositories/{repository_id}"]["response"];
    };
    removeRepoFromInstallationForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/installations/{installation_id}/repositories/{repository_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/installations/{installation_id}/repositories/{repository_id}"]["response"];
    };
    resetToken: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /applications/{client_id}/token"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /applications/{client_id}/token"]["response"];
    };
    revokeInstallationAccessToken: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /installation/token"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /installation/token"]["response"];
    };
    scopeToken: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /applications/{client_id}/token/scoped"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /applications/{client_id}/token/scoped"]["response"];
    };
    suspendInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /app/installations/{installation_id}/suspended"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /app/installations/{installation_id}/suspended"]["response"];
    };
    unsuspendInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /app/installations/{installation_id}/suspended"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /app/installations/{installation_id}/suspended"]["response"];
    };
    updateWebhookConfigForApp: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /app/hook/config"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /app/hook/config"]["response"];
    };
  };
  billing: {
    getGithubActionsBillingOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/settings/billing/actions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/settings/billing/actions"]["response"];
    };
    getGithubActionsBillingUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/settings/billing/actions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/settings/billing/actions"]["response"];
    };
    getGithubAdvancedSecurityBillingGhe: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /enterprises/{enterprise}/settings/billing/advanced-security"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /enterprises/{enterprise}/settings/billing/advanced-security"]["response"];
    };
    getGithubAdvancedSecurityBillingOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/settings/billing/advanced-security"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/settings/billing/advanced-security"]["response"];
    };
    getGithubPackagesBillingOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/settings/billing/packages"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/settings/billing/packages"]["response"];
    };
    getGithubPackagesBillingUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/settings/billing/packages"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/settings/billing/packages"]["response"];
    };
    getSharedStorageBillingOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/settings/billing/shared-storage"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/settings/billing/shared-storage"]["response"];
    };
    getSharedStorageBillingUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/settings/billing/shared-storage"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/settings/billing/shared-storage"]["response"];
    };
  };
  checks: {
    create: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/check-runs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/check-runs"]["response"];
    };
    createSuite: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/check-suites"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/check-suites"]["response"];
    };
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"]["response"];
    };
    getSuite: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"]["response"];
    };
    listAnnotations: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"]["response"];
    };
    listForRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"]["response"];
    };
    listForSuite: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"]["response"];
    };
    listSuitesForRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"]["response"];
    };
    rerequestRun: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest"]["response"];
    };
    rerequestSuite: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"]["response"];
    };
    setSuitesPreferences: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/check-suites/preferences"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/check-suites/preferences"]["response"];
    };
    update: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"]["response"];
    };
  };
  codeScanning: {
    deleteAnalysis: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}"]["response"];
    };
    getAlert: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"]["response"];
    };
    getAnalysis: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}"]["response"];
    };
    getCodeqlDatabase: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"]["response"];
    };
    getSarif: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"]["response"];
    };
    listAlertInstances: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances"]["response"];
    };
    listAlertsForEnterprise: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /enterprises/{enterprise}/code-scanning/alerts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /enterprises/{enterprise}/code-scanning/alerts"]["response"];
    };
    listAlertsForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/code-scanning/alerts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/code-scanning/alerts"]["response"];
    };
    listAlertsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/code-scanning/alerts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/code-scanning/alerts"]["response"];
    };
    listAlertsInstances: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances"]["response"];
    };
    listCodeqlDatabases: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/code-scanning/codeql/databases"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/code-scanning/codeql/databases"]["response"];
    };
    listRecentAnalyses: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/code-scanning/analyses"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/code-scanning/analyses"]["response"];
    };
    updateAlert: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"]["response"];
    };
    uploadSarif: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/code-scanning/sarifs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/code-scanning/sarifs"]["response"];
    };
  };
  codesOfConduct: {
    getAllCodesOfConduct: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /codes_of_conduct"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /codes_of_conduct"]["response"];
    };
    getConductCode: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /codes_of_conduct/{key}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /codes_of_conduct/{key}"]["response"];
    };
  };
  codespaces: {
    addRepositoryForSecretForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"]["response"];
    };
    addSelectedRepoToOrgSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /organizations/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /organizations/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"]["response"];
    };
    codespaceMachinesForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/codespaces/{codespace_name}/machines"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/codespaces/{codespace_name}/machines"]["response"];
    };
    createForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/codespaces"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/codespaces"]["response"];
    };
    createOrUpdateOrgSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /organizations/{org}/codespaces/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /organizations/{org}/codespaces/secrets/{secret_name}"]["response"];
    };
    createOrUpdateRepoSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"]["response"];
    };
    createOrUpdateSecretForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /user/codespaces/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /user/codespaces/secrets/{secret_name}"]["response"];
    };
    createWithPrForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces"]["response"];
    };
    createWithRepoForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/codespaces"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/codespaces"]["response"];
    };
    deleteForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/codespaces/{codespace_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/codespaces/{codespace_name}"]["response"];
    };
    deleteFromOrganization: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}"]["response"];
    };
    deleteOrgSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /organizations/{org}/codespaces/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /organizations/{org}/codespaces/secrets/{secret_name}"]["response"];
    };
    deleteRepoSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"]["response"];
    };
    deleteSecretForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/codespaces/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/codespaces/secrets/{secret_name}"]["response"];
    };
    exportForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/codespaces/{codespace_name}/exports"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/codespaces/{codespace_name}/exports"]["response"];
    };
    getExportDetailsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/codespaces/{codespace_name}/exports/{export_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/codespaces/{codespace_name}/exports/{export_id}"]["response"];
    };
    getForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/codespaces/{codespace_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/codespaces/{codespace_name}"]["response"];
    };
    getOrgPublicKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /organizations/{org}/codespaces/secrets/public-key"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /organizations/{org}/codespaces/secrets/public-key"]["response"];
    };
    getOrgSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /organizations/{org}/codespaces/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /organizations/{org}/codespaces/secrets/{secret_name}"]["response"];
    };
    getPublicKeyForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/codespaces/secrets/public-key"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/codespaces/secrets/public-key"]["response"];
    };
    getRepoPublicKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/codespaces/secrets/public-key"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/codespaces/secrets/public-key"]["response"];
    };
    getRepoSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"]["response"];
    };
    getSecretForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/codespaces/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/codespaces/secrets/{secret_name}"]["response"];
    };
    listDevcontainersInRepositoryForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/codespaces/devcontainers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/codespaces/devcontainers"]["response"];
    };
    listForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/codespaces"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/codespaces"]["response"];
    };
    listInOrganization: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/codespaces"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/codespaces"]["response"];
    };
    listInRepositoryForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/codespaces"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/codespaces"]["response"];
    };
    listOrgSecrets: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /organizations/{org}/codespaces/secrets"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /organizations/{org}/codespaces/secrets"]["response"];
    };
    listRepoSecrets: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/codespaces/secrets"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/codespaces/secrets"]["response"];
    };
    listRepositoriesForSecretForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/codespaces/secrets/{secret_name}/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/codespaces/secrets/{secret_name}/repositories"]["response"];
    };
    listSecretsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/codespaces/secrets"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/codespaces/secrets"]["response"];
    };
    listSelectedReposForOrgSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /organizations/{org}/codespaces/secrets/{secret_name}/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /organizations/{org}/codespaces/secrets/{secret_name}/repositories"]["response"];
    };
    preFlightWithRepoForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/codespaces/new"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/codespaces/new"]["response"];
    };
    removeRepositoryForSecretForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"]["response"];
    };
    removeSelectedRepoFromOrgSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /organizations/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /organizations/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"]["response"];
    };
    repoMachinesForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/codespaces/machines"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/codespaces/machines"]["response"];
    };
    setRepositoriesForSecretForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /user/codespaces/secrets/{secret_name}/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /user/codespaces/secrets/{secret_name}/repositories"]["response"];
    };
    setSelectedReposForOrgSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /organizations/{org}/codespaces/secrets/{secret_name}/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /organizations/{org}/codespaces/secrets/{secret_name}/repositories"]["response"];
    };
    startForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/codespaces/{codespace_name}/start"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/codespaces/{codespace_name}/start"]["response"];
    };
    stopForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/codespaces/{codespace_name}/stop"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/codespaces/{codespace_name}/stop"]["response"];
    };
    stopInOrganization: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop"]["response"];
    };
    updateForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /user/codespaces/{codespace_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /user/codespaces/{codespace_name}"]["response"];
    };
  };
  dependabot: {
    addSelectedRepoToOrgSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"]["response"];
    };
    createOrUpdateOrgSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/dependabot/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/dependabot/secrets/{secret_name}"]["response"];
    };
    createOrUpdateRepoSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"]["response"];
    };
    deleteOrgSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/dependabot/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/dependabot/secrets/{secret_name}"]["response"];
    };
    deleteRepoSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"]["response"];
    };
    getAlert: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"]["response"];
    };
    getOrgPublicKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/dependabot/secrets/public-key"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/dependabot/secrets/public-key"]["response"];
    };
    getOrgSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/dependabot/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/dependabot/secrets/{secret_name}"]["response"];
    };
    getRepoPublicKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/dependabot/secrets/public-key"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/dependabot/secrets/public-key"]["response"];
    };
    getRepoSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"]["response"];
    };
    listAlertsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/dependabot/alerts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/dependabot/alerts"]["response"];
    };
    listOrgSecrets: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/dependabot/secrets"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/dependabot/secrets"]["response"];
    };
    listRepoSecrets: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/dependabot/secrets"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/dependabot/secrets"]["response"];
    };
    listSelectedReposForOrgSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories"]["response"];
    };
    removeSelectedRepoFromOrgSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"]["response"];
    };
    setSelectedReposForOrgSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories"]["response"];
    };
    updateAlert: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"]["response"];
    };
  };
  dependencyGraph: {
    createRepositorySnapshot: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/dependency-graph/snapshots"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/dependency-graph/snapshots"]["response"];
    };
    diffRange: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}"]["response"];
    };
  };
  emojis: {
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /emojis"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /emojis"]["response"];
    };
  };
  enterpriseAdmin: {
    addCustomLabelsToSelfHostedRunnerForEnterprise: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /enterprises/{enterprise}/actions/runners/{runner_id}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /enterprises/{enterprise}/actions/runners/{runner_id}/labels"]["response"];
    };
    disableSelectedOrganizationGithubActionsEnterprise: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}"]["response"];
    };
    enableSelectedOrganizationGithubActionsEnterprise: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}"]["response"];
    };
    getAllowedActionsEnterprise: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /enterprises/{enterprise}/actions/permissions/selected-actions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /enterprises/{enterprise}/actions/permissions/selected-actions"]["response"];
    };
    getGithubActionsPermissionsEnterprise: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /enterprises/{enterprise}/actions/permissions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /enterprises/{enterprise}/actions/permissions"]["response"];
    };
    getServerStatistics: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /enterprise-installation/{enterprise_or_org}/server-statistics"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /enterprise-installation/{enterprise_or_org}/server-statistics"]["response"];
    };
    listLabelsForSelfHostedRunnerForEnterprise: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /enterprises/{enterprise}/actions/runners/{runner_id}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /enterprises/{enterprise}/actions/runners/{runner_id}/labels"]["response"];
    };
    listSelectedOrganizationsEnabledGithubActionsEnterprise: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /enterprises/{enterprise}/actions/permissions/organizations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /enterprises/{enterprise}/actions/permissions/organizations"]["response"];
    };
    removeAllCustomLabelsFromSelfHostedRunnerForEnterprise: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /enterprises/{enterprise}/actions/runners/{runner_id}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /enterprises/{enterprise}/actions/runners/{runner_id}/labels"]["response"];
    };
    removeCustomLabelFromSelfHostedRunnerForEnterprise: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /enterprises/{enterprise}/actions/runners/{runner_id}/labels/{name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /enterprises/{enterprise}/actions/runners/{runner_id}/labels/{name}"]["response"];
    };
    setAllowedActionsEnterprise: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /enterprises/{enterprise}/actions/permissions/selected-actions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /enterprises/{enterprise}/actions/permissions/selected-actions"]["response"];
    };
    setCustomLabelsForSelfHostedRunnerForEnterprise: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /enterprises/{enterprise}/actions/runners/{runner_id}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /enterprises/{enterprise}/actions/runners/{runner_id}/labels"]["response"];
    };
    setGithubActionsPermissionsEnterprise: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /enterprises/{enterprise}/actions/permissions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /enterprises/{enterprise}/actions/permissions"]["response"];
    };
    setSelectedOrganizationsEnabledGithubActionsEnterprise: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /enterprises/{enterprise}/actions/permissions/organizations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /enterprises/{enterprise}/actions/permissions/organizations"]["response"];
    };
  };
  gists: {
    checkIsStarred: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/{gist_id}/star"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/{gist_id}/star"]["response"];
    };
    create: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /gists"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /gists"]["response"];
    };
    createComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /gists/{gist_id}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /gists/{gist_id}/comments"]["response"];
    };
    delete: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /gists/{gist_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /gists/{gist_id}"]["response"];
    };
    deleteComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /gists/{gist_id}/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /gists/{gist_id}/comments/{comment_id}"]["response"];
    };
    fork: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /gists/{gist_id}/forks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /gists/{gist_id}/forks"]["response"];
    };
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/{gist_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/{gist_id}"]["response"];
    };
    getComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/{gist_id}/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/{gist_id}/comments/{comment_id}"]["response"];
    };
    getRevision: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/{gist_id}/{sha}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/{gist_id}/{sha}"]["response"];
    };
    list: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists"]["response"];
    };
    listComments: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/{gist_id}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/{gist_id}/comments"]["response"];
    };
    listCommits: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/{gist_id}/commits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/{gist_id}/commits"]["response"];
    };
    listForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/gists"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/gists"]["response"];
    };
    listForks: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/{gist_id}/forks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/{gist_id}/forks"]["response"];
    };
    listPublic: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/public"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/public"]["response"];
    };
    listStarred: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/starred"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/starred"]["response"];
    };
    star: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /gists/{gist_id}/star"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /gists/{gist_id}/star"]["response"];
    };
    unstar: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /gists/{gist_id}/star"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /gists/{gist_id}/star"]["response"];
    };
    update: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /gists/{gist_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /gists/{gist_id}"]["response"];
    };
    updateComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /gists/{gist_id}/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /gists/{gist_id}/comments/{comment_id}"]["response"];
    };
  };
  git: {
    createBlob: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/git/blobs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/git/blobs"]["response"];
    };
    createCommit: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/git/commits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/git/commits"]["response"];
    };
    createRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/git/refs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/git/refs"]["response"];
    };
    createTag: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/git/tags"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/git/tags"]["response"];
    };
    createTree: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/git/trees"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/git/trees"]["response"];
    };
    deleteRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/git/refs/{ref}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/git/refs/{ref}"]["response"];
    };
    getBlob: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"]["response"];
    };
    getCommit: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"]["response"];
    };
    getRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/git/ref/{ref}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/git/ref/{ref}"]["response"];
    };
    getTag: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"]["response"];
    };
    getTree: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"]["response"];
    };
    listMatchingRefs: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"]["response"];
    };
    updateRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/git/refs/{ref}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/git/refs/{ref}"]["response"];
    };
  };
  gitignore: {
    getAllTemplates: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gitignore/templates"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gitignore/templates"]["response"];
    };
    getTemplate: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gitignore/templates/{name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gitignore/templates/{name}"]["response"];
    };
  };
  interactions: {
    getRestrictionsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/interaction-limits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/interaction-limits"]["response"];
    };
    getRestrictionsForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/interaction-limits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/interaction-limits"]["response"];
    };
    getRestrictionsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/interaction-limits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/interaction-limits"]["response"];
    };
    getRestrictionsForYourPublicRepos: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/interaction-limits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/interaction-limits"]["response"];
    };
    removeRestrictionsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/interaction-limits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/interaction-limits"]["response"];
    };
    removeRestrictionsForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/interaction-limits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/interaction-limits"]["response"];
    };
    removeRestrictionsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/interaction-limits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/interaction-limits"]["response"];
    };
    removeRestrictionsForYourPublicRepos: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/interaction-limits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/interaction-limits"]["response"];
    };
    setRestrictionsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /user/interaction-limits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /user/interaction-limits"]["response"];
    };
    setRestrictionsForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/interaction-limits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/interaction-limits"]["response"];
    };
    setRestrictionsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/interaction-limits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/interaction-limits"]["response"];
    };
    setRestrictionsForYourPublicRepos: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /user/interaction-limits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /user/interaction-limits"]["response"];
    };
  };
  issues: {
    addAssignees: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"]["response"];
    };
    addLabels: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"]["response"];
    };
    checkUserCanBeAssigned: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/assignees/{assignee}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/assignees/{assignee}"]["response"];
    };
    create: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/issues"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/issues"]["response"];
    };
    createComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/issues/{issue_number}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/issues/{issue_number}/comments"]["response"];
    };
    createLabel: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/labels"]["response"];
    };
    createMilestone: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/milestones"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/milestones"]["response"];
    };
    deleteComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"]["response"];
    };
    deleteLabel: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/labels/{name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/labels/{name}"]["response"];
    };
    deleteMilestone: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"]["response"];
    };
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}"]["response"];
    };
    getComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"]["response"];
    };
    getEvent: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues/events/{event_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues/events/{event_id}"]["response"];
    };
    getLabel: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/labels/{name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/labels/{name}"]["response"];
    };
    getMilestone: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/milestones/{milestone_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/milestones/{milestone_number}"]["response"];
    };
    list: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /issues"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /issues"]["response"];
    };
    listAssignees: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/assignees"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/assignees"]["response"];
    };
    listComments: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"]["response"];
    };
    listCommentsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues/comments"]["response"];
    };
    listEvents: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/events"]["response"];
    };
    listEventsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues/events"]["response"];
    };
    listEventsForTimeline: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/timeline"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/timeline"]["response"];
    };
    listForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/issues"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/issues"]["response"];
    };
    listForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/issues"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/issues"]["response"];
    };
    listForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues"]["response"];
    };
    listLabelsForMilestone: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"]["response"];
    };
    listLabelsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/labels"]["response"];
    };
    listLabelsOnIssue: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/labels"]["response"];
    };
    listMilestones: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/milestones"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/milestones"]["response"];
    };
    lock: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"]["response"];
    };
    removeAllLabels: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"]["response"];
    };
    removeAssignees: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"]["response"];
    };
    removeLabel: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"]["response"];
    };
    setLabels: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"]["response"];
    };
    unlock: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"]["response"];
    };
    update: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/issues/{issue_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/issues/{issue_number}"]["response"];
    };
    updateComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"]["response"];
    };
    updateLabel: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/labels/{name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/labels/{name}"]["response"];
    };
    updateMilestone: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"]["response"];
    };
  };
  licenses: {
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /licenses/{license}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /licenses/{license}"]["response"];
    };
    getAllCommonlyUsed: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /licenses"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /licenses"]["response"];
    };
    getForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/license"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/license"]["response"];
    };
  };
  markdown: {
    render: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /markdown"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /markdown"]["response"];
    };
    renderRaw: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /markdown/raw"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /markdown/raw"]["response"];
    };
  };
  meta: {
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /meta"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /meta"]["response"];
    };
    getOctocat: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /octocat"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /octocat"]["response"];
    };
    getZen: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /zen"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /zen"]["response"];
    };
    root: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /"]["response"];
    };
  };
  migrations: {
    cancelImport: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/import"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/import"]["response"];
    };
    deleteArchiveForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/migrations/{migration_id}/archive"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/migrations/{migration_id}/archive"]["response"];
    };
    deleteArchiveForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/migrations/{migration_id}/archive"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/migrations/{migration_id}/archive"]["response"];
    };
    downloadArchiveForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/migrations/{migration_id}/archive"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/migrations/{migration_id}/archive"]["response"];
    };
    getArchiveForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/migrations/{migration_id}/archive"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/migrations/{migration_id}/archive"]["response"];
    };
    getCommitAuthors: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/import/authors"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/import/authors"]["response"];
    };
    getImportStatus: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/import"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/import"]["response"];
    };
    getLargeFiles: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/import/large_files"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/import/large_files"]["response"];
    };
    getStatusForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/migrations/{migration_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/migrations/{migration_id}"]["response"];
    };
    getStatusForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/migrations/{migration_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/migrations/{migration_id}"]["response"];
    };
    listForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/migrations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/migrations"]["response"];
    };
    listForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/migrations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/migrations"]["response"];
    };
    listReposForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/migrations/{migration_id}/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/migrations/{migration_id}/repositories"]["response"];
    };
    listReposForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/migrations/{migration_id}/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/migrations/{migration_id}/repositories"]["response"];
    };
    listReposForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/migrations/{migration_id}/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/migrations/{migration_id}/repositories"]["response"];
    };
    mapCommitAuthor: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/import/authors/{author_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/import/authors/{author_id}"]["response"];
    };
    setLfsPreference: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/import/lfs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/import/lfs"]["response"];
    };
    startForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/migrations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/migrations"]["response"];
    };
    startForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/migrations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/migrations"]["response"];
    };
    startImport: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/import"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/import"]["response"];
    };
    unlockRepoForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock"]["response"];
    };
    unlockRepoForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock"]["response"];
    };
    updateImport: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/import"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/import"]["response"];
    };
  };
  orgs: {
    addSecurityManagerTeam: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/security-managers/teams/{team_slug}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/security-managers/teams/{team_slug}"]["response"];
    };
    blockUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/blocks/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/blocks/{username}"]["response"];
    };
    cancelInvitation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/invitations/{invitation_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/invitations/{invitation_id}"]["response"];
    };
    checkBlockedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/blocks/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/blocks/{username}"]["response"];
    };
    checkMembershipForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/members/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/members/{username}"]["response"];
    };
    checkPublicMembershipForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/public_members/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/public_members/{username}"]["response"];
    };
    convertMemberToOutsideCollaborator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/outside_collaborators/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/outside_collaborators/{username}"]["response"];
    };
    createCustomRole: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/custom_roles"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/custom_roles"]["response"];
    };
    createInvitation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/invitations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/invitations"]["response"];
    };
    createWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/hooks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/hooks"]["response"];
    };
    deleteCustomRole: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/custom_roles/{role_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/custom_roles/{role_id}"]["response"];
    };
    deleteWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/hooks/{hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/hooks/{hook_id}"]["response"];
    };
    enableOrDisableSecurityProductOnAllOrgRepos: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/{security_product}/{enablement}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/{security_product}/{enablement}"]["response"];
    };
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}"]["response"];
    };
    getMembershipForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/memberships/orgs/{org}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/memberships/orgs/{org}"]["response"];
    };
    getMembershipForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/memberships/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/memberships/{username}"]["response"];
    };
    getWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/hooks/{hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/hooks/{hook_id}"]["response"];
    };
    getWebhookConfigForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/hooks/{hook_id}/config"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/hooks/{hook_id}/config"]["response"];
    };
    getWebhookDelivery: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}"]["response"];
    };
    list: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /organizations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /organizations"]["response"];
    };
    listAppInstallations: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/installations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/installations"]["response"];
    };
    listBlockedUsers: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/blocks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/blocks"]["response"];
    };
    listCustomRoles: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /organizations/{organization_id}/custom_roles"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /organizations/{organization_id}/custom_roles"]["response"];
    };
    listFailedInvitations: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/failed_invitations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/failed_invitations"]["response"];
    };
    listFineGrainedPermissions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/fine_grained_permissions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/fine_grained_permissions"]["response"];
    };
    listForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/orgs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/orgs"]["response"];
    };
    listForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/orgs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/orgs"]["response"];
    };
    listInvitationTeams: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/invitations/{invitation_id}/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/invitations/{invitation_id}/teams"]["response"];
    };
    listMembers: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/members"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/members"]["response"];
    };
    listMembershipsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/memberships/orgs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/memberships/orgs"]["response"];
    };
    listOutsideCollaborators: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/outside_collaborators"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/outside_collaborators"]["response"];
    };
    listPendingInvitations: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/invitations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/invitations"]["response"];
    };
    listPublicMembers: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/public_members"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/public_members"]["response"];
    };
    listSecurityManagerTeams: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/security-managers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/security-managers"]["response"];
    };
    listWebhookDeliveries: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/hooks/{hook_id}/deliveries"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/hooks/{hook_id}/deliveries"]["response"];
    };
    listWebhooks: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/hooks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/hooks"]["response"];
    };
    pingWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/hooks/{hook_id}/pings"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/hooks/{hook_id}/pings"]["response"];
    };
    redeliverWebhookDelivery: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"]["response"];
    };
    removeMember: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/members/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/members/{username}"]["response"];
    };
    removeMembershipForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/memberships/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/memberships/{username}"]["response"];
    };
    removeOutsideCollaborator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/outside_collaborators/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/outside_collaborators/{username}"]["response"];
    };
    removePublicMembershipForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/public_members/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/public_members/{username}"]["response"];
    };
    removeSecurityManagerTeam: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/security-managers/teams/{team_slug}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/security-managers/teams/{team_slug}"]["response"];
    };
    setMembershipForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/memberships/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/memberships/{username}"]["response"];
    };
    setPublicMembershipForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/public_members/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/public_members/{username}"]["response"];
    };
    unblockUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/blocks/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/blocks/{username}"]["response"];
    };
    update: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /orgs/{org}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /orgs/{org}"]["response"];
    };
    updateCustomRole: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /orgs/{org}/custom_roles/{role_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /orgs/{org}/custom_roles/{role_id}"]["response"];
    };
    updateMembershipForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /user/memberships/orgs/{org}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /user/memberships/orgs/{org}"]["response"];
    };
    updateWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /orgs/{org}/hooks/{hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /orgs/{org}/hooks/{hook_id}"]["response"];
    };
    updateWebhookConfigForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /orgs/{org}/hooks/{hook_id}/config"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /orgs/{org}/hooks/{hook_id}/config"]["response"];
    };
  };
  packages: {
    deletePackageForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/packages/{package_type}/{package_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/packages/{package_type}/{package_name}"]["response"];
    };
    deletePackageForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/packages/{package_type}/{package_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/packages/{package_type}/{package_name}"]["response"];
    };
    deletePackageForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /users/{username}/packages/{package_type}/{package_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /users/{username}/packages/{package_type}/{package_name}"]["response"];
    };
    deletePackageVersionForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}"]["response"];
    };
    deletePackageVersionForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"]["response"];
    };
    deletePackageVersionForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"]["response"];
    };
    getAllPackageVersionsForAPackageOwnedByAnOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/packages/{package_type}/{package_name}/versions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/packages/{package_type}/{package_name}/versions"]["response"];
    };
    getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/packages/{package_type}/{package_name}/versions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/packages/{package_type}/{package_name}/versions"]["response"];
    };
    getAllPackageVersionsForPackageOwnedByAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/packages/{package_type}/{package_name}/versions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/packages/{package_type}/{package_name}/versions"]["response"];
    };
    getAllPackageVersionsForPackageOwnedByOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/packages/{package_type}/{package_name}/versions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/packages/{package_type}/{package_name}/versions"]["response"];
    };
    getAllPackageVersionsForPackageOwnedByUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/packages/{package_type}/{package_name}/versions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/packages/{package_type}/{package_name}/versions"]["response"];
    };
    getPackageForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/packages/{package_type}/{package_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/packages/{package_type}/{package_name}"]["response"];
    };
    getPackageForOrganization: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/packages/{package_type}/{package_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/packages/{package_type}/{package_name}"]["response"];
    };
    getPackageForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/packages/{package_type}/{package_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/packages/{package_type}/{package_name}"]["response"];
    };
    getPackageVersionForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}"]["response"];
    };
    getPackageVersionForOrganization: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"]["response"];
    };
    getPackageVersionForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"]["response"];
    };
    listPackagesForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/packages"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/packages"]["response"];
    };
    listPackagesForOrganization: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/packages"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/packages"]["response"];
    };
    listPackagesForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/packages"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/packages"]["response"];
    };
    restorePackageForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/packages/{package_type}/{package_name}/restore{?token}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/packages/{package_type}/{package_name}/restore{?token}"]["response"];
    };
    restorePackageForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}"]["response"];
    };
    restorePackageForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}"]["response"];
    };
    restorePackageVersionForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"]["response"];
    };
    restorePackageVersionForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"]["response"];
    };
    restorePackageVersionForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"]["response"];
    };
  };
  projects: {
    addCollaborator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /projects/{project_id}/collaborators/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /projects/{project_id}/collaborators/{username}"]["response"];
    };
    createCard: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /projects/columns/{column_id}/cards"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /projects/columns/{column_id}/cards"]["response"];
    };
    createColumn: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /projects/{project_id}/columns"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /projects/{project_id}/columns"]["response"];
    };
    createForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/projects"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/projects"]["response"];
    };
    createForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/projects"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/projects"]["response"];
    };
    createForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/projects"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/projects"]["response"];
    };
    delete: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /projects/{project_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /projects/{project_id}"]["response"];
    };
    deleteCard: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /projects/columns/cards/{card_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /projects/columns/cards/{card_id}"]["response"];
    };
    deleteColumn: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /projects/columns/{column_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /projects/columns/{column_id}"]["response"];
    };
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /projects/{project_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /projects/{project_id}"]["response"];
    };
    getCard: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /projects/columns/cards/{card_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /projects/columns/cards/{card_id}"]["response"];
    };
    getColumn: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /projects/columns/{column_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /projects/columns/{column_id}"]["response"];
    };
    getPermissionForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /projects/{project_id}/collaborators/{username}/permission"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /projects/{project_id}/collaborators/{username}/permission"]["response"];
    };
    listCards: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /projects/columns/{column_id}/cards"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /projects/columns/{column_id}/cards"]["response"];
    };
    listCollaborators: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /projects/{project_id}/collaborators"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /projects/{project_id}/collaborators"]["response"];
    };
    listColumns: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /projects/{project_id}/columns"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /projects/{project_id}/columns"]["response"];
    };
    listForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/projects"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/projects"]["response"];
    };
    listForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/projects"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/projects"]["response"];
    };
    listForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/projects"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/projects"]["response"];
    };
    moveCard: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /projects/columns/cards/{card_id}/moves"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /projects/columns/cards/{card_id}/moves"]["response"];
    };
    moveColumn: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /projects/columns/{column_id}/moves"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /projects/columns/{column_id}/moves"]["response"];
    };
    removeCollaborator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /projects/{project_id}/collaborators/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /projects/{project_id}/collaborators/{username}"]["response"];
    };
    update: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /projects/{project_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /projects/{project_id}"]["response"];
    };
    updateCard: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /projects/columns/cards/{card_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /projects/columns/cards/{card_id}"]["response"];
    };
    updateColumn: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /projects/columns/{column_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /projects/columns/{column_id}"]["response"];
    };
  };
  pulls: {
    checkIfMerged: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"]["response"];
    };
    create: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/pulls"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/pulls"]["response"];
    };
    createReplyForReviewComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"]["response"];
    };
    createReview: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"]["response"];
    };
    createReviewComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"]["response"];
    };
    deletePendingReview: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"]["response"];
    };
    deleteReviewComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"]["response"];
    };
    dismissReview: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"]["response"];
    };
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}"]["response"];
    };
    getReview: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"]["response"];
    };
    getReviewComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"]["response"];
    };
    list: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls"]["response"];
    };
    listCommentsForReview: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"]["response"];
    };
    listCommits: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"]["response"];
    };
    listFiles: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"]["response"];
    };
    listRequestedReviewers: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"]["response"];
    };
    listReviewComments: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"]["response"];
    };
    listReviewCommentsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/comments"]["response"];
    };
    listReviews: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"]["response"];
    };
    merge: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"]["response"];
    };
    removeRequestedReviewers: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"]["response"];
    };
    requestReviewers: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"]["response"];
    };
    submitReview: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"]["response"];
    };
    update: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"]["response"];
    };
    updateBranch: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch"]["response"];
    };
    updateReview: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"]["response"];
    };
    updateReviewComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"]["response"];
    };
  };
  rateLimit: {
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /rate_limit"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /rate_limit"]["response"];
    };
  };
  reactions: {
    createForCommitComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/comments/{comment_id}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/comments/{comment_id}/reactions"]["response"];
    };
    createForIssue: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/issues/{issue_number}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/issues/{issue_number}/reactions"]["response"];
    };
    createForIssueComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"]["response"];
    };
    createForPullRequestReviewComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"]["response"];
    };
    createForRelease: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/releases/{release_id}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/releases/{release_id}/reactions"]["response"];
    };
    createForTeamDiscussionCommentInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"]["response"];
    };
    createForTeamDiscussionInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"]["response"];
    };
    deleteForCommitComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}"]["response"];
    };
    deleteForIssue: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}"]["response"];
    };
    deleteForIssueComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}"]["response"];
    };
    deleteForPullRequestComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}"]["response"];
    };
    deleteForRelease: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}"]["response"];
    };
    deleteForTeamDiscussion: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}"]["response"];
    };
    deleteForTeamDiscussionComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}"]["response"];
    };
    listForCommitComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/comments/{comment_id}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/comments/{comment_id}/reactions"]["response"];
    };
    listForIssue: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions"]["response"];
    };
    listForIssueComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"]["response"];
    };
    listForPullRequestReviewComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"]["response"];
    };
    listForRelease: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/releases/{release_id}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/releases/{release_id}/reactions"]["response"];
    };
    listForTeamDiscussionCommentInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"]["response"];
    };
    listForTeamDiscussionInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"]["response"];
    };
  };
  repos: {
    acceptInvitation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /user/repository_invitations/{invitation_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /user/repository_invitations/{invitation_id}"]["response"];
    };
    acceptInvitationForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /user/repository_invitations/{invitation_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /user/repository_invitations/{invitation_id}"]["response"];
    };
    addAppAccessRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"]["response"];
    };
    addCollaborator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/collaborators/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/collaborators/{username}"]["response"];
    };
    addStatusCheckContexts: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"]["response"];
    };
    addTeamAccessRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"]["response"];
    };
    addUserAccessRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"]["response"];
    };
    checkCollaborator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/collaborators/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/collaborators/{username}"]["response"];
    };
    checkVulnerabilityAlerts: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/vulnerability-alerts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/vulnerability-alerts"]["response"];
    };
    codeownersErrors: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/codeowners/errors"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/codeowners/errors"]["response"];
    };
    compareCommits: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/compare/{base}...{head}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/compare/{base}...{head}"]["response"];
    };
    compareCommitsWithBasehead: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/compare/{basehead}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/compare/{basehead}"]["response"];
    };
    createAutolink: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/autolinks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/autolinks"]["response"];
    };
    createCommitComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"]["response"];
    };
    createCommitSignatureProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"]["response"];
    };
    createCommitStatus: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/statuses/{sha}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/statuses/{sha}"]["response"];
    };
    createDeployKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/keys"]["response"];
    };
    createDeployment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/deployments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/deployments"]["response"];
    };
    createDeploymentBranchPolicy: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"]["response"];
    };
    createDeploymentStatus: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"]["response"];
    };
    createDispatchEvent: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/dispatches"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/dispatches"]["response"];
    };
    createForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/repos"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/repos"]["response"];
    };
    createFork: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/forks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/forks"]["response"];
    };
    createInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/repos"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/repos"]["response"];
    };
    createOrUpdateEnvironment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/environments/{environment_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/environments/{environment_name}"]["response"];
    };
    createOrUpdateFileContents: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/contents/{path}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/contents/{path}"]["response"];
    };
    createPagesDeployment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/pages/deployment"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/pages/deployment"]["response"];
    };
    createPagesSite: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/pages"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/pages"]["response"];
    };
    createRelease: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/releases"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/releases"]["response"];
    };
    createTagProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/tags/protection"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/tags/protection"]["response"];
    };
    createUsingTemplate: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{template_owner}/{template_repo}/generate"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{template_owner}/{template_repo}/generate"]["response"];
    };
    createWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/hooks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/hooks"]["response"];
    };
    declineInvitation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/repository_invitations/{invitation_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/repository_invitations/{invitation_id}"]["response"];
    };
    declineInvitationForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/repository_invitations/{invitation_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/repository_invitations/{invitation_id}"]["response"];
    };
    delete: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}"]["response"];
    };
    deleteAccessRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"]["response"];
    };
    deleteAdminBranchProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"]["response"];
    };
    deleteAnEnvironment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/environments/{environment_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/environments/{environment_name}"]["response"];
    };
    deleteAutolink: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}"]["response"];
    };
    deleteBranchProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection"]["response"];
    };
    deleteCommitComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/comments/{comment_id}"]["response"];
    };
    deleteCommitSignatureProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"]["response"];
    };
    deleteDeployKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/keys/{key_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/keys/{key_id}"]["response"];
    };
    deleteDeployment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"]["response"];
    };
    deleteDeploymentBranchPolicy: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"]["response"];
    };
    deleteFile: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/contents/{path}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/contents/{path}"]["response"];
    };
    deleteInvitation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"]["response"];
    };
    deletePagesSite: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/pages"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/pages"]["response"];
    };
    deletePullRequestReviewProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"]["response"];
    };
    deleteRelease: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/releases/{release_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/releases/{release_id}"]["response"];
    };
    deleteReleaseAsset: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"]["response"];
    };
    deleteTagProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}"]["response"];
    };
    deleteWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"]["response"];
    };
    disableAutomatedSecurityFixes: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/automated-security-fixes"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/automated-security-fixes"]["response"];
    };
    disableLfsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/lfs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/lfs"]["response"];
    };
    disableVulnerabilityAlerts: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/vulnerability-alerts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/vulnerability-alerts"]["response"];
    };
    downloadArchive: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/zipball/{ref}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/zipball/{ref}"]["response"];
    };
    downloadTarballArchive: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/tarball/{ref}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/tarball/{ref}"]["response"];
    };
    downloadZipballArchive: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/zipball/{ref}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/zipball/{ref}"]["response"];
    };
    enableAutomatedSecurityFixes: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/automated-security-fixes"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/automated-security-fixes"]["response"];
    };
    enableLfsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/lfs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/lfs"]["response"];
    };
    enableVulnerabilityAlerts: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/vulnerability-alerts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/vulnerability-alerts"]["response"];
    };
    generateReleaseNotes: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/releases/generate-notes"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/releases/generate-notes"]["response"];
    };
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}"]["response"];
    };
    getAccessRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"]["response"];
    };
    getAdminBranchProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"]["response"];
    };
    getAllEnvironments: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/environments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/environments"]["response"];
    };
    getAllStatusCheckContexts: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"]["response"];
    };
    getAllTopics: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/topics"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/topics"]["response"];
    };
    getAppsWithAccessToProtectedBranch: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"]["response"];
    };
    getAutolink: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/autolinks/{autolink_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/autolinks/{autolink_id}"]["response"];
    };
    getBranch: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches/{branch}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches/{branch}"]["response"];
    };
    getBranchProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection"]["response"];
    };
    getClones: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/traffic/clones"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/traffic/clones"]["response"];
    };
    getCodeFrequencyStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/stats/code_frequency"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/stats/code_frequency"]["response"];
    };
    getCollaboratorPermissionLevel: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/collaborators/{username}/permission"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/collaborators/{username}/permission"]["response"];
    };
    getCombinedStatusForRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/commits/{ref}/status"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/commits/{ref}/status"]["response"];
    };
    getCommit: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/commits/{ref}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/commits/{ref}"]["response"];
    };
    getCommitActivityStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/stats/commit_activity"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/stats/commit_activity"]["response"];
    };
    getCommitComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/comments/{comment_id}"]["response"];
    };
    getCommitSignatureProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"]["response"];
    };
    getCommunityProfileMetrics: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/community/profile"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/community/profile"]["response"];
    };
    getContent: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/contents/{path}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/contents/{path}"]["response"];
    };
    getContributorsStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/stats/contributors"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/stats/contributors"]["response"];
    };
    getDeployKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/keys/{key_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/keys/{key_id}"]["response"];
    };
    getDeployment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/deployments/{deployment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/deployments/{deployment_id}"]["response"];
    };
    getDeploymentBranchPolicy: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"]["response"];
    };
    getDeploymentStatus: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"]["response"];
    };
    getEnvironment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/environments/{environment_name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/environments/{environment_name}"]["response"];
    };
    getLatestPagesBuild: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pages/builds/latest"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pages/builds/latest"]["response"];
    };
    getLatestRelease: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/releases/latest"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/releases/latest"]["response"];
    };
    getPages: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pages"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pages"]["response"];
    };
    getPagesBuild: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pages/builds/{build_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pages/builds/{build_id}"]["response"];
    };
    getPagesHealthCheck: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pages/health"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pages/health"]["response"];
    };
    getParticipationStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/stats/participation"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/stats/participation"]["response"];
    };
    getPullRequestReviewProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"]["response"];
    };
    getPunchCardStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/stats/punch_card"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/stats/punch_card"]["response"];
    };
    getReadme: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/readme"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/readme"]["response"];
    };
    getReadmeInDirectory: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/readme/{dir}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/readme/{dir}"]["response"];
    };
    getRelease: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/releases/{release_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/releases/{release_id}"]["response"];
    };
    getReleaseAsset: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"]["response"];
    };
    getReleaseByTag: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/releases/tags/{tag}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/releases/tags/{tag}"]["response"];
    };
    getStatusChecksProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"]["response"];
    };
    getTeamsWithAccessToProtectedBranch: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"]["response"];
    };
    getTopPaths: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/traffic/popular/paths"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/traffic/popular/paths"]["response"];
    };
    getTopReferrers: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/traffic/popular/referrers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/traffic/popular/referrers"]["response"];
    };
    getUsersWithAccessToProtectedBranch: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"]["response"];
    };
    getViews: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/traffic/views"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/traffic/views"]["response"];
    };
    getWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/hooks/{hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/hooks/{hook_id}"]["response"];
    };
    getWebhookConfigForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/hooks/{hook_id}/config"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/hooks/{hook_id}/config"]["response"];
    };
    getWebhookDelivery: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}"]["response"];
    };
    listAutolinks: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/autolinks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/autolinks"]["response"];
    };
    listBranches: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches"]["response"];
    };
    listBranchesForHeadCommit: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head"]["response"];
    };
    listCollaborators: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/collaborators"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/collaborators"]["response"];
    };
    listCommentsForCommit: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"]["response"];
    };
    listCommitCommentsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/comments"]["response"];
    };
    listCommitStatusesForRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/commits/{ref}/statuses"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/commits/{ref}/statuses"]["response"];
    };
    listCommits: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/commits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/commits"]["response"];
    };
    listContributors: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/contributors"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/contributors"]["response"];
    };
    listDeployKeys: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/keys"]["response"];
    };
    listDeploymentBranchPolicies: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"]["response"];
    };
    listDeploymentStatuses: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"]["response"];
    };
    listDeployments: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/deployments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/deployments"]["response"];
    };
    listForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/repos"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/repos"]["response"];
    };
    listForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/repos"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/repos"]["response"];
    };
    listForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/repos"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/repos"]["response"];
    };
    listForks: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/forks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/forks"]["response"];
    };
    listInvitations: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/invitations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/invitations"]["response"];
    };
    listInvitationsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/repository_invitations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/repository_invitations"]["response"];
    };
    listLanguages: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/languages"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/languages"]["response"];
    };
    listPagesBuilds: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pages/builds"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pages/builds"]["response"];
    };
    listPublic: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repositories"]["response"];
    };
    listPullRequestsAssociatedWithCommit: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls"]["response"];
    };
    listReleaseAssets: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/releases/{release_id}/assets"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/releases/{release_id}/assets"]["response"];
    };
    listReleases: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/releases"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/releases"]["response"];
    };
    listTagProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/tags/protection"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/tags/protection"]["response"];
    };
    listTags: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/tags"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/tags"]["response"];
    };
    listTeams: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/teams"]["response"];
    };
    listWebhookDeliveries: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries"]["response"];
    };
    listWebhooks: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/hooks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/hooks"]["response"];
    };
    merge: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/merges"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/merges"]["response"];
    };
    mergeUpstream: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/merge-upstream"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/merge-upstream"]["response"];
    };
    pingWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"]["response"];
    };
    redeliverWebhookDelivery: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"]["response"];
    };
    removeAppAccessRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"]["response"];
    };
    removeCollaborator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/collaborators/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/collaborators/{username}"]["response"];
    };
    removeStatusCheckContexts: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"]["response"];
    };
    removeStatusCheckProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"]["response"];
    };
    removeTeamAccessRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"]["response"];
    };
    removeUserAccessRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"]["response"];
    };
    renameBranch: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/rename"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/rename"]["response"];
    };
    replaceAllTopics: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/topics"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/topics"]["response"];
    };
    requestPagesBuild: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/pages/builds"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/pages/builds"]["response"];
    };
    setAdminBranchProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"]["response"];
    };
    setAppAccessRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"]["response"];
    };
    setStatusCheckContexts: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"]["response"];
    };
    setTeamAccessRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"]["response"];
    };
    setUserAccessRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"]["response"];
    };
    testPushWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"]["response"];
    };
    transfer: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/transfer"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/transfer"]["response"];
    };
    update: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}"]["response"];
    };
    updateBranchProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/branches/{branch}/protection"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/branches/{branch}/protection"]["response"];
    };
    updateCommitComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/comments/{comment_id}"]["response"];
    };
    updateDeploymentBranchPolicy: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"]["response"];
    };
    updateInformationAboutPagesSite: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/pages"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/pages"]["response"];
    };
    updateInvitation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"]["response"];
    };
    updatePullRequestReviewProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"]["response"];
    };
    updateRelease: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/releases/{release_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/releases/{release_id}"]["response"];
    };
    updateReleaseAsset: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"]["response"];
    };
    updateStatusCheckPotection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"]["response"];
    };
    updateStatusCheckProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"]["response"];
    };
    updateWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"]["response"];
    };
    updateWebhookConfigForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"]["response"];
    };
    uploadReleaseAsset: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST {origin}/repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST {origin}/repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}"]["response"];
    };
  };
  search: {
    code: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /search/code"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /search/code"]["response"];
    };
    commits: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /search/commits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /search/commits"]["response"];
    };
    issuesAndPullRequests: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /search/issues"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /search/issues"]["response"];
    };
    labels: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /search/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /search/labels"]["response"];
    };
    repos: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /search/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /search/repositories"]["response"];
    };
    topics: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /search/topics"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /search/topics"]["response"];
    };
    users: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /search/users"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /search/users"]["response"];
    };
  };
  secretScanning: {
    getAlert: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"]["response"];
    };
    listAlertsForEnterprise: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /enterprises/{enterprise}/secret-scanning/alerts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /enterprises/{enterprise}/secret-scanning/alerts"]["response"];
    };
    listAlertsForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/secret-scanning/alerts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/secret-scanning/alerts"]["response"];
    };
    listAlertsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/secret-scanning/alerts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/secret-scanning/alerts"]["response"];
    };
    listLocationsForAlert: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations"]["response"];
    };
    updateAlert: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"]["response"];
    };
  };
  teams: {
    addOrUpdateMembershipForUserInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"]["response"];
    };
    addOrUpdateProjectPermissionsInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}"]["response"];
    };
    addOrUpdateRepoPermissionsInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"]["response"];
    };
    checkPermissionsForProjectInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/projects/{project_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/projects/{project_id}"]["response"];
    };
    checkPermissionsForRepoInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"]["response"];
    };
    create: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/teams"]["response"];
    };
    createDiscussionCommentInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"]["response"];
    };
    createDiscussionInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/teams/{team_slug}/discussions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/teams/{team_slug}/discussions"]["response"];
    };
    deleteDiscussionCommentInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"]["response"];
    };
    deleteDiscussionInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"]["response"];
    };
    deleteInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/teams/{team_slug}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/teams/{team_slug}"]["response"];
    };
    getByName: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}"]["response"];
    };
    getDiscussionCommentInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"]["response"];
    };
    getDiscussionInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"]["response"];
    };
    getMembershipForUserInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/memberships/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/memberships/{username}"]["response"];
    };
    list: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams"]["response"];
    };
    listChildInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/teams"]["response"];
    };
    listDiscussionCommentsInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"]["response"];
    };
    listDiscussionsInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions"]["response"];
    };
    listForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/teams"]["response"];
    };
    listMembersInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/members"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/members"]["response"];
    };
    listPendingInvitationsInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/invitations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/invitations"]["response"];
    };
    listProjectsInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/projects"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/projects"]["response"];
    };
    listReposInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/repos"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/repos"]["response"];
    };
    removeMembershipForUserInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"]["response"];
    };
    removeProjectInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"]["response"];
    };
    removeRepoInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"]["response"];
    };
    updateDiscussionCommentInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"]["response"];
    };
    updateDiscussionInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"]["response"];
    };
    updateInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /orgs/{org}/teams/{team_slug}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /orgs/{org}/teams/{team_slug}"]["response"];
    };
  };
  users: {
    addEmailForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/emails"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/emails"]["response"];
    };
    addEmailForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/emails"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/emails"]["response"];
    };
    block: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /user/blocks/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /user/blocks/{username}"]["response"];
    };
    checkBlocked: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/blocks/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/blocks/{username}"]["response"];
    };
    checkFollowingForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/following/{target_user}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/following/{target_user}"]["response"];
    };
    checkPersonIsFollowedByAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/following/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/following/{username}"]["response"];
    };
    createGpgKeyForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/gpg_keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/gpg_keys"]["response"];
    };
    createGpgKeyForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/gpg_keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/gpg_keys"]["response"];
    };
    createPublicSshKeyForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/keys"]["response"];
    };
    createPublicSshKeyForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/keys"]["response"];
    };
    createSshSigningKeyForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/ssh_signing_keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/ssh_signing_keys"]["response"];
    };
    deleteEmailForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/emails"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/emails"]["response"];
    };
    deleteEmailForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/emails"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/emails"]["response"];
    };
    deleteGpgKeyForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/gpg_keys/{gpg_key_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/gpg_keys/{gpg_key_id}"]["response"];
    };
    deleteGpgKeyForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/gpg_keys/{gpg_key_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/gpg_keys/{gpg_key_id}"]["response"];
    };
    deletePublicSshKeyForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/keys/{key_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/keys/{key_id}"]["response"];
    };
    deletePublicSshKeyForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/keys/{key_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/keys/{key_id}"]["response"];
    };
    deleteSshSigningKeyForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/ssh_signing_keys/{ssh_signing_key_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/ssh_signing_keys/{ssh_signing_key_id}"]["response"];
    };
    follow: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /user/following/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /user/following/{username}"]["response"];
    };
    getAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user"]["response"];
    };
    getByUsername: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}"]["response"];
    };
    getContextForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/hovercard"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/hovercard"]["response"];
    };
    getGpgKeyForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/gpg_keys/{gpg_key_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/gpg_keys/{gpg_key_id}"]["response"];
    };
    getGpgKeyForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/gpg_keys/{gpg_key_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/gpg_keys/{gpg_key_id}"]["response"];
    };
    getPublicSshKeyForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/keys/{key_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/keys/{key_id}"]["response"];
    };
    getPublicSshKeyForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/keys/{key_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/keys/{key_id}"]["response"];
    };
    getSshSigningKeyForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/ssh_signing_keys/{ssh_signing_key_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/ssh_signing_keys/{ssh_signing_key_id}"]["response"];
    };
    list: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users"]["response"];
    };
    listBlockedByAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/blocks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/blocks"]["response"];
    };
    listBlockedByAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/blocks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/blocks"]["response"];
    };
    listEmailsForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/emails"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/emails"]["response"];
    };
    listEmailsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/emails"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/emails"]["response"];
    };
    listFollowedByAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/following"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/following"]["response"];
    };
    listFollowedByAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/following"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/following"]["response"];
    };
    listFollowersForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/followers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/followers"]["response"];
    };
    listFollowersForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/followers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/followers"]["response"];
    };
    listFollowingForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/following"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/following"]["response"];
    };
    listGpgKeysForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/gpg_keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/gpg_keys"]["response"];
    };
    listGpgKeysForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/gpg_keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/gpg_keys"]["response"];
    };
    listGpgKeysForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/gpg_keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/gpg_keys"]["response"];
    };
    listPublicEmailsForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/public_emails"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/public_emails"]["response"];
    };
    listPublicEmailsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/public_emails"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/public_emails"]["response"];
    };
    listPublicKeysForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/keys"]["response"];
    };
    listPublicSshKeysForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/keys"]["response"];
    };
    listPublicSshKeysForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/keys"]["response"];
    };
    listSshSigningKeysForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/ssh_signing_keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/ssh_signing_keys"]["response"];
    };
    listSshSigningKeysForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/ssh_signing_keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/ssh_signing_keys"]["response"];
    };
    setPrimaryEmailVisibilityForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /user/email/visibility"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /user/email/visibility"]["response"];
    };
    setPrimaryEmailVisibilityForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /user/email/visibility"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /user/email/visibility"]["response"];
    };
    unblock: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/blocks/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/blocks/{username}"]["response"];
    };
    unfollow: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/following/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/following/{username}"]["response"];
    };
    updateAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /user"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /user"]["response"];
    };
  };
};
