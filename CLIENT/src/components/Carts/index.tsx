import React from "react";
import * as customHooks from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReducerState } from "../../redux/store";
import {
  getCartsList,
  updateCarts,
} from "../../redux/actionCreators/CartsCreators";
import { IQueryList } from "../../interfaces/query";
import { ICarts, IProductCarts } from "../../models/Carts";
import { ECartsActionTypes } from "../../redux/actionTypes/CartsActionTypes";
import { getUserDetail } from "../../redux/actionCreators/UserCreators";
import { toast } from "react-toastify";
import CartsItem from "../CartsItem";
import utils from "../../utils";

interface ICartsProps {
  className?: string;
}

const Carts: React.FunctionComponent<ICartsProps> = (props) => {
  const { className } = props;
  const path = document.location.pathname;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { carts, tempCarts } = useSelector(
    (state: ReducerState) => state.CartsReducer
  );
  const { user } = useSelector((state: ReducerState) => state.UserReducer);

  const [isShow, setIsShow] = React.useState<boolean>(false);
  const [totalPrice, setTotalPrice] = React.useState<number>(0);

  const cartsRef = React.useRef(null);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

  customHooks.useClickOutSide(cartsRef, setIsShow);

  React.useEffect(() => {
    const query: IQueryList = {
      userId: user?.id,
    };
    dispatch(getCartsList());
    dispatch(getUserDetail(query));
  }, []);

  React.useEffect(() => {
    let sum = 0;
    if (utils.checkObjectEmpty(user)) {
      if (user?.carts && user?.carts?.length > 0) {
        const products = user?.carts[0]?.products || [];
        for (let i = 0; i < products.length; i++) {
          sum += (products[i].price || 0) * (products[i].amount || 0);
        }
      }
      setTotalPrice(sum);
    } else {
      if (tempCarts?.products && tempCarts?.products?.length > 0) {
        const products = tempCarts?.products || [];
        for (let i = 0; i < products.length; i++) {
          sum += (products[i].price || 0) * (products[i].amount || 0);
        }
      }
      setTotalPrice(sum);
    }
  }, [carts, tempCarts]);

  const handleRemoveItem = (item: IProductCarts) => {
    if (utils.checkObjectEmpty(user)) {
      if (user?.carts && user?.carts[0]?.products) {
        const products = user?.carts[0]?.products;
        const newProducts = products?.filter(
          (i: any) => i.productId !== item.productId
        );
        const newStock = {
          cartsId: carts[0].cartsId,
          products: newProducts,
        };
        const query: IQueryList = {
          cartsId: user?.carts[0].cartsId,
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
      const products = tempCarts?.products;
      const newProducts = products?.filter(
        (i: any) => i.productId !== item.productId
      );
      const stock = {
        products: newProducts,
      };
      localStorage.setItem("carts", JSON.stringify(stock));
      dispatch({
        type: ECartsActionTypes.UPDATE_TEMP_CARTS,
        payload: stock,
      });
      toast.success(langs?.toastMessages.success.updateCart);
    }
  };

  const renderItem = () => {
    if (utils.checkObjectEmpty(user)) {
      // Check if user exist => call API create carts / if not => save temporary carts
      if (user?.carts && user?.carts?.length > 0) {
        if (user?.carts[0]?.products && user?.carts[0]?.products?.length > 0) {
          return user?.carts?.map((item: ICarts, index: number) => {
            return (
              <React.Fragment key={index}>
                {item?.products?.map((product, index) => {
                  return (
                    <CartsItem
                      key={index}
                      item={product}
                      isButton={true}
                      removeCarts={handleRemoveItem}
                    />
                  );
                })}
              </React.Fragment>
            );
          });
        }
      } else {
        return <p className="list__no-data">{langs?.noData.product}</p>;
      }
    } else {
      if (tempCarts?.products && tempCarts?.products?.length > 0) {
        return tempCarts?.products?.map(
          (product: IProductCarts, index: number) => {
            return (
              <CartsItem
                key={index}
                item={product}
                isButton={true}
                removeCarts={handleRemoveItem}
              />
            );
          }
        );
      } else {
        return <p className="list__no-data">{langs?.noData.product}</p>;
      }
    }
  };

  const renderTotal = () => {
    if (utils.checkObjectEmpty(user)) {
      // Check if user exist => render carts by user
      if (user?.carts && user?.carts[0]?.products) {
        return (
          user?.carts[0]?.products &&
          user?.carts[0]?.products?.length > 0 && (
            <div className="inner__total">
              {langs?.carts.total} : {totalPrice.toLocaleString()} VND
            </div>
          )
        );
      }
    } else {
      return (
        tempCarts?.products &&
        tempCarts?.products?.length > 0 && (
          <div className="inner__total">
            {langs?.carts.total} : {totalPrice.toLocaleString()} VND
          </div>
        )
      );
    }
  };

  const renderLink = () => {
    if (utils.checkObjectEmpty(user)) {
      // Check if user exist => render carts by user
      if (user?.carts && user?.carts[0]?.products) {
        return (
          user?.carts[0]?.products &&
          user?.carts[0]?.products?.length > 0 && (
            <div className="inner__link">
              {path.includes("productCarts") ? (
                <Link to="/" className="link__content">
                  {langs?.button.buyProduct}
                </Link>
              ) : (
                <Link to="/productCarts" className="link__content">
                  {langs?.button.seeMore}
                </Link>
              )}
            </div>
          )
        );
      }
    } else {
      return (
        tempCarts?.products &&
        tempCarts?.products?.length > 0 && (
          <div className="inner__link">
            {path.includes("productCarts") ? (
              <Link to="/" className="link__content">
                {langs?.button.buyProduct}
              </Link>
            ) : (
              <Link to="/productCarts" className="link__content">
                {langs?.button.seeMore}
              </Link>
            )}
          </div>
        )
      );
    }
  };

  return (
    <div className="carts" ref={cartsRef}>
      <div
        className={`carts__icon ${className}`}
        onClick={() => setIsShow(!isShow)}
      >
        <i className="fa fa-shopping-cart"></i>
      </div>

      <div className="carts__total">
        {carts[0]?.products?.length || tempCarts?.products?.length || 0}
      </div>

      <div
        className={
          isShow ? "carts__inner carts__inner--active" : "carts__inner"
        }
      >
        <div className="inner__list">{renderItem()}</div>

        {renderTotal()}

        {renderLink()}
      </div>
    </div>
  );
};

export default Carts;
