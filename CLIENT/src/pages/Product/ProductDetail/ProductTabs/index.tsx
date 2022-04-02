import React from "react";
import { IAccessories } from "../../../../models/Product";
import ProductComment from "./ProductComment";
import ProductSpecs from "./ProductSpecs";

interface IProductTabsProps {
  product: IAccessories;
  langs: any;
}

const ProductTabs: React.FunctionComponent<IProductTabsProps> = (props) => {
  const { product, langs } = props;
  const [tabsActive, setTabsActive] = React.useState<number>(1);
  return (
    <div className="tabs__wrapper">
      {/* Tabs title */}
      <div className="wrapper__title">
        <div
          className={
            tabsActive === 1 ? "title__item title__item--active" : "title__item"
          }
          onClick={() => {
            setTabsActive(1);
          }}
        >
          {langs?.productDetail.specs}
        </div>
        <div
          className={
            tabsActive === 2 ? "title__item title__item--active" : "title__item"
          }
          onClick={() => {
            setTabsActive(2);
          }}
        >
          {langs?.productDetail.comments}
        </div>
        <div className="title__line"></div>
      </div>
      {/* Tabs title */}

      {/* Tabs content */}
      <div className="wrapper__content">
        <div
          className={
            tabsActive === 1
              ? "content__inner content__inner--active"
              : "content__inner"
          }
        >
          <ProductSpecs product={product} />
        </div>
        <div
          className={
            tabsActive === 2
              ? "content__inner content__inner--active"
              : "content__inner"
          }
        >
          <ProductComment />
        </div>
      </div>
      {/* Tabs content */}
    </div>
  );
};

export default ProductTabs;
