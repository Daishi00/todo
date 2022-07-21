import React, { useState } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Edit from "./pages/Edit";
const App = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState(false);
  const [idEdit, setIdEdit] = useState(null);

  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
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
          }
        />
        <Route
          path="/edit"
          element={
            <Edit
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
          }
        />
      </Routes>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
