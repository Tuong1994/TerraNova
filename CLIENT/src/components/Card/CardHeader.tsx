import React from "react";

interface CardHeaderProps {
  className?: string;
}

const CardHeader: React.FunctionComponent<CardHeaderProps> = (props) => {
  const { className } = props;
  return (
    <div className={`card__header ${className ? className : ""}`}>
      {props.children}
    </div>
  );
};

export default CardHeader;
