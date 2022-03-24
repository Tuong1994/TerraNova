import React from "react";
import Button from "../Button";

interface ITableNoDataProps {
  title?: string;
}

const TableNoData: React.FunctionComponent<ITableNoDataProps> = (props) => {
  const { title } = props;
  return (
    <div className="table__nodata">
      <p>No {title} yet</p>
      <Button className="button--add" type="button">Add Products</Button>
    </div>
  );
};

export default TableNoData;
