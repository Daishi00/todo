import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import CardSkeleton from "../Card/CardSkeleton";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchTodos, selectTodos } from "../../features/todo/todosSlice";
import api from "../../utils/api";

const CardContainer: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const res = await api.get("/todos");
        dispatch(fetchTodos(res.data));
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
