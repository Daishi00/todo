import React from "react";

interface Props {
  text: string;
}

const TextField: React.FC<Props> = (props) => {
  return <div>{props.text}</div>;
};

export default TextField;
