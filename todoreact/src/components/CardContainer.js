import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { useEffect } from "react";
import api from "../utils/api";

const CardContainer = ({ tasks, setTasks }) => {
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await api.get("/todos");
        setTasks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTasks();
  }, []);

  return (
    <Wrapper>
      {tasks.map((task) => {
        return (
          <Card
            id={task.id}
            title={task.title}
            body={task.body}
            isComplete={task.isComplete}
            key={task.id}
            tasks={tasks}
            setTasks={setTasks}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  margin-top: 1rem;
`;

export default CardContainer;
