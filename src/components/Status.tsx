import { FC } from 'react';

import { StatusTitleType, StatusType } from '../types';

interface Props {
  status: StatusType;
  statusTitle: StatusTitleType;
  isDraggingOver: boolean;
}

const styles = {
  statusWrapperStyles: ['sticky', 'top-0', 'z-10', 'bg-slate-900', 'py-2'].join(
    ' '
  ),
  statusSpanStyles: [
    'text-sm',
    'py-0.5',
    'px-2',
    'rounded',
    'cursor-pointer',
    'hover:opacity-90',
  ].join(' '),
  colorsNormal: {
    notStarted: 'text-red-900 bg-red-400',
    inProgress: 'text-orange-900 bg-orange-400',
    done: 'text-green-900 bg-green-400',
  },
  colorsDrag: {
    notStarted: 'text-red-800 bg-red-300',
    inProgress: 'text-orange-800 bg-orange-300',
    done: 'text-green-800 bg-green-300',
  },
};

const Status: FC<Props> = ({ status, statusTitle, isDraggingOver }) => {
  const { statusWrapperStyles, statusSpanStyles, colorsNormal, colorsDrag } =
    styles;
  const colors = isDraggingOver ? colorsDrag[status] : colorsNormal[status];

  return (
    <div className={statusWrapperStyles}>
      <span className={`${statusSpanStyles} ${colors}`}>{statusTitle}</span>
    </div>
  );
};

export default Status;
