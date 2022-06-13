import React from "react";
import * as customHooks from "../../../hooks";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import ProductBanner from "./ProductBanner";
import ProductLaptop from "./ProductLaptop";
import utils from "../../../utils";
import ProductSet from "./ProductSet";

interface ProductHomeProps {}

const ProductHome: React.FunctionComponent<ProductHomeProps> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  customHooks.useLoading();

  return (
    <div className="product-home">
      <ProductBanner langs={langs} />
      <ProductLaptop langs={langs} />
      <ProductSet langs={langs} />
    </div>
  );
};

export default ProductHome;
