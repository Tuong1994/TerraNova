import React from "react";
import TableNoData from "./TableNoData";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
export interface ITableHeader {
  title: string;
  width?: string;
  className?: string;
}

type TableRowType = typeof TableRow;
interface ITableProps {
  headers: ITableHeader[];
  isNodata?: any;
  children?: React.ReactComponentElement<TableRowType> | React.ReactComponentElement<TableRowType>[] | null
}


const Table: React.FunctionComponent<ITableProps> = (props: ITableProps) => {
  let { headers, isNodata, children } = props;

  const renderTableHeader = () => {
    return headers.map((header, index) => {
      return <th key={index}>{header.title}</th>;
    });
  };

  const renderTable = () => {
    if (isNodata || isNodata.length > 0) {
      return (
        <table className="table__wrapper">
          <thead className="wrapper__thead">
            <TableHeader>{renderTableHeader()}</TableHeader>
          </thead>
          <tbody className="wrapper__tbody">
            {children}
          </tbody>
        </table>
      );
    } else {
      return (
        <>
          <table className="table__wrapper">
            <thead className="wrapper__thead">
              <TableHeader>{renderTableHeader()}</TableHeader>
            </thead>
          </table>
          <TableNoData title="Product" />
        </>
      );
    }
  };

  return <>{renderTable()}</>;
};

export default Table;
