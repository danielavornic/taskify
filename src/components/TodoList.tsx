import { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { Status, StatusTitle } from '../models/status';
import useTodosContext from '../state/context';
import StatusLabel from './StatusLabel';
import TodoItem from './TodoItem';

interface Props {
  status: Status;
  statusTitle: StatusTitle;
}

const styles = [
  'basis-1/3',
  'flex',
  'flex-col',
  'h-full',
  'w-96',
  'mx-auto',
  'sm:w-full',
].join(' ');

const TodoList: FC<Props> = ({ status, statusTitle }) => {
  const { todos } = useTodosContext();

  return (
    <Droppable droppableId={status}>
      {({ innerRef, droppableProps, placeholder }, { isDraggingOver }) => (
        <div className={styles}>
          <StatusLabel
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
