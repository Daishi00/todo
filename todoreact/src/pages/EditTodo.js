import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Form from "../components/Form";
import { useNavigate } from "react-router";

const EditTodo = ({ tasks, setTasks, setTitle, setBody, title, body }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(() => {
    if (state !== null) {
      setTitle(state.title);
      setBody(state.body);
    } else navigate("/todos");
  }, []);

  return (
    <Form
      tasks={tasks}
      title={title}
      body={body}
      id={state.id}
      setTasks={setTasks}
      setTitle={setTitle}
      setBody={setBody}
    />
  );
};

export default EditTodo;
