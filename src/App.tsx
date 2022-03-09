import { FC, FormEvent, useState } from 'react';

import { Todo } from './model-todo';

import InputField from './components/InputField';
import TodoList from './components/TodoList';

const App: FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const statuses = ['Not started', 'In progress', 'Done'];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (todo) {
      const newTodo: Todo = {
        id: Date.now(),
        name: todo,
        status: 'Not started',
      };
      setTodos([...todos, newTodo]);
      setTodo('');
    }
  };

  return (
    <div className='container mx-auto py-10'>
      <h1 className='text-3xl text-center text-white font-semibold font-heading mb-8'>
        To do list
      </h1>
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      {todos.length > 0 && (
        <div className='grid gap-5 grid-cols-1 sm:grid-cols-3 mt-10 px-8 md:px-0 lg:px-10'>
          {statuses.map((status, idx) => (
            <TodoList
              status={status}
              key={idx}
              todos={todos.filter((todo) => todo.status === status)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
