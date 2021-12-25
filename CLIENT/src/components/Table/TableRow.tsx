import React from "react";
import TableCol from "./TableCol";
import { Link } from "react-router-dom";

interface ITableRowProps {
  id?: number | string;
  name?: string;
  image?: any;
  price?: number;
  description?: string;
}

const TableRow: React.FunctionComponent<ITableRowProps> = (props) => {
  const { id, name, image, price, description } = props;
  return (
    <tr>
      <TableCol>{id}</TableCol>

      {name ? (
        <TableCol>
          <p>{name}</p>
        </TableCol>
      ) : null}

      {price ? (
        <TableCol>
          <p>{price}</p>
        </TableCol>
      ) : null}

      {image ? (
        <TableCol>
          <img src={image || "https://picsum.photos/200"} alt={name} />
        </TableCol>
      ) : null}

      {description ? (
        <TableCol>
          <p>{description}</p>
        </TableCol>
      ) : null}

      <TableCol>
        <Link to="/admin" className="button--edit">
          <i className="far fa-edit"></i>
        </Link>
        <Link to="/admin" className="button--delete">
          <i className="fas fa-trash-alt"></i>
        </Link>
      </TableCol>
    </tr>
  );
};

export default TableRow;
