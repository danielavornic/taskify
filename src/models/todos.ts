import { Status } from './status';

export interface Todo {
  id: number;
  name: string;
  status: Status;
}

export interface Todos {
  notStarted: Todo[];
  inProgress: Todo[];
  done: Todo[];
}
