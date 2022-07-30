import React from "react";
import styled from "styled-components";

const Home: React.FC = () => {
  return (
    <Wrapper>
      <h1>Welcome in the todo app</h1>
      <h2>Navigate to Todos to see your tasks</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
`;
export default Home;
