import React from "react";
import { IOverview } from "../../interfaces/overview";

interface BoxProps extends IOverview {}

const Box: React.FunctionComponent<BoxProps> = (props: BoxProps) => {
  const { title, total } = props;
  return (
    <div className="box">
      <h3 className="box__title">{title}</h3>
      <p className="box__content">{total}</p>
    </div>
  );
};

export default Box;
