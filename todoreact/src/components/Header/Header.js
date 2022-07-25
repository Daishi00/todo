import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <Link to="/todos">Todos</Link>
      <Link to="/todos/create">Create</Link>
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    padding: 0 0.5rem;
  }
`;

export default Header;
