import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todosSlice";
import { todosApi } from "../features/todo/apiSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    // [todosApi.reducerPath]: todosApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(todosApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
