const InputField: React.FC = () => {
  return (
    <div className='text-center'>
      <input
        type='text'
        placeholder='Type task…'
        className='w-96 py-2 px-4 text-sm text-slate-400 font-body bg-slate-800 shadow-sm rounded ease-in duration-200 outline-none hover:bg-slate-700 focus:bg-slate-700'
      />
    </div>
  );
};

export default InputField;
