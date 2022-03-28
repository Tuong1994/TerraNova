import React from "react";

interface ICardBodyProps {
  className?: string;
  onClick?:() => void;
}

const CardBody: React.FunctionComponent<ICardBodyProps> = (props) => {
  const { className, onClick } = props;

  return (
    <div className={`card__body ${className ? className : ""}`} onClick={onClick}>
      {props.children}
    </div>
  );
};

export default CardBody;
