import React from "react";

interface ITableHeaderProps {
  className?: string;
}

const TableHeader: React.FunctionComponent<ITableHeaderProps> = (props) => {
  const { className } = props;

  return <tr className={`${className ? className : ""}`}>{props.children}</tr>;
};

export default TableHeader;
