import React from "react";
interface ITableNoDataProps {
  title: string;
  renderLink?:() => React.ReactNode;
}

const TableNoData: React.FunctionComponent<ITableNoDataProps> = (props) => {
  const { title, renderLink } = props;
  return (
    <div className="table__nodata">
      <p>{title}</p>
      {renderLink && renderLink()}
    </div>
  );
};

export default TableNoData;
