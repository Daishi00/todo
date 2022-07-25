import { createContext, useReducer } from "react";
import todoReducer from "./todoReducer";
import { FETCH_TODOS, ADD_TODO, EDIT_TODO, FINISH_TODO } from "./todoActions";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const initialState = {
    todos: [],
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const fetchTodos = (todos) => {
    dispatch({
      type: FETCH_TODOS,
      payload: todos,
    });
  };

  const addTodo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };

  const editTodo = (todo) => {
    dispatch({
      type: EDIT_TODO,
      payload: todo,
    });
  };

  const finishTodo = (todoID) => {
    dispatch({
      type: FINISH_TODO,
      payload: todoID,
    });
  };

  return (
    <TodoContext.Provider
      value={{ todos: state.todos, fetchTodos, addTodo, editTodo, finishTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContext;
