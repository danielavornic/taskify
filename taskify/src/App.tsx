import React from 'react';

import InputField from './components/InputField';

const App: React.FC = () => {
  return (
    <div className='bg-slate-900 w-full h-screen'>
      <div className='container mx-auto py-10'>
        <h1 className='text-3xl text-center text-white font-semibold font-heading mb-8'>
          To do list
        </h1>
        <InputField />
      </div>
    </div>
  );
};

export default App;
