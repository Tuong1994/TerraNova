import React from "react";
import { IAccessories } from "../../../../models/Product";
import ProductSpecs from "./ProductSpecs";

interface IProductTabsProps {
  product: IAccessories;
}

const ProductTabs: React.FunctionComponent<IProductTabsProps> = (props) => {
  const { product } = props;
  const [tabsActive, setTabsActive] = React.useState<number>(1);
  return (
    <div className="tabs__wrapper">
      <div className="wrapper__title">
        <div
          className={
            tabsActive === 1 ? "title__item title__item--active" : "title__item"
          }
          onClick={() => {
            setTabsActive(1);
          }}
        >
          Specifications
        </div>
        <div
          className={
            tabsActive === 2 ? "title__item title__item--active" : "title__item"
          }
          onClick={() => {
            setTabsActive(2);
          }}
        >
          Comments
        </div>
        <div className="title__line"></div>
      </div>
      
      <div className="wrapper__content">
        <div className={tabsActive === 1 ? "content__inner content__inner--active" : "content__inner"}>
          <ProductSpecs product={product} />
        </div>
        <div className={tabsActive === 2 ? "content__inner content__inner--active" : "content__inner"}></div>
      </div>
    </div>
  );
};

export default ProductTabs;
