import React from "react";
import * as customHooks from "../../hooks";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReducerState } from "../../redux/store";
import { IOrder } from "../../models/Order";
import utils from "../../utils";
import CartsItem from "./CartsItem";

interface ICartsProps {
  className?: string;
}

const Carts: React.FunctionComponent<ICartsProps> = (props) => {
  const { className } = props;
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { orders } = useSelector((state: ReducerState) => state.OrderReducer);

  const [isShow, setIsShow] = React.useState<boolean>(false);

  const cartsRef = React.useRef(null);

  const langs = utils.changeLang(lang);

  customHooks.useClickOutSide(cartsRef, setIsShow);

  return (
    <div className="carts" ref={cartsRef}>
      <div
        className={`carts__icon ${className}`}
        onClick={() => setIsShow(!isShow)}
      >
        <i className="fa fa-shopping-cart"></i>
      </div>

      <div className="carts__total">{orders?.length}</div>

      <div
        className={
          isShow ? "carts__inner carts__inner--active" : "carts__inner"
        }
      >
        <div className="inner__list">
          {(() => {
            if (orders?.length > 0) {
              return orders?.map((order: IOrder, index: number) => {
                return <CartsItem key={index} item={order} lang={lang} langs={langs} />;
              });
            } else {
              return <p className="list__no-data">{langs?.noData.product}</p>;
            }
          })()}
        </div>

        {orders?.length > 0 && (
          <div className="inner__link">
            {" "}
            <Link to="/" className="link__content">
              {langs?.button.seeMore}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carts;
