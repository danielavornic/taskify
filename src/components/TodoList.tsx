import { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';

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
      <Droppable droppableId={status}>
        {({ innerRef, droppableProps, placeholder }) => (
          <div className='mt-4 pb-10' ref={innerRef} {...droppableProps}>
            {todos
              .filter((todo) => todo.status === status)
              .map((todo, index) => (
                <TodoItem key={todo.id} index={index} todo={todo} />
              ))}
            {placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
