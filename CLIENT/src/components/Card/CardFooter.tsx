import React from "react";

interface ICardFooterProps {
  className?: string;
  onClick?: () => void;
}

const CardFooter: React.FunctionComponent<ICardFooterProps> = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`card__footer ${className ? className : ""}`} onClick={onClick}>
      {props.children}
    </div>
  );
};

export default CardFooter;
