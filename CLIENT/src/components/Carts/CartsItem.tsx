import React from "react";
import { useDispatch } from "react-redux";
import { ELangs } from "../../interfaces/lang";
import { IOrder } from "../../models/Order";
import { EOrderActionTypes } from "../../redux/actionTypes/OrderActionTypes";

interface CartsItemProps {
  item: IOrder;
  lang: any;
  langs: any;
}

const CartsItem: React.FunctionComponent<CartsItemProps> = (props) => {
  const { item, lang, langs } = props;

  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch({
      type: EOrderActionTypes.REMOVE_STOCK,
      payload: item,
    });
  };

  return (
    <div className="list__item">
      <img className="item__img" src="../img/product_img.jpg" alt="product" />
      <div className="item__content">
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
                  <strong>{item.quanlity}</strong> {langs?.carts.slots}
                </p>
              );
            } else if (lang === ELangs.VN) {
              return (
                <p>
                  {langs?.carts.slots}: <strong>{item.quanlity}</strong>
                </p>
              );
            }
          })()}
        </div>
      </div>

      <div className="item__icon" onClick={handleRemoveItem}>
        <i className="fa fa-times"></i>
      </div>
    </div>
  );
};

export default CartsItem;
