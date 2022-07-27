import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import { useEffect, useContext, useState } from "react";
import api from "../../utils/api";
import TodoContext from "../../context/todoContext";
import CardSkeleton from "../Card/CardSkeleton";
const CardContainer = () => {
  const { fetchTodos, todos } = useContext(TodoContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const res = await api.get("/todos");
        fetchTodos(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    handleFetch();
  }, []);

  return (
    <Wrapper>
      {isLoading && <CardSkeleton cards={5} />}
      {!isLoading &&
        todos.map((todo) => {
          return (
            <Card
              id={todo.id}
              title={todo.title}
              body={todo.body}
              isComplete={todo.isComplete}
              key={todo.id}
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
