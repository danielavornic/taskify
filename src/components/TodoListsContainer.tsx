import { FC } from 'react';

import { statuses } from '../types';
import useTodos from '../context';

import TodoList from './TodoList';

const TodoListsContainer: FC = () => {
  const { todos } = useTodos();

  return (
    <div>
      {todos.length > 0 && (
        <div className='grid gap-5 grid-cols-1 sm:grid-cols-3 mt-10 px-8 md:px-0 lg:px-10'>
          {statuses.map((status, idx) => (
            <TodoList status={status} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoListsContainer;
