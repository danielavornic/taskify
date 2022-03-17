import { Todo, Todos } from '../models/todos';
import { StatusType } from '../models/status';

export interface StateInterface {
  todos: Todos;
  count: number;
  addTodo: (todo: Todo) => void;
  updateTodoName: (id: number, newName: string, status: StatusType) => void;
  deleteTodo: (id: number, status: StatusType) => void;
  setAllTodos: (todos: Todos) => void;
  updateTodoCount: (newCount: number) => void;
}

export enum ActionKind {
  ADD_TODO = 'ADD_TODO',
  UPDATE_TODO_NAME = 'UPDATE_TODO_NAME',
  DELETE_TODO = 'DELETE_TODO',
  SET_ALL_TODOS = 'SET_ALL_TODOS',
  UPDATE_TODO_COUNT = 'UPDATE_TODO_COUNT',
}

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

type Payload = {
  [ActionKind.ADD_TODO]: Todos;
  [ActionKind.UPDATE_TODO_NAME]: Todos;
  [ActionKind.DELETE_TODO]: Todos;
  [ActionKind.SET_ALL_TODOS]: Todos;
  [ActionKind.UPDATE_TODO_COUNT]: number;
};

export type Action = ActionMap<Payload>[keyof ActionMap<Payload>];
