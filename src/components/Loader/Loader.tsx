import React from 'react';

const Loader = () => {
  return (
    <div className='grid place-content-center min-h-[calc(100vh-60vh)]'>
      <div
        className='inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#3a86ff] border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]'
        role='status'
      ></div>
    </div>
  );
};

export default Loader;
