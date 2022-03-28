import React from "react";
import { IAccessories } from "../../../../models/Product";
import SpecsItem from "./SpecsItem";

interface SpecsContentProps {
  product: IAccessories;
}

const SpecsContent: React.FunctionComponent<SpecsContentProps> = (props) => {
  const { product } = props;

  return (
    <div className="features__specs">
        <SpecsItem product={product} />
    </div>
  );
};

export default SpecsContent;
