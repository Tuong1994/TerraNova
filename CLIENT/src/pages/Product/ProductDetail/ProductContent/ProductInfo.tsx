import React from "react";
import { IAccessories } from "../../../../models/Product";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { ILangs } from "../../../../interfaces/lang";
import ButtonLoading from "../../../../components/Loading/ButtonLoading";

interface IProductInfoProps {
  product: IAccessories;
  amount: number;
  langs: ILangs;
  handleIncrease: () => void;
  handleDecrease: () => void;
  handleOrder: () => void;
}

const ProductInfo: React.FunctionComponent<IProductInfoProps> = (props) => {
  const {
    product,
    amount,
    langs,
    handleIncrease,
    handleDecrease,
    handleOrder,
  } = props;

  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  return (
    <div className="content__info">
      <h3 className="info__title">{langs?.productDetail.generalInfo}</h3>

      <ul className="info__list">
        <li className="list__content">
          {langs?.productDetail.producer} :{" "}
          <strong>{product.producerName}</strong>
        </li>
        <li className="list__content">
          {langs?.productDetail.warranty} :{" "}
          <strong>36 {langs?.time.months}</strong>
        </li>
        <li className="list__content">
          {langs?.productDetail.status} : <strong>{langs?.status.new}</strong>
        </li>
        <li className="list__content">
          {langs?.productDetail.price} :{" "}
          <span>{product.price?.toLocaleString()} VND</span>
        </li>
      </ul>

      <div className="info__amount">
        <div
          className={
            amount <= 0
              ? "amount__item button--disabled"
              : "amount__item"
          }
          onClick={handleDecrease}
        >
          -
        </div>
        <div className="amount__item">{amount}</div>
        <div className="amount__item" onClick={handleIncrease}>
          +
        </div>
      </div>

      <div className="info__button">
        <div
          className={
            amount <= 0 || buttonLoading
              ? "button--submit button--disabled"
              : "button--submit"
          }
          onClick={handleOrder}
        >
          {buttonLoading && <ButtonLoading />}
          <span>{langs?.button.addToCart}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
