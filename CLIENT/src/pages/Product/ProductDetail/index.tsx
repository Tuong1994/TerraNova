import React from "react";
import * as customHook from "../../../hooks/index";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { IRouteParams } from "../../../interfaces/route";
import { getProductDetail } from "../../../redux/actionCreators/ProductCreators";
import { ReducerState } from "../../../redux/store";
import ProductSlider from "./ProductContent/ProductSlider";
import ProductInfo from "./ProductContent/ProductInfo";
import ProductStock from "./ProductContent/ProductStock";
import ProductTabs from "./ProductTabs/ProductTabs";

const ProductDetail: React.FunctionComponent<
  RouteComponentProps<IRouteParams>
> = (props) => {
  const { productDetail } = useSelector(
    (state: ReducerState) => state.ProductReducer
  );
  const dispatch = useDispatch();
  const id = props.match.params.id;

  customHook.useLoading(productDetail);

  React.useEffect(() => {
    let query = {
      productId: id,
    };
    dispatch(getProductDetail(query));
  }, []);

  return (
    <div className="product-detail">
      <div className="product-detail__title">
        <h3>{productDetail.name}</h3>
      </div>
      <div className="product-detail__content">
        <ProductSlider />
        <ProductInfo product={productDetail} />
        <ProductStock />
      </div>
      <div className="product-detail__tabs">
        <ProductTabs product={productDetail} />
      </div>
    </div>
  );
};

export default ProductDetail;
