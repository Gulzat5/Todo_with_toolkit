import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CompleteTodo, deleteTodo, editTodo } from "../store/TodoReducerSlise";
import { styled } from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { Button, TextField } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import CancelScheduleSendIcon from "@mui/icons-material/CancelScheduleSend";
export const TodoList = ({ data }) => {
  const dispatch = useDispatch();
  const [todoId, setTodoId] = useState(null);
  const [todoTitle, setTitle] = useState("");

  const EditTodo = ({ id, text }) => {
    setTodoId(id);
    setTitle(text);
  };

  const saveHadler = (id) => {
    dispatch(editTodo({ id, todoTitle }));
    setTodoId("");
  };

  const deletehandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const completeTodo = (id) => {
    dispatch(CompleteTodo(id));
  };

  return (
    <TodoListt>
      {data.map((item) =>
        item.id === todoId ? (
          <TodoItemEdit key={item.id}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              type="text"
              value={todoTitle}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Button
              variant="contained"
              startIcon={<SaveAltIcon />}
              onClick={() => saveHadler(item.id)}
            >
              Save
            </Button>
            <Button
              startIcon={<CancelScheduleSendIcon />}
              variant="contained"
              onClick={() => setTodoId()}
            >
              Cancel
            </Button>
          </TodoItemEdit>
        ) : (
          <TodoItem key={item.id}>
            <h4
              style={{
                textDecoration: item.complete ? "line-through" : "none",
              }}
            >
              {item.text}
            </h4>
            <div>
              {item.complete ? (
                <Button
                  color="error"
                  variant="outlined"
                  onClick={() => completeTodo(item.id)}
                  startIcon={<CheckCircleOutlineIcon />}
                >
                  Uncompete
                </Button>
              ) : (
                <Button
                  color="success"
                  variant="outlined"
                  onClick={() => completeTodo(item.id)}
                  startIcon={<CheckCircleOutlineIcon />}
                >
                  complete
                </Button>
              )}
              <Button
                variant="outlined"
                startIcon={<ModeEditOutlineIcon />}
                onClick={() => EditTodo({ id: item.id, text: item.text })}
              >
                Edit
              </Button>

              <Button
                startIcon={<DeleteIcon />}
                variant="contained"
                colors="error"
                onClick={() => deletehandler(item.id)}
              >
                Delete
              </Button>
            </div>
          </TodoItem>
        )
      )}
    </TodoListt>
  );
};

const TodoListt = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #d9e0e9;
  width: 40rem;
  margin-left: 27rem;
  height: 8rem;
  width: 500px;
  height: 200px;
`;
const TodoItemEdit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #d9e0e9;
  width: 40rem;
  margin-left: 27rem;
  height: 8rem;
  width: 500px;
  height: 200px;
  gap: 20px;
`;
