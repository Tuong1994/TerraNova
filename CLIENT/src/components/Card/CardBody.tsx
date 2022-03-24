import React from "react";

interface ICardBodyProps {
  className?: string;
}

const CardBody: React.FunctionComponent<ICardBodyProps> = (props) => {
  const { className } = props;
  return (
    <div className={`card__body ${className ? className : ""}`}>
      {props.children}
    </div>
  );
};

export default CardBody;
