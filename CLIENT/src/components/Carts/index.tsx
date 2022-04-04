import React from "react";
import * as customHooks from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReducerState } from "../../redux/store";
import { ICarts } from "../../models/Carts";
import { getCartsList } from "../../redux/actionCreators/CartsCreators";
import utils from "../../utils";
import CartsItem from "./CartsItem";

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
            if (carts?.length > 0) {
              return carts?.map((item: ICarts, index: number) => {
                return (
                  <CartsItem
                    key={index}
                    item={item}
                    lang={lang}
                    langs={langs}
                  />
                );
              });
            } else {
              return <p className="list__no-data">{langs?.noData.product}</p>;
            }
          })()}
        </div>

        {carts?.length > 0 && (
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
