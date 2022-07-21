import React, { useEffect } from "react";
import styled from "styled-components";
import Form from "../components/Form";
import CardContainer from "../components/CardContainer";

const Dashboard = ({
  tasks,
  title,
  body,
  edit,
  idEdit,
  setTasks,
  setTitle,
  setBody,
  setEdit,
  setIdEdit,
}) => {
  useEffect(() => {
    setEdit(false);
    setTitle("");
    setBody("");
  });

  return (
    <Wrapper>
      <Form
        tasks={tasks}
        title={title}
        body={body}
        edit={edit}
        idEdit={idEdit}
        setTasks={setTasks}
        setTitle={setTitle}
        setBody={setBody}
        setEdit={setEdit}
      />
      <CardContainer
        tasks={tasks}
        edit={edit}
        setTitle={setTitle}
        setBody={setBody}
        setEdit={setEdit}
        setIdEdit={setIdEdit}
        setTasks={setTasks}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
`;

export default Dashboard;
