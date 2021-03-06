import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import CreateTodo from "./pages/CreateTodo";
import EditTodo from "./pages/EditTodo";
import { Provider } from "react-redux";
import { store } from "./app/store";
const App = () => {
  return (
    <Wrapper>
      <Header />
      <Provider store={store}>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos/create" element={<CreateTodo />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/todos/:id" element={<EditTodo />} />
          </Routes>
        </div>
      </Provider>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
  }
`;

export default App;
