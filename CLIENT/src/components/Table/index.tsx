import React from "react";
import TableNoData from "./TableNoData";
import TableHeader from "./TableHeader";
import ProductAdminRow from "../TableRow/ProductAdminRow";
import CourseAdminRow from "../TableRow/CourseAdminRow";
import OrderAdminRow from "../TableRow/OrderAdminRow";
import MovieAdminRow from "../TableRow/MovieAdminRow";
import CartsRow from "../TableRow/CartsRow";
import OrderUserRow from "../TableRow/OrderUserRow";
import CourseUserRow from "../TableRow/CourseUserRow";
import TicketUserRow from "../TableRow/TicketUserRow";
export interface ITableHeader {
  title: string;
  width?: string;
  className?: string;
}

type TableRowType =
  | typeof ProductAdminRow
  | typeof CourseAdminRow
  | typeof OrderAdminRow
  | typeof MovieAdminRow
  | typeof CartsRow
  | typeof OrderUserRow
  | typeof CourseUserRow
  | typeof TicketUserRow;
interface ITableProps {
  headers: ITableHeader[];
  headersClassName?: string;
  isNodata?: any;
  noDataTitle: string;
  children?:
    | React.ReactComponentElement<TableRowType>
    | React.ReactComponentElement<TableRowType>[]
    | null;
  renderNoDataLink?: () => React.ReactNode;
}

const Table: React.FunctionComponent<ITableProps> = (props: ITableProps) => {
  let {
    headers,
    headersClassName,
    isNodata,
    noDataTitle,
    children,
    renderNoDataLink,
  } = props;

  const renderTableHeader = () => {
    return headers.map((header, index) => {
      return <th key={index}>{header.title}</th>;
    });
  };

  const renderTable = () => {
    if (isNodata && isNodata?.length > 0) {
      return (
        <table className="table__wrapper">
          <thead className="wrapper__thead">
            <TableHeader className={headersClassName}>
              {renderTableHeader()}
            </TableHeader>
          </thead>
          <tbody className="wrapper__tbody">{children}</tbody>
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
          <TableNoData title={noDataTitle} renderLink={renderNoDataLink} />
        </>
      );
    }
  };

  return <>{renderTable()}</>;
};

export default Table;
