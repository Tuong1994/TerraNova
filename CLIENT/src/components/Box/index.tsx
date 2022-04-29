import React from "react";

interface BoxProps {
  title?: string;
  total?: number;
  background?: string;
  className?: string;
}

const Box: React.FunctionComponent<BoxProps> = (props: BoxProps) => {
  const { title, total, background, className } = props;

  const styled = {
    backgroundColor: background,
  };

  return (
    <div className={`box ${className ? className : ""}`} style={styled}>
      <h3 className="box__title">{title || "Box title"}</h3>
      <p className="box__content">{total || 0}</p>
    </div>
  );
};

export default Box;
