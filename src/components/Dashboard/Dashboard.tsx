import { useEffect, useState } from 'react';
import { JiraResType, ResType } from '../../global';
import { jiraIssuesList } from '../../utils/fetchutils';
import Loader from '../Loader/Loader';
import Card from '../Card/Card';
import Select from '../Select/Select';
import { FilterByStatusOption } from '../../utils/constant';

const Cards = () => {
  const [issues, setIssues] = useState<[] | ResType>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [isFilter, setIsFilter] = useState(false);
  const [filteredIssues, setFilteredIssues] = useState<[] | ResType>([]);
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
  const onSelectOfStatus = async (status: string) => {
    setIsFilter(true);
    if (status === 'All') {
      setIsFilter(false);
      return;
    }

    const filteredIssues = issues.filter(
      (issue: JiraResType) => issue.status === status
    );
    setFilteredIssues(filteredIssues);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (isFetching) return <Loader />;
  if (error)
    return (
      <div className='text-red-500 text-xl grid place-content-center font-semibold'>
        {error}
      </div>
    );
  return (
    <main className='grid gap-6 m-6'>
      <h1 className='text-2xl font-semibold '>Todo App Issues </h1>

      <div>
        <p className='text-sm text-slate-500'>Filter by status</p>
        <Select
          selectOptions={FilterByStatusOption}
          onSelect={(status) => onSelectOfStatus(status)}
        />
      </div>
      <div className='flex flex-wrap gap-5'>
        {(isFilter ? filteredIssues : issues).map((issue: JiraResType) => (
          <Card key={issue.key} issue={issue} />
        ))}
      </div>
    </main>
  );
};

export default Cards;
