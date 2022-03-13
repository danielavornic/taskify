import { createContext, FC, ReactNode, useContext, useReducer } from 'react';

import { Todo, ActionKind, StateInterface } from './types';
import todosReducer, { initialState } from './reducer';

const TodosContext = createContext<StateInterface>(initialState);

export const TodosProvider: FC<ReactNode> = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  const addTodo = (todo: Todo) => {
    const updatedTodoList: Todo[] = state.todos.concat(todo);
    dispatch({
      type: ActionKind.ADD_TODO,
      payload: updatedTodoList,
    });
  };

  const updateTodoName = (todo: Todo, newName: string) => {
    const updatedTodoList = state.todos.map((t) => {
      if (t.id === todo.id) return { ...t, name: newName };
      return t;
    });
    dispatch({
      type: ActionKind.UPDATE_TODO_NAME,
      payload: updatedTodoList,
    });
  };

  const updateTodoStatus = (todo: Todo) => {
    const updatedTodoList = state.todos.map((t) => {
      if (t.id === todo.id) return { ...t, status: todo.status };
      return t;
    });
    dispatch({
      type: ActionKind.UPDATE_TODO_STATUS,
      payload: updatedTodoList,
    });
  };

  const deleteTodo = (todo: Todo) => {
    const updatedTodoList = state.todos.filter((t) => t.id !== todo.id);
    dispatch({
      type: ActionKind.DELETE_TODO,
      payload: updatedTodoList,
    });
  };

  const value = {
    todos: state.todos,
    addTodo,
    updateTodoName,
    updateTodoStatus,
    deleteTodo,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

const useTodos = () => useContext(TodosContext);

export default useTodos;
