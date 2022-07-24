import React from "react";
import styled from "styled-components";
import CardContainer from "../components/CardContainer";

const Todos = ({ tasks, setTasks }) => {
  return (
    <Wrapper>
      <h2>Your Todos</h2>
      <CardContainer tasks={tasks} setTasks={setTasks} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h2 {
    text-align: center;
  }
`;

export default Todos;
