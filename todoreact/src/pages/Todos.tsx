import React from "react";
import styled from "styled-components";
import CardContainer from "../components/CardContainer/CardContainer";
const Todos = () => {
  return (
    <Wrapper>
      <h2>Your Todos</h2>
      <CardContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h2 {
    text-align: center;
  }
`;

export default Todos;
