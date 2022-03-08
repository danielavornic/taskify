import { ChangeEvent } from 'react';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleSubmit }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTodo(e.target.value);

  return (
    <form className='text-center' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Type a task…'
        className='w-96 py-2 px-4 text-sm text-slate-400 font-body bg-slate-800 shadow-sm rounded ease-in duration-200 outline-none hover:bg-slate-700 focus:bg-slate-700'
        value={todo}
        onChange={handleChange}
      />
    </form>
  );
};

export default InputField;
