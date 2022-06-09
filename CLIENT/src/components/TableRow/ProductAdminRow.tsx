import React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../models/Product";
import TableCol from "../Table/TableCol";
import moment from "moment";

interface IProductAdminRowProps {
  product: IProduct;
  index: number;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  setProduct: React.Dispatch<React.SetStateAction<IProduct>>;
}

const ProductAdminRow: React.FunctionComponent<IProductAdminRowProps> = (
  props
) => {
  const { product, index, setIsShow, setProduct } = props;

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
        <p>{moment(product.createdAt).format("DD/MM/YYYY")}</p>
      </TableCol>

      <TableCol>
        <p>{moment(product.updatedAt).format("DD/MM/YYYY")}</p>
      </TableCol>

      <TableCol>
        <Link to={`/admin/product/editProduct/${product.id || product.productId}`} className="button--edit">
          <i className="far fa-edit"></i>
        </Link>
        <div
          className="button--delete"
          onClick={() => {
            setIsShow(true)
            setProduct(product)
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </div>
      </TableCol>
    </tr>
  );
};

export default ProductAdminRow;
