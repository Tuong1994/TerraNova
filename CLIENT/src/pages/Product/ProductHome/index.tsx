import React from "react";
import * as customHooks from "../../../hooks";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import ProductBanner from "./ProductBanner";
import ProductLaptop from "./ProductLaptop";
import ProductSet from "./ProductSet";
import ProductPart from "./ProductPart";
import Consultation from "../../../components/Consultation/ConsultationForm";
import utils from "../../../utils";

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
      <ProductPart langs={langs} />
      <Consultation />
    </div>
  );
};

export default ProductHome;
