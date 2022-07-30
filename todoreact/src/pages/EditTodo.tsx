import React from "react";
import { useLocation } from "react-router-dom";
import { Location } from "history";
import Form from "../components/Form/Form";
import styled from "styled-components";
import StateLocation from "../shared/types";

const EditTodo: React.FC = () => {
  const state = useLocation().state as StateLocation;

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

  return <Form state={state} />;
};

const Wrapper = styled.div`
  text-align: center;
`;

export default EditTodo;
