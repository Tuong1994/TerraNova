import React from "react";

interface ICardImgProps {
  src?: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
}

const CardImg: React.FunctionComponent<ICardImgProps> = (props) => {
  const { src, alt, className, onClick } = props;
  return (
    <div
      className={`card__img ${className ? className : ""}`}
      onClick={onClick}
    >
      <img className="img" src={src} alt={alt} />
    </div>
  );
};

export default CardImg;
