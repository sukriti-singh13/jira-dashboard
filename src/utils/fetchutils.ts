import { ErrorResponse, ResType } from '../global';

const jiraToken = process.env.REACT_APP_JIRA_API_TOKEN;
const adminId = process.env.REACT_APP_ADMIN_ID;

const HEADERS = {
  Authorization: `Basic ${btoa(`${adminId}:${jiraToken}`)}`,
  Accept: 'application/json',
  'access-control-allow-origin': '*',
};

const jiraFetchWrapper = async (jql: string): Promise<any> => {
  try {
    const response = await fetch(`/rest/api/3/search?maxResults=100&jql=${jql}`, {
      method: 'GET',
      headers: HEADERS,
    });

   
    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(errorBody.errorMessages || `Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch Jira issues:', error);
    throw error; 
  }
};

export const jiraIssuesList = async (): Promise<ResType | ErrorResponse> => {
  try {
    const result = await jiraFetchWrapper('project=TEST');
    const filteredIssues: ResType = result.issues.map((issue: any) => ({
      key: issue.key,
      summary: issue.fields.summary,
      issueType: issue.fields.issuetype.name,
      status: issue.fields.status.name,
      assignee: issue.fields.assignee ? issue.fields.assignee.displayName : null,
    }));

    return filteredIssues;
  } catch (error) {
    console.error('Failed to get Jira issues list:', error);
    return { error: (error as Error).message }; 
  }
};
