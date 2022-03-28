import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IOrder } from "../../../../models/Order";
import { IAccessories } from "../../../../models/Product";
import { EOrderActionTypes } from "../../../../redux/actionTypes/OrderActionTypes";
import { ReducerState } from "../../../../redux/store";

interface IProductInfoProps {
  product: IAccessories;
  langs: any;
}

const ProductInfo: React.FunctionComponent<IProductInfoProps> = (props) => {
  const { product, langs } = props;

  const { order } = useSelector((state: ReducerState) => state.OrderReducer);
  const [quanlity, setQuanlity] = React.useState<number>(0);
  const [stock, setStock] = React.useState<IOrder>({
    productId: "",
    productName: "",
    quanlity: 0,
    price: 0,
  });
  const dispatch = useDispatch();

  React.useEffect(() => {
    setStock({
      productId: product.productId,
      productName: product.name,
      quanlity: quanlity,
      price: product.price,
    });
  }, [product, quanlity]);

  const handleIncrease = () => {
    setQuanlity(quanlity + 1);
  };

  const handleDecrease = () => {
    setQuanlity(quanlity - 1);
  };

  const handleOrder = () => {
    dispatch({
      type: EOrderActionTypes.ADD_STOCK,
      payload: stock,
    });
  };

  return (
    <div className="content__info">
      <h3 className="info__title">{langs?.productDetail.generalInfo}</h3>

      <ul className="info__list">
        <li className="list__content">
          {langs?.productDetail.producer} :{" "}
          <strong>{product.producerName}</strong>
        </li>
        <li className="list__content">
          {langs?.productDetail.warranty} : <strong>36 {langs?.time.months}</strong>
        </li>
        <li className="list__content">
          {langs?.productDetail.status} : <strong>{langs?.status.new}</strong>
        </li>
        <li className="list__content">
          {langs?.productDetail.price} :{" "}
          <span>{product.price?.toLocaleString()} VND</span>
        </li>
      </ul>

      <div className="info__quantily">
        <div
          className={
            quanlity <= 0
              ? "quantily__item button--delete button--disabled"
              : "quantily__item button--delete"
          }
          onClick={handleDecrease}
        >
          -
        </div>
        <div className="quantily__item">{quanlity}</div>
        <div className="quantily__item button--add" onClick={handleIncrease}>
          +
        </div>
      </div>

      <div className="info__button" onClick={handleOrder}>
        <div className="button--submit">{langs?.button.addToCart} </div>
      </div>
    </div>
  );
};

export default ProductInfo;
