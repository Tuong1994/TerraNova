import React from "react";
import { ILangs } from "../../../../interfaces/lang";
import { IAccessories } from "../../../../models/Product";
import SpecsItem from "./SpecsItem";

interface ProductSpecsProps {
  product: IAccessories;
  langs: ILangs;
}

const ProductSpecs: React.FunctionComponent<ProductSpecsProps> = (props) => {
  const { product, langs } = props;

  return (
    <div className="specs__wrapper">
      <div className="wrapper__title">
        <div className="title__item">{langs?.productDetail.specs}</div>
        <div className="title__line"></div>
      </div>
      <div className="wrapper__content">
        <table className="content__table">
          <tbody>
            <SpecsItem product={product} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductSpecs;
