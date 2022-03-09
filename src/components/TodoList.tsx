import { FC } from 'react';
import { Todo } from '../model-todo';
import Status from './Status';
import TodoItem from './TodoItem';

interface Props {
  status: string;
  todos: Todo[];
}

const TodoList: FC<Props> = ({ status, todos }) => {
  return (
    <div className='basis-1/3'>
      <Status status={status} />
      <div className='mt-4'>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
