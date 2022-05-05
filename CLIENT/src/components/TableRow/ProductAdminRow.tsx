import React from "react";
import TableCol from "../Table/TableCol";
import { Link } from "react-router-dom";
import { IProduct } from "../../models/Product";

interface IProductAdminRowProps {
  product: IProduct;
  index: number;
  handleRemove: (product: IProduct) => void;
}

const ProductAdminRow: React.FunctionComponent<IProductAdminRowProps> = (
  props
) => {
  const { product, index, handleRemove } = props;

  return (
    <tr className="product-admin-row">
      <TableCol>{index + 1}</TableCol>

      <TableCol>
        <div className="image__col">
          <img
            className="col__img"
            src={(() => {
              if (product?.image !== null && product?.image?.length > 0) {
                return product?.image[0];
              } else {
                return "../img/product_img.jpg";
              }
            })()}
            alt="product"
          />
        </div>
      </TableCol>

      <TableCol><p>{product.id || product.productId}</p></TableCol>

      <TableCol>
        <p>{product.name}</p>
      </TableCol>

      <TableCol>
        <p>{product.price?.toLocaleString()} VND</p>
      </TableCol>

      <TableCol>
        <Link to={`/admin/product/editProduct/${product.id || product.productId}`} className="button--edit">
          <i className="far fa-edit"></i>
        </Link>
        <div
          className="button--delete"
          onClick={() => {
            handleRemove(product);
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </div>
      </TableCol>
    </tr>
  );
};

export default ProductAdminRow;
