import { FETCH_TODOS, ADD_TODO, EDIT_TODO, FINISH_TODO } from "./todoActions";

const todoReducer = (state, action) => {
  switch (action.type) {
    case FETCH_TODOS: {
      return {
        todos: action.payload,
      };
    }
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              title: action.payload.title,
              body: action.payload.body,
              isComplete: action.payload.isComplete,
            };
          } else return todo;
        }),
      };
    case FINISH_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, isComplete: !todo.isComplete };
          } else return todo;
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;
