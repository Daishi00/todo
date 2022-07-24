import React from "react";
import Form from "../components/Form";
const CreateTodo = ({ tasks, setTasks }) => {
  return <Form tasks={tasks} setTasks={setTasks} />;
};

export default CreateTodo;
