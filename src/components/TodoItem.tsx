import { FC } from 'react';
import { IoTrash } from 'react-icons/io5';

import { Todo } from '../types';
import useTodos from '../context';

interface Props {
  todo: Todo;
}

const styles = {
  todoItem: [
    'text-white',
    'bg-slate-800',
    'mt-2',
    'p-3',
    'rounded',
    'flex',
    'justify-between',
    'items-center',
    'cursor-pointer',
    'shadow-sm',
    'transition-all',
    'hover:bg-slate-700',
    'hover:shadow-md',
  ].join(' '),
  todoName: [
    'ml-2',
    'cursor-pointer',
    'transition-colors',
    'hover:text-red-300',
  ].join(' '),
};

const TodoItem: FC<Props> = ({ todo }) => {
  const { deleteTodo } = useTodos();

  const handleDeleteClick = () => {
    const confirmDelete = () =>
      window.confirm('Are you sure you want to delete this todo?');
    if (confirmDelete()) deleteTodo(todo);
  };

  return (
    <div className={styles.todoItem}>
      <span>{todo.name}</span>
      <span
        className={styles.todoName}
        title='Delete todo'
        onClick={handleDeleteClick}
      >
        <IoTrash />
      </span>
    </div>
  );
};

export default TodoItem;
