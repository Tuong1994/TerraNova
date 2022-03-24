import React from "react";
import { IAccessories } from "../../../../models/Product/IProduct";

interface ProductSpecsProps {
  product?: IAccessories;
  active?: number;
}

const ProductSpecs: React.FunctionComponent<
  ProductSpecsProps
> = (props) => {
  const { active, product } = props;
  console.log(product);
  
  return <div className="inner__specs">
      <table className="specs__table">
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <thead>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </thead>
      </table>
  </div>;
};

export default ProductSpecs;
