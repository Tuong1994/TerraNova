import React from "react";
interface ITableColProps {
  className?: string;
}

const TableCol: React.FunctionComponent<ITableColProps> = (props) => {
  const { className } = props;

  return <td className={`${className ? className : ""}`}>{props.children}</td>;
};

export default TableCol;
