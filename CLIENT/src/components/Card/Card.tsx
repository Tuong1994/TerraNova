import React from "react";

interface ICardProps {
  className?: string;
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
  const { className } = props;
  return <div className={`card ${className}`}>{props.children}</div>;
};

export default Card;
