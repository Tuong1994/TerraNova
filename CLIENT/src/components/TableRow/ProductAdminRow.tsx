import React from "react";
import TableCol from "../Table/TableCol";
import { Link } from "react-router-dom";
import { IProduct } from "../../models/Product";

interface IProductAdminRowProps {
  product: IProduct;
  handleRemove: (id: string) => void;
}

const ProductAdminRow: React.FunctionComponent<IProductAdminRowProps> = (
  props
) => {
  const { product, handleRemove } = props;

  return (
    <tr className="product-admin-row">
      <TableCol>{product.id || product.productId}</TableCol>

      <TableCol>
        <p>{product.name}</p>
      </TableCol>

      <TableCol>
        <p>{product.price?.toLocaleString()} VND</p>
      </TableCol>

      <TableCol>
        <div className="image__col">
          <img
            className="col__img"
            src={(() => {
              if (product.image !== null) {
                return product.image[0];
              } else {
                return "../img/product_img.jpg";
              }
            })()}
            alt="product"
          />
        </div>
      </TableCol>

      <TableCol>
        <Link to={`/product/editProduct/${product.id || product.productId}`} className="button--edit">
          <i className="far fa-edit"></i>
        </Link>
        <div
          className="button--delete"
          onClick={() => {
            handleRemove(product.id || product.productId || "");
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </div>
      </TableCol>
    </tr>
  );
};

export default ProductAdminRow;
