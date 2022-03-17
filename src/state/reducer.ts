import { ActionKind, Action, StateInterface } from './types';

export const initialState: StateInterface = {
  todos: { notStarted: [], inProgress: [], done: [] },
  count: 0,
  addTodo: () => void 0,
  updateTodoName: () => void 0,
  deleteTodo: () => void 0,
  setAllTodos: () => void 0,
  updateTodoCount: () => void 0,
};

const todosReducer = (
  state: StateInterface,
  action: Action
): StateInterface => {
  const { type, payload } = action;

  switch (type) {
    case ActionKind.ADD_TODO:
    case ActionKind.UPDATE_TODO_NAME:
    case ActionKind.DELETE_TODO:
    case ActionKind.SET_ALL_TODOS:
      return {
        ...state,
        todos: payload,
      };
    case ActionKind.UPDATE_TODO_COUNT:
      return {
        ...state,
        count: payload,
      };
    default:
      return state;
  }
};

export default todosReducer;
