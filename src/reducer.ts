import { ActionKind, Action, StateInterface } from './types';

export const initialState: StateInterface = {
  todos: [],
  addTodo: () => void 0,
  editTodo: () => void 0,
  updateTodoStatus: () => void 0,
  deleteTodo: () => void 0,
};

const todosReducer = (
  state: StateInterface,
  action: Action
): StateInterface => {
  const { type, payload } = action;

  switch (type) {
    case ActionKind.ADD_TODO:
    case ActionKind.EDIT_TODO:
    case ActionKind.UPDATE_TODO_STATUS:
    case ActionKind.DELETE_TODO:
      return {
        ...state,
        todos: payload,
      };
    default:
      return state;
  }
};

export default todosReducer;
