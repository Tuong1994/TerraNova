import React from "react";
import * as customHook from "../../../hooks/index";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { IRouteParams } from "../../../interfaces/route";
import { getProductDetail } from "../../../redux/actionCreators/ProductCreators";
import { ReducerState } from "../../../redux/store";
import { IQueryList } from "../../../interfaces/query";
import {
  createCarts,
  updateCarts,
} from "../../../redux/actionCreators/CartsCreators";
import { ICarts, IProductCarts } from "../../../models/Carts";
import ProductSlider from "./ProductContent/ProductSlider";
import ProductInfo from "./ProductContent/ProductInfo";
import ProductRelated from "./ProductContent/ProductRelated";
import ProductTabs from "./ProductTabs";
import utils from "../../../utils";

const ProductDetail: React.FunctionComponent<
  RouteComponentProps<IRouteParams>
> = (props) => {
  const { productDetail } = useSelector(
    (state: ReducerState) => state.ProductReducer
  );
  const { carts } = useSelector((state: ReducerState) => state.CartsReducer);
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const [stock, setStock] = React.useState<IProductCarts>({});
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
    if (amount > 0) {
      if (carts && carts.length > 0) {
        const query: IQueryList = {
          cartsId: carts[0].cartsId,
        };
        const products = carts[0].products || [];
        let index: number = products.findIndex(
          (i) => i.productId === productDetail.productId
        );

        if (index !== -1) {
          const newProducts: IProductCarts = {
            productId: products[index].productId,
            productName: products[index].productName,
            price: products[index].price,
            amount: (products[index].amount || 0) + amount,
          };
          const newStock: ICarts = {
            cartsId: carts[0].cartsId,
            products: [{ ...newProducts }],
          };
          dispatch(
            updateCarts(
              newStock,
              query,
              langs?.toastMessages.success.updateCart,
              langs?.toastMessages.error.updateCart
            )
          );
        } else {
          products.push(stock);
          const newStock = {
            cartsId: carts[0].cartsId,
            products: products,
          };
          dispatch(
            updateCarts(
              newStock,
              query,
              langs?.toastMessages.success.addToCart,
              langs?.toastMessages.error.addToCart
            )
          );
        }
      } else if (carts && carts.length === 0) {
        carts.push({ products: [] });
        carts[0]?.products?.push(stock);
        let newStock = {
          products: carts[0].products,
        };
        dispatch(
          createCarts(
            newStock,
            langs?.toastMessages.success.addToCart,
            langs?.toastMessages.error.addToCart
          )
        );
      }
    }
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
