import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import api from "../../utils/api";
import { useNavigate, useLocation } from "react-router";
import TodoContext from "../../context/todoContext";

const Form = ({ id, state }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { addTodo, editTodo } = useContext(TodoContext);

  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    if (state !== undefined || state != null) {
      setBody(state.body);
      setTitle(state.title);
    }
  }, [state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValidation() === false) return;
    try {
      const newTask = { title, body, isComplete: false };
      const res = await api.post("/todos", newTask);
      addTodo(res.data);
      setTitle("");
      setBody("");
      alert("Task created successfully");
      navigate("/todos");
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (formValidation() === false) return;
    try {
      const res = await api.put(`/todos/${id}`, {
        title: title,
        body: body,
        isComplete: false,
        id: id,
      });
      editTodo(res.data);
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
          type="text"
          className="title-input"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Body</label>
        <textarea
          type="text"
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