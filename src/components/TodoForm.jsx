import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodoAll } from "../store/TodoReducerSlise";
import { v4 } from "uuid";
import { styled } from "styled-components";
import { Button, TextField } from "@mui/material";

export const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const result = useSelector((state) => state.todo.todos);
  const ChangeHandler = () => {};

  const SubmitHundler = (e) => {
    e.preventDefault();
    const todo = {
      id: v4(),
      text: inputValue,
      complete: false,
    };
    dispatch(addTodo(todo));
    setInputValue("");
  };

  const deletehandlerAll = () => {
    dispatch(deleteTodoAll());
  };

  return (
    <>
      <>
        <TodoContainer onSubmit={SubmitHundler}>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            onChange={(e) => ChangeHandler(setInputValue(e.target.value))}
            value={inputValue}
          />

          <Button color="success" variant="contained" type="submit">
            Add
          </Button>
          <Button color="error" variant="contained" onClick={deletehandlerAll}>
            Delete all
          </Button>
        </TodoContainer>
      </>
      <TodoList data={result} />
    </>
  );
};
const TodoContainer = styled.form`
  background: #d0ffd6;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 800px;
  height: 120px;
  margin-left: 22%;
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
`;
