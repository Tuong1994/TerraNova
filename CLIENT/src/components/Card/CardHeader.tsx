import React from "react";

interface CardHeaderProps {
  className?: string;
  onClick?: () => void;
}

const CardHeader: React.FunctionComponent<CardHeaderProps> = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`card__header ${className ? className : ""}`} onClick={onClick}>
      {props.children}
    </div>
  );
};

export default CardHeader;
