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
    <div className='basis-1/3 h-full'>
      <Status statusTitle={statusTitle} />
      <Droppable droppableId={status}>
        {({ innerRef, droppableProps, placeholder }, snapshot) => (
          <div
            className={`h-full mt-3 pb-10 border-t-2 border-transparent ${
              snapshot.isDraggingOver && 'border-slate-500'
            }`}
            ref={innerRef}
            {...droppableProps}
          >
            {todos[status].map((todo, index) => (
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
