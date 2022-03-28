import React from "react";
import { IAccessories } from "../../../../models/Product";
import SpecsItem from "./SpecsItem";

interface ProductSpecsProps {
  product: IAccessories;
}

const ProductSpecs: React.FunctionComponent<ProductSpecsProps> = (props) => {
  const { product } = props;

  return (
    <div className="inner__specs">
      <table className="specs__table">
          <SpecsItem product={product} />
      </table>
    </div>
  );
};

export default ProductSpecs;
