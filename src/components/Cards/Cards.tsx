import React, { useEffect, useState } from 'react';
import Badge from '../Badge/Badge';
import { JiraResType, ResType } from '../../global';
import { jiraIssuesList } from '../../utils/fetchutils';
import Loader from '../Loader/Loader';

const Cards = () => {
  const [issues, setIssues] = useState<[] | ResType>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState('');
  const fetchData = async () => {
    try {
      const res: ResType | { error: string } = await jiraIssuesList();
      if ('error' in res) {
        setError(res.error);
      } else if (res.length) {
        setIssues(res);
      }
    } catch (error) {
      console.error('Unexpected error fetching Jira issues:', error);
      setError('Unexpected error fetching Jira issues');
    } finally {
      setIsFetching(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (isFetching) return <Loader />;
  if (error) return <div className='text-red-500 text-xl grid place-content-center font-semibold'>{error}</div>;
  return (
    <div className='flex flex-wrap  gap-5'>
      {issues.map((issue: JiraResType) => (
        <div
          key={issue.key}
          className='rounded-md shadow-md  p-4 grid gap-1 bg-[#e9ecef] 
          border-dashed border-2 border-slate-300
          grow min-w-[25%] md:max-w-[30%]
          '
        >
          <div className='flex justify-between gap-6 items-center'>
            {' '}
            <p className='text-lg font-semibold '>{issue?.key}</p>
            <Badge type={issue.issueType} />
          </div>
          <p className='text-sm font-light text-slate-500'>{issue.summary}</p>
          <div className='flex justify-between gap-6 text-base'>
            <span className='flex gap-1 font-medium text-sm text-slate-500 items-center'>
              Status :
              <p
                className={`
                    text-base font-semibold
                ${
                  issue.status === 'Done'
                    ? 'text-green-500'
                    : issue.status.toLowerCase() === 'to do'
                    ? 'text-yellow-500'
                    : 'text-blue-500'
                }`}
              >
                {issue.status}
              </p>
            </span>
            {issue.assignee && <h2 className='text-base text-slate-500'>Asignee : {issue.assignee.split(' ')[0]}</h2>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
