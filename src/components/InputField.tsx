import { ChangeEvent, FormEvent, FC, useRef } from 'react';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const InputField: FC<Props> = ({ todo, setTodo, handleSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTodo(e.target.value);

  const handleFormSubmit = (e: FormEvent) => {
    handleSubmit(e);
    inputRef.current?.blur();
  };

  return (
    <form className='text-center' onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type='text'
        placeholder='Type a task…'
        className='w-96 py-2 px-4 text-sm text-slate-400 font-body bg-slate-700 shadow-sm rounded ease-in duration-200 outline-none hover:bg-slate-600 hover:text-slate-300 focus:bg-slate-600 focus:text-slate-300'
        value={todo}
        onChange={handleChange}
      />
    </form>
  );
};

export default InputField;
