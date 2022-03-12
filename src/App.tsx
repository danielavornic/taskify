import { FC } from 'react';

import { TodosProvider } from './context';

import InputField from './components/InputField';
import TodoListsContainer from './components/TodoListsContainer';

const App: FC = () => {
  return (
    <TodosProvider>
      <div className='min-h-screen bg-slate-900'>
        <div className='container mx-auto py-10'>
          <h1 className='text-3xl text-center text-white font-semibold font-heading mb-8'>
            To do list
          </h1>
          <InputField />
          <TodoListsContainer />
        </div>
      </div>
    </TodosProvider>
  );
};

export default App;
