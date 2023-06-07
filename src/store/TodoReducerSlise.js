import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};
export const TodoSlise = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodoAll: (state, action) => {
      state.todos = [];
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    CompleteTodo: (state, action) => {
      state.todos = state.todos.map((item) =>
        item.id === action.payload
          ? { ...item, complete: !item.complete }
          : item
      );
    },
    editTodo(state, action) {
      state.todos = state.todos.map((item) =>
        item.id === action.payload.id
          ? { ...item, text: action.payload.todoTitle }
          : item
      );
    },
  },
});

export const { addTodo, deleteTodo, deleteTodoAll, CompleteTodo, editTodo } =
  TodoSlise.actions;

export default TodoSlise.reducer;
