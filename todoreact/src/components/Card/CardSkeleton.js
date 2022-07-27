import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <Wrapper key={i}>
        <div className="card-title">
          <Skeleton count={1} />
        </div>
        <div className="card-body">
          <Skeleton count={1} />
        </div>
      </Wrapper>
    ));
};

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #dfdfdf;
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;

  .card-title,
  .card-body {
    margin: 1rem 0;
  }
  .card-title {
    width: 40%;
  }
  .card-body {
    width: 70%;
  }
`;

export default CardSkeleton;
