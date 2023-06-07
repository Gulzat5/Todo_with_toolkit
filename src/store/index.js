import { configureStore } from "@reduxjs/toolkit";
import { TodoSlise } from "./TodoReducerSlise";

export const store = configureStore({
  reducer: {
    [TodoSlise.name]: TodoSlise.reducer,
  },
});
