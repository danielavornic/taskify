import { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { StatusType, StatusTitleType } from '../types';
import useTodos from '../context';
import TodoItem from './TodoItem';
import Status from './Status';

interface Props {
  status: StatusType;
  statusTitle: StatusTitleType;
}

const TodoList: FC<Props> = ({ status, statusTitle }) => {
  const { todos } = useTodos();

  return (
    <Droppable droppableId={status}>
      {({ innerRef, droppableProps, placeholder }, { isDraggingOver }) => (
        <div className='basis-1/3 h-full flex flex-col'>
          <Status
            status={status}
            statusTitle={statusTitle}
            isDraggingOver={isDraggingOver}
          />
          <ul className='h-full' ref={innerRef} {...droppableProps}>
            {todos[status].map((todo, index) => (
              <TodoItem key={todo.id} index={index} todo={todo} />
            ))}
            {placeholder}
          </ul>
        </div>
      )}
    </Droppable>
  );
};

export default TodoList;
