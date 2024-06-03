import React, { Suspense } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Loader from './components/Loader/Loader';

function App() {
  return (
    <div className='grid gap-4 m-6'>
      <h1 className='text-2xl font-semibold '>Issues </h1>
      <Cards />
    </div>
  );
}

export default App;
