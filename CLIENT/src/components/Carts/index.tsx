import React from "react";
import * as customHooks from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReducerState } from "../../redux/store";
import { getCartsList, removeCarts } from "../../redux/actionCreators/CartsCreators";
import { IQueryList } from "../../interfaces/query";
import { ICarts } from "../../models/Carts";
import CartsItem from "./CartsItem";
import utils from "../../utils";

interface ICartsProps {
  className?: string;
}

const Carts: React.FunctionComponent<ICartsProps> = (props) => {
  const { className } = props;
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { carts } = useSelector((state: ReducerState) => state.CartsReducer);

  const [isShow, setIsShow] = React.useState<boolean>(false);

  const cartsRef = React.useRef(null);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

  customHooks.useClickOutSide(cartsRef, setIsShow);

  React.useEffect(() => {
    dispatch(getCartsList());
  }, []);

  const handleRemoveItem = (item: any) => {
    const query: IQueryList = {
      cartsId: item.cartsId,
    };
    dispatch(
      removeCarts(
        query,
        langs?.toastMessages.success.removeCart,
        langs?.toastMessages.error.removeCart
      )
    );
  }

  return (
    <div className="carts" ref={cartsRef}>
      <div
        className={`carts__icon ${className}`}
        onClick={() => setIsShow(!isShow)}
      >
        <i className="fa fa-shopping-cart"></i>
      </div>

      <div className="carts__total">{carts?.length}</div>

      <div
        className={
          isShow ? "carts__inner carts__inner--active" : "carts__inner"
        }
      >
        <div className="inner__list">
          {(() => {
            if (carts && carts?.length > 0) {
              return carts?.map((item: ICarts, index: number) => {
                return (
                  <CartsItem
                    key={index}
                    item={item}
                    lang={lang}
                    langs={langs}
                    removeCarts={handleRemoveItem}
                  />
                );
              });
            } else {
              return <p className="list__no-data">{langs?.noData.product}</p>;
            }
          })()}
        </div>

        {carts && carts?.length > 0 && (
          <div className="inner__link">
            {" "}
            <Link to="/productCarts" className="link__content">
              {langs?.button.seeMore}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carts;
