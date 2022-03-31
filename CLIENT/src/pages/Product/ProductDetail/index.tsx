import React from "react";
import * as customHook from "../../../hooks/index";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { IRouteParams } from "../../../interfaces/route";
import { getProductDetail } from "../../../redux/actionCreators/ProductCreators";
import { EOrderActionTypes } from "../../../redux/actionTypes/OrderActionTypes";
import { ReducerState } from "../../../redux/store";
import { IQueryList } from "../../../interfaces/query";
import { IOrder } from "../../../models/Order";
import { toast } from "react-toastify";
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
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const [stock, setStock] = React.useState<IOrder>({});
  const [quanlity, setQuanlity] = React.useState<number>(0);

  const dispatch = useDispatch();
  const id = props.match.params.id;

  const langs = utils.changeLang(lang);

  customHook.useLoading(productDetail);

  React.useEffect(() => {
    _getProductDetail();
  }, []);

  React.useEffect(() => {
    if (quanlity > 0) {
      setStock({
        productId: productDetail.productId,
        productName: productDetail.name,
        quanlity: quanlity,
        price: productDetail.price,
      });
    } else {
      setStock({});
    }
  }, [productDetail, quanlity]);

  const _getProductDetail = (productId?: string) => {
    if (localStorage.getItem("query")) {
      let ids: any = {};
      let obj = localStorage.getItem("query");
      ids = JSON.parse(obj || "");
      if (ids) {
        const query: IQueryList = {
          productId: productId || id,
          productType: ids.categoryId,
        };
        dispatch(getProductDetail(query));
      }
    }
  };

  const handleIncrease = () => {
    setQuanlity(quanlity + 1);
  };

  const handleDecrease = () => {
    setQuanlity(quanlity - 1);
  };

  const handleOrder = () => {
    dispatch(actions.openButtonLoading);
    setTimeout(() => {
      if (quanlity > 0) {
        let newStock = { ...stock };
        dispatch({
          type: EOrderActionTypes.ADD_STOCK,
          payload: newStock,
        });
        toast.success(langs?.toastMessages.success.addToCart);
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
          quanlity={quanlity}
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
