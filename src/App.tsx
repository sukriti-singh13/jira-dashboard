import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards/Cards';
import { jiraIssuesList } from './utils/fetchutils';
import { ResType } from './global';

function App() {
  const [issues, setIssues] = useState<[] | ResType>([]);
  const fetchData = async () => {
    const res: ResType | [] = await jiraIssuesList();
    console.log(res);
    setIssues(res);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='m-6'>
      <div className='grid gap-4'>
        <h1 className='text-2xl font-semibold '>Issues </h1>
        <div className='flex flex-wrap  gap-5'>
          <Cards issues={issues} />
        </div>
      </div>
    </div>
  );
}

export default App;
