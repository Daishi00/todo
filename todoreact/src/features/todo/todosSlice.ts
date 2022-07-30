import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

interface Todo {
  title: string;
  body: string;
  isComplete: boolean;
  createDate: string;
  completeDate: string;
  id: "string";
}

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetchTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        (todo.title = action.payload.title) &&
          (todo.body = action.payload.body) &&
          (todo.isComplete = action.payload.isComplete);
      }
    },
    finishTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isComplete = !todo.isComplete;
      }
    },
  },
});

export const { finishTodo, fetchTodos, addTodo, editTodo } = todosSlice.actions;
export const selectTodos = (state: RootState) => state.todos.todos;
export const selectTodos2 = (state: RootState) => state.todos;

export default todosSlice.reducer;
