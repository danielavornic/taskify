import { createContext, FC, ReactNode, useContext, useReducer } from 'react';

import { Todo, Todos } from '../models/todos';
import { Status } from '../models/status';
import { ActionKind, StateInterface } from './types';
import todosReducer, { initialState } from './reducer';

const TodosContext = createContext<StateInterface>(initialState);

export const TodosProvider: FC<ReactNode> = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  const { todos, count } = state;

  const addTodo = (todo: Todo) => {
    const updatedTodoList: Todo[] = todos.notStarted.concat(todo);
    updateTodoCount(count + 1);
    dispatch({
      type: ActionKind.ADD_TODO,
      payload: { ...todos, notStarted: updatedTodoList },
    });
  };

  const updateTodoName = (id: number, newName: string, status: Status) => {
    const updatedTodoList = todos[status].map((todo) =>
      todo.id === id ? { ...todo, name: newName } : todo
    );
    dispatch({
      type: ActionKind.UPDATE_TODO_NAME,
      payload: { ...todos, [status]: updatedTodoList },
    });
  };

  const deleteTodo = (id: number, status: Status) => {
    const updatedTodoList = todos[status].filter((todo) => todo.id !== id);
    updateTodoCount(count - 1);
    dispatch({
      type: ActionKind.DELETE_TODO,
      payload: { ...todos, [status]: updatedTodoList },
    });
  };

  const setAllTodos = (todosToSet: Todos) => {
    dispatch({
      type: ActionKind.SET_ALL_TODOS,
      payload: todosToSet,
    });
  };

  const updateTodoCount = (newCount: number) => {
    dispatch({
      type: ActionKind.UPDATE_TODO_COUNT,
      payload: newCount,
    });
  };

  const value = {
    todos,
    count,
    addTodo,
    updateTodoName,
    deleteTodo,
    setAllTodos,
    updateTodoCount,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

const useTodosContext = () => useContext(TodosContext);

export default useTodosContext;
