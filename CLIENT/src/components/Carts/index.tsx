import React from "react";
import * as customHooks from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReducerState } from "../../redux/store";
import {
  getCartsList,
  removeCarts,
  updateCarts,
} from "../../redux/actionCreators/CartsCreators";
import { IQueryList } from "../../interfaces/query";
import { ICarts, IProductCarts } from "../../models/Carts";
import CartsItem from "./CartsItem";
import utils from "../../utils";

interface ICartsProps {
  className?: string;
}

const Carts: React.FunctionComponent<ICartsProps> = (props) => {
  const { className } = props;
  const path = document.location.pathname;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { carts } = useSelector((state: ReducerState) => state.CartsReducer);
  const { page } = useSelector(
    (state: ReducerState) => state.PaginationReducer
  );

  const [isShow, setIsShow] = React.useState<boolean>(false);
  const [totalPrice, setTotalPrice] = React.useState<number>(0);

  const cartsRef = React.useRef(null);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

  customHooks.useClickOutSide(cartsRef, setIsShow);

  React.useEffect(() => {
    dispatch(getCartsList());
  }, []);

  React.useEffect(() => {
    let sum = 0;
    if (carts && carts?.length > 0) {
      const products = carts[0].products || [];
      for (let i = 0; i < products.length; i++) {
        sum += (products[i].price || 0) * (products[i].amount || 0);
      }
    }
    setTotalPrice(sum);
  }, [carts]);

  const handleRemoveItem = (item: IProductCarts) => {
    const products = carts[0].products;
    const newProducts = products?.filter((i) => i.productId !== item.productId);
    const newStock = {
      cartsId: carts[0].cartsId,
      products: newProducts,
    };
    const query: IQueryList = {
      cartsId: carts[0].cartsId,
    };
    dispatch(
      updateCarts(
        newStock,
        query,
        langs?.toastMessages.success.updateCart,
        langs?.toastMessages.error.updateCart
      )
    );
  };

  return (
    <div className="carts" ref={cartsRef}>
      <div
        className={`carts__icon ${className}`}
        onClick={() => setIsShow(!isShow)}
      >
        <i className="fa fa-shopping-cart"></i>
      </div>

      <div className="carts__total">{carts[0]?.products?.length || 0}</div>

      <div
        className={
          isShow ? "carts__inner carts__inner--active" : "carts__inner"
        }
      >
        <div className="inner__list">
          {(() => {
            if (carts[0]?.products && carts[0]?.products?.length > 0) {
              return carts?.map((item: ICarts, index: number) => {
                return (
                  <React.Fragment key={index}>
                    {item.products?.map((product, index) => {
                      return (
                        <CartsItem
                          key={index}
                          item={product}
                          lang={lang}
                          langs={langs}
                          removeCarts={handleRemoveItem}
                        />
                      );
                    })}
                  </React.Fragment>
                );
              });
            } else {
              return <p className="list__no-data">{langs?.noData.product}</p>;
            }
          })()}
        </div>

        {carts[0]?.products && carts[0]?.products?.length > 0 && (
          <div className="inner__total">
            {langs?.carts.total} : {totalPrice.toLocaleString()} VND
          </div>
        )}

        {carts[0]?.products && carts[0]?.products?.length > 0 && (
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
        )}
      </div>
    </div>
  );
};

export default Carts;
