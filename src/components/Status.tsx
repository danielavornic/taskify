import { FC } from 'react';

import { StatusTitleType } from '../types';

interface Props {
  statusTitle: StatusTitleType;
}

const statusStyles = [
  'text-sm',
  'py-0.5',
  'px-2',
  'rounded',
  'cursor-pointer',
  'hover:opacity-90',
].join(' ');

const Status: FC<Props> = ({ statusTitle }) => {
  const colors =
    statusTitle === 'Not started'
      ? 'text-red-900 bg-red-400'
      : statusTitle === 'In progress'
      ? 'text-orange-900 bg-orange-400'
      : 'text-green-900 bg-green-400';

  return <span className={`${statusStyles} ${colors}`}>{statusTitle}</span>;
};

export default Status;
