import React, { useEffect, useState, useContext, MouseEvent } from "react";
import styled from "styled-components";
import api from "../../utils/api";
import { useNavigate, useLocation } from "react-router";
import { useAppDispatch } from "../../app/hooks";
import { addTodo, editTodo } from "../../features/todo/todosSlice";
import StateLocation from "../../shared/types";

interface Props {
  state?: StateLocation;
}

const Form: React.FC<Props> = ({ state }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useAppDispatch();

  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    if (state !== undefined || state != null) {
      setBody(state.body);
      setTitle(state.title);
    }
  }, [state]);

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formValidation() === false) return;
    try {
      const newTask = { title, body, isComplete: false };
      const res = await api.post("/todos", newTask);
      dispatch(addTodo(res.data));
      setTitle("");
      setBody("");
      alert("Task created successfully");
      navigate("/todos");
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formValidation() === false) return;
    try {
      const res = await api.put(`/todos/${state!.id}`, {
        title: title,
        body: body,
        isComplete: false,
        id: state!.id,
      });
      // not sure if we need it since after response we move to /todos and data is refetched so this action feels kinda useless
      dispatch(editTodo(res.data));
      setTitle("");
      setBody("");
      alert("Task edited successfully");
      navigate("/todos");
    } catch (err) {
      console.log(err);
    }
  };

  const formValidation = () => {
    if (title.length <= 2) {
      alert("Title must be at least 3 characters");
      return false;
    } else if (body.length <= 4) {
      alert("Body must be at least 5 characters");
      return false;
    }
  };

  return (
    <Wrapper>
      <form>
        <label>Title</label>
        <input
          className="title-input"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Body</label>
        <textarea
          className="body-input"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        {location.pathname === "/todos/create" ? (
          <button className="btn-add" onClick={handleSubmit}>
            Add Task
          </button>
        ) : (
          <button className="btn-add" onClick={handleEdit}>
            Edit Task
          </button>
        )}
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius);
  width: 100%;
  height: 15rem;

  form {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    input,
    textarea {
      border: 1px solid var(--primary-color);
      border-radius: var(--border-radius);
    }

    textarea,
    input:focus {
      outline-color: var(--primary-color);
    }

    .title-input {
      width: 40%;
    }

    .body-input {
      width: 80%;
      height: 40%;
      display: block;
      text-align: start;
      resize: none;
    }

    .btn-add {
      background-color: var(--primary-color);
      border: none;
      border-radius: var(--border-radius);
      padding: 0.5rem;
      color: var(--white-color);
    }
  }
`;
export default Form;
