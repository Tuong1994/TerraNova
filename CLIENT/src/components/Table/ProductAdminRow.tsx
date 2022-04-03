import React from "react";
import TableCol from "./TableCol";
import { Link } from "react-router-dom";

interface IProductAdminRowProps {
  id?: number | string;
  name?: string;
  image?: any;
  price?: number;
  description?: string;
}

const ProductAdminRow: React.FunctionComponent<IProductAdminRowProps> = (
  props
) => {
  const { id, name, image, price, description } = props;
  return (
    <tr>
      <TableCol>{id}</TableCol>

      <TableCol>
        <p>{name}</p>
      </TableCol>

      <TableCol>
        <p>{price}</p>
      </TableCol>

      <TableCol>
        <p>{description}</p>
      </TableCol>

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

export default ProductAdminRow;
