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
import { ECartsActionTypes } from "../../../redux/actionTypes/CartsActionTypes";
import { toast } from "react-toastify";
import { CARTS } from "../../../configs/setting";
import ProductSlider from "./ProductSilder";
import ProductInfo from "./ProductInfo";
import ProductRelated from "./ProductRelated";
import ProductSpecs from "./ProductSpecs";
import actions from "../../../configs/actions";
import utils from "../../../utils";
import Comment from "../../../components/Comment";

const ProductDetail: React.FunctionComponent<
  RouteComponentProps<IRouteParams>
> = (props) => {
  const { productDetail } = useSelector(
    (state: ReducerState) => state.ProductReducer
  );
  const { carts } = useSelector((state: ReducerState) => state.CartsReducer);
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { user } = useSelector((state: ReducerState) => state.UserReducer);

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
    const query: IQueryList = {
      productId: id,
    };
    dispatch(getProductDetail(query));
  };

  const handleIncrease = () => {
    setAmount(amount + 1);
  };

  const handleDecrease = () => {
    setAmount(amount - 1);
  };

  const handleOrder = () => {
    if (amount > 0) {
      // Carts has products => Update carts
      if (carts && carts.length > 0) {
        const query: IQueryList = {
          cartsId: carts[0].cartsId,
        };
        const products = carts[0].products || [];
        let index: number = products.findIndex(
          (i) => i.productId === productDetail.productId
        ); // Find products in carts if exist

        if (index !== -1) { // If products not exist => add new products into carts
          const newProducts: IProductCarts = {
            productId: products[index].productId,
            productName: products[index].productName,
            price: products[index].price,
            amount: (products[index].amount || 0) + amount,
          };
          if (utils.checkObjectEmpty(user)) { // Check if user exist => call API create carts / if not => save temporary carts
            const newStock: ICarts = {
              cartsId: carts[0].cartsId,
              products: [{ ...newProducts }],
              userId: user?.id,
            };
            const userQuery: IQueryList = {
              userId: user?.id,
            }

            dispatch(
              updateCarts(
                newStock,
                query,
                langs?.toastMessages.success.updateCart,
                langs?.toastMessages.error.updateCart,
                userQuery,
              )
            );
          } else {
            const stock = {
              products: [{ ...newProducts }],
            };
            localStorage.setItem(CARTS, JSON.stringify(stock));
            dispatch(actions.openButtonLoading);
            setTimeout(() => {
              dispatch({
                type: ECartsActionTypes.UPDATE_TEMP_CARTS,
                payload: stock,
              });
              toast.success(langs?.toastMessages.success.updateCart);
              dispatch(actions.closeButtonLoading);
            }, 1000);
          }
          
        } else { // If products exist => update product's amount
          products.push(stock);
          if (utils.checkObjectEmpty(user)) {  // Check if user exist => call API create carts / if not => save temporary carts
            const newStock: ICarts = {
              cartsId: carts[0].cartsId,
              products: products,
              userId: user?.id,
            };
            const userQuery: IQueryList = {
              userId: user?.id,
            }

            dispatch(
              updateCarts(
                newStock,
                query,
                langs?.toastMessages.success.addToCart,
                langs?.toastMessages.error.addToCart,
                userQuery,
              )
            );
          } else {
            const stock = {
              products: products,
            };
            localStorage.setItem(CARTS, JSON.stringify(stock));
            dispatch(actions.openButtonLoading);
            setTimeout(() => {
              dispatch({
                type: ECartsActionTypes.UPDATE_TEMP_CARTS,
                payload: stock,
              });
              toast.success(langs?.toastMessages.success.updateCart);
              dispatch(actions.closeButtonLoading);
            }, 1000);
          }
        }

        // Carts has no products
      } 
      // Carts has no products => Create new carts
      else if (carts && carts.length === 0) {
        carts.push({ products: [] });
        carts[0]?.products?.push(stock);
        if (utils.checkObjectEmpty(user)) {  // Check if user exist => call API create carts / if not => save temporary carts
          let newStock: ICarts = {
            products: carts[0].products,
            userId: user?.id,
          };
          const query: IQueryList = {
            userId: user?.id,
          }
          dispatch(
            createCarts(
              newStock,
              langs?.toastMessages.success.addToCart,
              langs?.toastMessages.error.addToCart,
              query,
            )
          );
        } else {
          let stock = {
            products: carts[0].products,
          };
          localStorage.setItem(CARTS, JSON.stringify(stock));
          dispatch(actions.openButtonLoading);
          setTimeout(() => {
            dispatch({
              type: ECartsActionTypes.ADD_TEMP_CARTS,
              payload: stock,
            });
            toast.success(langs?.toastMessages.success.addToCart);
            dispatch(actions.closeButtonLoading);
          }, 1000);
        }
      }
    }
  };

  return (
    <div className="product-detail">
      <div className="product-detail__title">
        <h3>{productDetail.name}</h3>
      </div>
      <div className="product-detail__content">
        <ProductSlider product={productDetail} />
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
      <div className="product-detail__specs">
        <ProductSpecs langs={langs} product={productDetail} />
        <Comment />
      </div>
    </div>
  );
};

export default ProductDetail;
