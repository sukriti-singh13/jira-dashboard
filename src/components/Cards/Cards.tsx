import React from 'react';
import Badge from '../Badge/Badge';
import { JiraResType, ResType } from '../../global';

const Cards = ({ issues }: { issues: ResType }) => {
  if (!issues)
    return (
      <p className='text-red-500 text-base text-center'>
        Something went wrong!
      </p>
    );
  return (
    <>
      {issues.map((issue: JiraResType) => (
        <div
          key={issue.key}
          className='rounded-md shadow-md  p-4 grid gap-1 bg-[#e9ecef] 
          border-dashed border-2 border-slate-300
          grow min-w-[25%]
          '
        >
          <div className='flex justify-between gap-6 items-center'>
            {' '}
            <p className='text-lg font-semibold '>{issue?.key}</p>
            <Badge type={issue.issueType} />
          </div>
          <p className='text-sm font-light text-slate-500'>{issue.summary}</p>
          <div className='flex justify-between gap-6 text-base'>
            <span className='flex gap-1 font-base text-sm text-slate-500 items-center'>
              Status :
              <p
                className={`
                    text-base font-semibold
                ${
                  issue.status === 'Done'
                    ? 'text-green-500'
                    : issue.status.toLowerCase() === 'to do'
                    ? 'text-yellow-500'
                    : 'text-red-500'
                }`}
              >
                {issue.status}
              </p>
            </span>
            {issue.assignee && <h2>Asignee : {issue.assignee}</h2>}
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
