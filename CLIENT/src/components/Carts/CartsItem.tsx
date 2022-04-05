import React from "react";
import { ELangs, ILangs } from "../../interfaces/lang";
import { ICarts } from "../../models/Carts";
interface CartsItemProps {
  item: ICarts;
  lang: string;
  langs: ILangs;
  removeCarts: (i: ICarts) => void;
}

const CartsItem: React.FunctionComponent<CartsItemProps> = (props) => {
  const { item, lang, langs, removeCarts } = props;

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

      <div className="item__icon" onClick={() => removeCarts(item)}>
        <i className="fa fa-times"></i>
      </div>
    </div>
  );
};

export default CartsItem;
