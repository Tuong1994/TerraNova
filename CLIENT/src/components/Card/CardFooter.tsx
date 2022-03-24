import React from "react";

interface ICardFooterProps {
  className?: string;
}

const CardFooter: React.FunctionComponent<ICardFooterProps> = (props) => {
  const { className } = props;
  return (
    <div className={`card__footer ${className ? className : ""}`}>
      {props.children}
    </div>
  );
};

export default CardFooter;
