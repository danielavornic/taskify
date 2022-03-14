export const statuses = ['Not started', 'In progress', 'Done'] as const;

export type Status = typeof statuses[number];

export interface Todo {
  id: number;
  name: string;
  status: string;
}

export interface StateInterface {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodoName: (id: number, newName: string) => void;
  updateTodoStatus: (id: number, newStatus: string) => void;
  deleteTodo: (id: number) => void;
}

export enum ActionKind {
  ADD_TODO = 'ADD_TODO',
  UPDATE_TODO_NAME = 'UPDATE_TODO_NAME',
  UPDATE_TODO_STATUS = 'UPDATE_TODO_STATUS',
  DELETE_TODO = 'DELETE_TODO',
}

export type Action = {
  type: ActionKind;
  payload: Todo[];
};
