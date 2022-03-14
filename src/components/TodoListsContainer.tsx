import { FC } from 'react';

import { statuses } from '../types';
import useTodos from '../context';

import TodoList from './TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const TodoListsContainer: FC = () => {
  const { todos, updateTodoStatus } = useTodos();

  const handleDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    if (!destination || source.droppableId === destination.droppableId) return;

    updateTodoStatus(parseInt(draggableId), destination.droppableId);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {todos.length > 0 && (
        <div className='grid gap-5 grid-cols-1 sm:grid-cols-3 mt-10 px-8 md:px-0 lg:px-10'>
          {statuses.map((status, idx) => (
            <TodoList status={status} key={idx} />
          ))}
        </div>
      )}
    </DragDropContext>
  );
};

export default TodoListsContainer;
