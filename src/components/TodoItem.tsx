import { FC, ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import { IoTrash } from 'react-icons/io5';

import { Todo } from '../types';
import useTodos from '../context';

interface Props {
  todo: Todo;
}

const styles = {
  itemStyles: [
    'text-white',
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
  ].join(' '),
  deleteStyles: ['ml-2', 'transition-colors', 'hover:text-red-300'].join(' '),
};

const TodoItem: FC<Props> = ({ todo }) => {
  const { deleteTodo, updateTodoName } = useTodos();
  const [todoName, setTodoName] = useState<string>(todo.name);
  const [itemBg, setItemBg] = useState<string>('bg-slate-800');

  const spanRef = useRef<HTMLSpanElement>(null);
  const { itemStyles, deleteStyles } = styles;

  const handleDeleteClick = () => {
    const confirmDelete = () =>
      window.confirm('Are you sure you want to delete this todo?');
    confirmDelete() && deleteTodo(todo);
  };

  const handleInput = (e: ChangeEvent<HTMLElement>) =>
    setTodoName(e.target.innerText);

  const handleKeydown = (e: KeyboardEvent) =>
    e.code === 'Enter' && !e.shiftKey && spanRef.current?.blur();

  const handleBlur = () => {
    updateTodoName(todo, todoName);
    setItemBg('bg-slate-800');
  };

  const handleFocus = () => setItemBg('bg-slate-700');

  return (
    <div className={`${itemStyles} ${itemBg}`}>
      <span
        className='outline-none cursor-text'
        title='Edit todo'
        contentEditable
        suppressContentEditableWarning
        ref={spanRef}
        onInput={handleInput}
        onKeyPress={handleKeydown}
        onBlur={handleBlur}
        onFocus={handleFocus}
      >
        {todo.name}
      </span>
      <span
        className={deleteStyles}
        title='Delete todo'
        onClick={handleDeleteClick}
      >
        <IoTrash />
      </span>
    </div>
  );
};

export default TodoItem;
