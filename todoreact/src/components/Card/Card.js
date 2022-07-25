import React, { useContext } from "react";
import styled from "styled-components";
import api from "../../utils/api";
import { Link } from "react-router-dom";
import TodoContext from "../../context/todoContext";

const Card = ({ title, body, id, isComplete }) => {
  const { finishTodo } = useContext(TodoContext);

  const handleFinish = async () => {
    try {
      const res = await api.put(`/todos/${id}`, {
        title: title,
        body: body,
        isComplete: !isComplete,
        id: id,
      });
      finishTodo(res.data.id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper style={isComplete ? { backgroundColor: " #44bba4" } : null}>
      <div className="card-title">
        <p>{title}</p>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>
      <div className="icons">
        <button
          className="material-symbols-outlined icon"
          onClick={handleFinish}
        >
          done
        </button>
        <Link
          to={`/todos/${id}`}
          state={{ title, body, id }}
          className="material-symbols-outlined icon"
        >
          edit
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #dfdfdf;
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  position: relative;

  .finished {
    background-color: var(--finished-color);
  }

  .card-title {
    font-weight: bold;
  }

  .card-title,
  .card-body {
    width: 70%;
    p {
      word-wrap: break-word;
      text-align: justify;
      text-justify: auto;
    }
  }

  .icons {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    display: flex;
    gap: 0.5rem;

    .icon {
      background-color: var(--primary-color);
      color: var(--white-color);
      border-radius: var(--border-radius);
      cursor: pointer;
      border: none;
      padding: 0;
    }
    a {
      text-decoration: none;
    }
  }
`;

export default Card;