import React from "react";
import { Link } from "react-router-dom";

interface LayerProps {
  link: string;
  title: string;
  icon: string;
  background: string;
  wrapperClassName?: string;
  titleClassName?: string;
}

const Layer: React.FunctionComponent<LayerProps> = (props) => {
  const { link, title, icon, background, wrapperClassName, titleClassName } = props;

  const styled = {
    backgroundColor: background,
  };

  return (
    <div
      className={`layer__wrapper ${wrapperClassName ? wrapperClassName : ""}`}
    >
      <div className="wrapper__item">
        <Link to={link}>
          <span style={styled}></span>
          <span style={styled}></span>
          <span style={styled}></span>
          <span style={styled}></span>
          <span style={styled}>
            <i className={icon}></i>
          </span>
        </Link>
      </div>
      <div className="wrapper__title">
        <p className={titleClassName ? titleClassName : ""}>{title}</p>
      </div>
    </div>
  );
};

export default Layer;
