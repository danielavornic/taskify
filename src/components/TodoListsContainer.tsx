import { FC } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import { Todo } from '../models/todos';
import { statuses, statusTitles, Status } from '../models/status';
import useTodosContext from '../state/context';
import TodoList from './TodoList';

const TodoListsContainer: FC = () => {
  const { todos, count, setAllTodos } = useTodosContext();

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const srcIndex = source.index;
    const destIndex = destination.index;
    const currStatus = source.droppableId as Status;
    const newStatus = destination.droppableId as Status;

    if (currStatus === newStatus && srcIndex === destIndex) return;

    const todo: Todo = { ...todos[currStatus][srcIndex], status: newStatus };
    todos[currStatus].splice(srcIndex, 1);
    todos[newStatus].splice(destIndex, 0, todo);
    setAllTodos(todos);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {count > 0 && (
        <div className='grid gap-5 grid-cols-1 sm:grid-cols-3 mt-10 lg:px-10'>
          {statuses.map((status, idx) => (
            <TodoList
              status={status}
              statusTitle={statusTitles[idx]}
              key={idx}
            />
          ))}
        </div>
      )}
    </DragDropContext>
  );
};

export default TodoListsContainer;
