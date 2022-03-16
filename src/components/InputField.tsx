import { ChangeEvent, FormEvent, FC, useRef, useState } from 'react';

import useTodos from '../context';
import { Todo } from '../types';

const inputStyles = [
  'w-96',
  'py-2',
  'px-4',
  'text-sm',
  'text-slate-400',
  'bg-slate-700',
  'shadow-sm',
  'rounded',
  'ease-in',
  'duration-200',
  'outline-none',
  'hover:bg-slate-600',
  'hover:text-slate-300',
  'focus:bg-slate-600',
  'focus:text-slate-300',
].join(' ');

const InputField: FC = () => {
  const { addTodo } = useTodos();
  const [todo, setTodo] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTodo(e.target.value);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (todo) {
      const newTodo: Todo = {
        id: Date.now(),
        name: todo,
        status: 'notStarted',
      };
      addTodo(newTodo);
      setTodo('');
    }
    inputRef.current?.blur();
  };

  return (
    <form className='text-center' onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type='text'
        placeholder='Type a task…'
        className={inputStyles}
        value={todo}
        onChange={handleChange}
      />
    </form>
  );
};

export default InputField;
