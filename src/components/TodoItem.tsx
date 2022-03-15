import { FC, ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { IoTrash } from 'react-icons/io5';

import { Todo } from '../types';
import useTodos from '../context';

interface Props {
  index: number;
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
  deleteStyles: [
    'ml-2',
    'transition-colors',
    'cursor-pointer',
    'hover:text-red-300',
  ].join(' '),
};

const TodoItem: FC<Props> = ({ index, todo }) => {
  const { id, name, status } = todo;
  const { itemStyles, deleteStyles } = styles;

  const { deleteTodo, updateTodoName } = useTodos();
  const [newName, setNewName] = useState<string>(todo.name);
  const [itemBg, setItemBg] = useState<string>('bg-slate-800');

  const spanRef = useRef<HTMLSpanElement>(null);

  const handleDeleteClick = () => {
    if (status === 'done') deleteTodo(id, status);
    else {
      const confirmDelete = () =>
        window.confirm('Are you sure you want to delete this todo?');
      confirmDelete() && deleteTodo(id, status);
    }
  };

  const handleInput = (e: ChangeEvent<HTMLElement>) =>
    setNewName(e.target.innerText);

  const handleKeydown = (e: KeyboardEvent) =>
    e.code === 'Enter' && !e.shiftKey && spanRef.current?.blur();

  const handleBlur = () => {
    updateTodoName(id, newName, status);
    setItemBg('bg-slate-800');
  };

  const handleFocus = () => setItemBg('bg-slate-700');

  return (
    <Draggable draggableId={id.toString()} index={index}>
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <div
          className={`${itemStyles} ${itemBg}`}
          ref={innerRef}
          {...dragHandleProps}
          {...draggableProps}
        >
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
            {name}
          </span>
          <span
            className={deleteStyles}
            title='Delete todo'
            onClick={handleDeleteClick}
          >
            <IoTrash />
          </span>
        </div>
      )}
    </Draggable>
  );
};

export default TodoItem;
