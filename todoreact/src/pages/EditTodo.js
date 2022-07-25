import React from "react";
import { useLocation } from "react-router-dom";
import Form from "../components/Form/Form";
import styled from "styled-components";
const EditTodo = () => {
  const { state } = useLocation();

  if (state == null) {
    return (
      <Wrapper>
        <h2>
          The task u want to edit does not exist or was accesed out of the
          todos.
        </h2>
      </Wrapper>
    );
  }

  return <Form id={state.id} state={state} />;
};

const Wrapper = styled.div`
  text-align: center;
`;

export default EditTodo;
