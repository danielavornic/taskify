import { FC } from 'react';

interface Props {
  status: string;
}

const statusStyles = [
  'text-sm',
  'py-0.5',
  'px-2',
  'rounded',
  'cursor-pointer',
  'hover:opacity-90',
].join(' ');

const Status: FC<Props> = ({ status }) => {
  const colors =
    status === 'Not started'
      ? 'text-red-900 bg-red-400'
      : status === 'In progress'
      ? 'text-orange-900 bg-orange-400'
      : 'text-green-900 bg-green-400';

  return <span className={`${statusStyles} ${colors}`}>{status}</span>;
};

export default Status;
