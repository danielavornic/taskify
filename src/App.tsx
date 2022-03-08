import { useState } from 'react';

import InputField from './components/InputField';

import { Todo } from './model-todo';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      const newTodo: Todo = {
        id: Date.now(),
        name: todo,
        status: 'not-started',
      };
      setTodos([...todos, newTodo]);
      setTodo('');
    }
  };

  return (
    <div className='bg-slate-900 w-full h-screen'>
      <div className='container mx-auto py-10'>
        <h1 className='text-3xl text-center text-white font-semibold font-heading mb-8'>
          To do list
        </h1>
        <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default App;
