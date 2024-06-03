export type JiraResType = {
  key: string;
  summary: string;
  issueType: 'Bug' | 'Task';
  status: string;
  assignee: string;
};

export type ResType = JiraResType[];
export type ErrorResponse ={
  error: string;
}