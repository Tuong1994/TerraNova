import React from "react";
import { IProduct } from "../../../../models/Product";

interface SpecsContentProps {
  product: IProduct;
}

const SpecsContent: React.FunctionComponent<SpecsContentProps> = (props) => {
  const { product } = props;

  return (
    <div className="features__specs">
      {(() => {
        if (product.description && product.description.length > 0) {
          return product.description.map((desc, index) => {
            return (
              <div className="specs__item" key={index}>
                <div className="item__name">{desc.name}</div>
                <div className="item__content">{desc.content}</div>
              </div>
            );
          });
        }
      })()}
    </div>
  );
};

export default SpecsContent;
