import React from "react";

interface ICardProps {
  className?: string;
  onClick?:() => void;
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
  const { className, onClick } = props;

  return (
    <div className={`card ${className ? className : ""}`} onClick={onClick}>{props.children}</div>
  );
};

export default Card;
