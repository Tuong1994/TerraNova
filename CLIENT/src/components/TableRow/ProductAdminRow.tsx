import React from "react";
import TableCol from "../Table/TableCol";
import { Link } from "react-router-dom";
import { IProduct } from "../../models/Product";

interface IProductAdminRowProps {
  product: IProduct;
}

const ProductAdminRow: React.FunctionComponent<IProductAdminRowProps> = (
  props
) => {
  const {product } = props;
  return (
    <tr>
      <TableCol>{product.id || product.productId}</TableCol>

      <TableCol>
        <p>{product.name}</p>
      </TableCol>

      <TableCol>
        <p>{product.price}</p>
      </TableCol>

      <TableCol>
        
      </TableCol>

      <TableCol>
        <Link to="/admin" className="button--edit">
          <i className="far fa-edit"></i>
        </Link>
        <div className="button--delete">
          <i className="fas fa-trash-alt"></i>
        </div>
      </TableCol>
    </tr>
  );
};

export default ProductAdminRow;
