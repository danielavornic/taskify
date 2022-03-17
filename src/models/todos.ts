import { StatusType } from './status';

export interface Todo {
  id: number;
  name: string;
  status: StatusType;
}

export interface Todos {
  notStarted: Todo[];
  inProgress: Todo[];
  done: Todo[];
}
