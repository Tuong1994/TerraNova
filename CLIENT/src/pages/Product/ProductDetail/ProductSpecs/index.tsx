import React from "react";
import { ILangs } from "../../../../interfaces/lang";
import { IProduct } from "../../../../models/Product";
import SpecsItem from "./SpecsItem";

interface ProductSpecsProps {
  product: IProduct;
  langs: ILangs;
}

const ProductSpecs: React.FunctionComponent<ProductSpecsProps> = (props) => {
  const { product, langs } = props;

  return (
    <div className="specs__wrapper">
      <div className="wrapper__title">
        <div className="title__item">{langs?.product.detail.specs}</div>
        <div className="title__line"></div>
      </div>
      <div className="wrapper__content">
        <table className="content__table">
          <tbody>
            {(() => {
              if (product.description && product.description.length > 0) {
                return product.description.map((desc, index) => {
                  return <SpecsItem desc={desc} key={index} />;
                });
              }
            })()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductSpecs;
