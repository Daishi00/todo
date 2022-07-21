import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Form from "../components/Form";
import { useNavigate } from "react-router";
import styled from "styled-components";
const Edit = ({
  tasks,
  edit,
  idEdit,
  setTasks,
  setTitle,
  setBody,
  setEdit,
  setIdEdit,
  title,
  body,
}) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(() => {
    if (state !== null) {
      setIdEdit(state.id);
      setTitle(state.title);
      setBody(state.body);
      setEdit(true);
    } else navigate("/dashboard");
  }, []);

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
        setIdEdit={setIdEdit}
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

export default Edit;
