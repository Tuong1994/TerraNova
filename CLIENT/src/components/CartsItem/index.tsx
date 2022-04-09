import React from "react";
import { useSelector } from "react-redux";
import { ELangs } from "../../interfaces/lang";
import { IProductCarts } from "../../models/Carts";
import { ReducerState } from "../../redux/store";
import utils from "../../utils";

interface CartsItemProps {
  item: IProductCarts;
  isButton?: boolean;
  groupClassName?: string;
  imgClassName?: string;
  contentClassName?: string;
  removeCarts?: (i: IProductCarts) => void;
}

const CartsItem: React.FunctionComponent<CartsItemProps> = (props) => {
  const {
    item,
    isButton,
    groupClassName,
    imgClassName,
    contentClassName,
    removeCarts,
  } = props;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  return (
    <div className={`carts-item ${groupClassName ? groupClassName : ""}`}>
      <img
        className={`carts-item__img ${imgClassName ? imgClassName : ""}`}
        src="../img/product_img.jpg"
        alt="product"
      />
      <div
        className={`carts-item__content ${
          contentClassName ? contentClassName : ""
        }`}
      >
        {item.productName && item.productName?.length > 30 ? (
          <p>{item.productName.substr(0, 30)}...</p>
        ) : (
          <p>{item.productName}</p>
        )}

        <div className="content__inner">
          <p>{item.price?.toLocaleString()} VND</p>
          {(() => {
            if (lang === ELangs.ENG) {
              return (
                <p>
                  <strong>{item.amount}</strong> {langs?.carts.slots}
                </p>
              );
            } else if (lang === ELangs.VN) {
              return (
                <p>
                  {langs?.carts.slots}: <strong>{item.amount}</strong>
                </p>
              );
            }
          })()}
        </div>
      </div>

      {isButton && (
        <div
          className="carts-item__icon"
          onClick={() => removeCarts && removeCarts(item)}
        >
          <i className="fa fa-times"></i>
        </div>
      )}
    </div>
  );
};

export default CartsItem;
