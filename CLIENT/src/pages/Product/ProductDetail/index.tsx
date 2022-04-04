import React from "react";
import * as customHook from "../../../hooks/index";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { IRouteParams } from "../../../interfaces/route";
import { getProductDetail } from "../../../redux/actionCreators/ProductCreators";
import { ReducerState } from "../../../redux/store";
import { IQueryList } from "../../../interfaces/query";
import { ICarts } from "../../../models/Carts";
import {
  createCarts,
  updateCarts,
} from "../../../redux/actionCreators/CartsCreators";
import ProductSlider from "./ProductContent/ProductSlider";
import ProductInfo from "./ProductContent/ProductInfo";
import ProductRelated from "./ProductContent/ProductRelated";
import ProductTabs from "./ProductTabs";
import actions from "../../../configs/actions";
import utils from "../../../utils";

const ProductDetail: React.FunctionComponent<
  RouteComponentProps<IRouteParams>
> = (props) => {
  const { productDetail } = useSelector(
    (state: ReducerState) => state.ProductReducer
  );
  const { carts } = useSelector((state: ReducerState) => state.CartsReducer);
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const [stock, setStock] = React.useState<ICarts>({});
  const [amount, setAmount] = React.useState<number>(0);

  const dispatch = useDispatch();
  const id = props.match.params.id;

  const langs = utils.changeLang(lang);

  customHook.useLoading(productDetail);

  React.useEffect(() => {
    _getProductDetail();
  }, []);

  React.useEffect(() => {
    if (amount > 0) {
      setStock({
        productId: productDetail.productId,
        productName: productDetail.name,
        price: productDetail.price,
        amount: amount,
      });
    } else {
      setStock({});
    }
  }, [productDetail, amount]);

  const _getProductDetail = () => {
    if (localStorage.getItem("productType")) {
      let type: any = {};
      let obj = localStorage.getItem("productType");
      type = JSON.parse(obj || "");
      if (type) {
        const query: IQueryList = {
          productId: id,
          productType: type,
        };
        dispatch(getProductDetail(query));
      }
    }
  };

  const handleIncrease = () => {
    setAmount(amount + 1);
  };

  const handleDecrease = () => {
    setAmount(amount - 1);
  };

  const handleOrder = () => {
    dispatch(actions.openButtonLoading);
    setTimeout(() => {
      if (amount > 0) {
        if (carts && carts.length > 0) {
          let index: any = carts.findIndex(
            (i) => i.productId === productDetail.productId
          );
          if (index !== -1) {
            let newStock = {
              productId: carts[index].productId,
              productName: carts[index].productName,
              price: carts[index].price,
              amount: carts[index].amount || 0 + amount,
            };
            const query: IQueryList = {
              cartsId: carts[index]?.cartsId,
            };
            dispatch(
              updateCarts(
                newStock,
                query,
                langs?.toastMessages.success.updateCart,
                langs?.toastMessages.error.updateCart
              )
            );
          }
        } else {
          dispatch(
            createCarts(
              stock,
              langs?.toastMessages.success.addToCart,
              langs?.toastMessages.error.addToCart
            )
          );
        }
      }
      dispatch(actions.closeButtonLoading);
    }, 500);
  };

  return (
    <div className="product-detail">
      <div className="product-detail__title">
        <h3>{productDetail.name}</h3>
      </div>
      <div className="product-detail__content">
        <ProductSlider />
        <ProductInfo
          product={productDetail}
          langs={langs}
          amount={amount}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          handleOrder={handleOrder}
        />
        <ProductRelated langs={langs} getProductDetail={_getProductDetail} />
      </div>
      <div className="product-detail__tabs">
        <ProductTabs product={productDetail} langs={langs} />
      </div>
    </div>
  );
};

export default ProductDetail;
