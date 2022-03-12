import { FC } from 'react';

interface Props {
  status: string;
}

const Status: FC<Props> = ({ status }) => {
  const color =
    status === 'Not started'
      ? 'red'
      : status === 'In progress'
      ? 'orange'
      : 'green';
  const colorStyle = `text-${color}-900 bg-${color}-400`;

  return (
    <span
      className={`text-sm ${colorStyle} py-0.5 px-2 rounded cursor-pointer hover:opacity-90`}
    >
      {status}
    </span>
  );
};

export default Status;
