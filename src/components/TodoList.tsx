import { FC } from 'react';

import useTodos from '../context';
import Status from './Status';
import TodoItem from './TodoItem';

interface Props {
  status: string;
}

const TodoList: FC<Props> = ({ status }) => {
  const { todos } = useTodos();

  return (
    <div className='basis-1/3'>
      <Status status={status} />
      <div className='mt-4'>
        {todos
          .filter((todo) => todo.status === status)
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
