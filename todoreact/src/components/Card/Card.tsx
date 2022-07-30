import React from "react";
import styled, { CSSProperties } from "styled-components";
import api from "../../utils/api";
import { Link } from "react-router-dom";
import { finishTodo } from "../../features/todo/todosSlice";
import { useAppDispatch } from "../../app/hooks";

interface Props {
  title: string;
  body: string;
  id: string;
  isComplete: boolean;
}

interface StyleProps {
  isComplete: boolean;
}

const Card: React.FC<Props> = ({ title, body, id, isComplete }) => {
  const dispatch = useAppDispatch();

  const handleFinish = async () => {
    try {
      const res = await api.put(`/todos/${id}`, {
        title: title,
        body: body,
        isComplete: !isComplete,
        id: id,
      });
      dispatch(finishTodo(res.data.id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper isComplete={isComplete}>
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

const Wrapper = styled.div<StyleProps>`
  width: 100%;
  border: 1px solid #dfdfdf;
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  position: relative;
  background-color: ${(props) => props.isComplete === true && "#44bba4"};

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
