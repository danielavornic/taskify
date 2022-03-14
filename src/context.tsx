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

  const updateTodoName = (id: number, newName: string) => {
    const updatedTodoList = state.todos.map((todo) =>
      todo.id === id ? { ...todo, name: newName } : todo
    );
    dispatch({
      type: ActionKind.UPDATE_TODO_NAME,
      payload: updatedTodoList,
    });
  };

  const updateTodoStatus = (id: number, newStatus: string) => {
    const updatedTodoList = state.todos.map((todo) =>
      todo.id === id ? { ...todo, status: newStatus } : todo
    );
    dispatch({
      type: ActionKind.UPDATE_TODO_STATUS,
      payload: updatedTodoList,
    });
  };

  const deleteTodo = (id: number) => {
    const updatedTodoList = state.todos.filter((todo) => todo.id !== id);
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
