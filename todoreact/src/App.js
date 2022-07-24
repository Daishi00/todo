import React, { useState } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import CreateTodo from "./pages/CreateTodo";
import EditTodo from "./pages/EditTodo";
import { CardProvider } from "./context/cardContext";
const App = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <Wrapper>
      <Header />
      <CardProvider>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/todos/create"
              element={
                <CreateTodo
                  tasks={tasks}
                  title={title}
                  body={body}
                  setTasks={setTasks}
                  setTitle={setTitle}
                  setBody={setBody}
                />
              }
            />
            <Route
              path="/todos"
              element={<Todos tasks={tasks} setTasks={setTasks} />}
            />
            <Route
              path="/todos/:id"
              element={
                <EditTodo
                  tasks={tasks}
                  title={title}
                  body={body}
                  setTasks={setTasks}
                  setTitle={setTitle}
                  setBody={setBody}
                />
              }
            />
          </Routes>
        </div>
      </CardProvider>
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
