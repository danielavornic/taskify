import { FC } from 'react';
import { Todo } from '../model-todo';

interface Props {
  todo: Todo;
}

const TodoItem: FC<Props> = ({ todo }) => {
  return (
    <div className='text-white bg-slate-800 p-3 rounded shadow-sm mt-2'>
      {todo.name}
    </div>
  );
};

export default TodoItem;
