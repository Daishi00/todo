import React from "react";
import { useLocation } from "react-router-dom";
import Form from "../components/Form";

const EditTodo = ({ tasks, setTasks }) => {
  const { state } = useLocation();

  return <Form tasks={tasks} id={state.id} setTasks={setTasks} state={state} />;
};

export default EditTodo;
