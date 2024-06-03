import { ResType } from "../global";


const jiraToken = process.env.REACT_APP_JIRA_API_TOKEN;
const jiraDomain = process.env.REACT_APP_JIRA_DOMAIN;
const adminId = process.env.REACT_APP_ADMIN_ID;

const HEADERS = {
  Authorization: `Basic ${btoa(`${adminId}:${jiraToken}`)}`,
  Accept: 'application/json',
};

const jiraFetchWrapper = async (jql: string): Promise<any> => {
    const response = await fetch(`/rest/api/3/search?maxResults=100&jql=${jql}`, {
      method: 'GET',
      headers: HEADERS,
    });
    return response.json();
  };
export const jiraIssuesList = async (): Promise<ResType> => {
    const result = await jiraFetchWrapper('project=TEST');
    const filteredIssues: ResType = result.issues.map((issue: any) => ({
      key: issue.key,
      summary: issue.fields.summary,
      issueType: issue.fields.issuetype.name,
      status: issue.fields.status.name,
      assignee: issue.fields.assignee
        ? issue.fields.assignee.displayName
        : 'Unassigned',
    }));
  
    return filteredIssues;
  };
