import React from "react";
import * as Card from "../../../../components/Card";
import { Link } from "react-router-dom";
import { IProduct } from "../../../../models/Product";
import SpecsContent from "./SpecsContent";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FunctionComponent<ProductCardProps> = (props) => {
  const { product } = props;

  return (
    <Link
      to={`/productDetail/${product.productId}`}
      className="inner__link"
      onClick={() => {
        localStorage.setItem("productType", JSON.stringify(product.productType));
      }}
    >
      <Card.Wrapper className="link__card">
        <Card.Img
          className="card__image"
          src="../img/product_img.jpg"
          alt={product.name}
        />
        <Card.Body className="card__content">
          {product.name && product.name.length > 30 ? (
            <p className="content__name">{product.name.substr(0, 30)}...</p>
          ) : (
            <p className="content__name">{product.name}</p>
          )}
          <p className="content__price">
            {product.price?.toLocaleString()} VND
          </p>
        </Card.Body>
        <Card.Footer className="card__features">
          <SpecsContent product={product} />
        </Card.Footer>
      </Card.Wrapper>
    </Link>
  );
};

export default ProductCard;
