import React from "react";

const TableHeader: React.FunctionComponent<{}> = (props) => {
  return <tr>{props.children}</tr>;
};

export default TableHeader;
