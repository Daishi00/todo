import React from "react";
import Form from "../components/Form";
const CreateTodo = ({ tasks, setTasks, setTitle, setBody, title, body }) => {
  return (
    <Form
      tasks={tasks}
      title={title}
      body={body}
      setTasks={setTasks}
      setTitle={setTitle}
      setBody={setBody}
    />
  );
};

export default CreateTodo;
