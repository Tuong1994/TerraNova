import React from "react";

interface ICardImgProps {
  src?: string;
  alt?: string;
  className?: string;
}

const CardImg: React.FunctionComponent<ICardImgProps> = (props) => {
  const { src, alt, className } = props;
  return (
    <div className={`card__img ${className ? className : ""}`}>
      <img className="img" src={src} alt={alt} />
    </div>
  );
};

export default CardImg;
