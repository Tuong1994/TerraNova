import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IOrder } from "../../../../models/Order/IOrder";
import { IAccessories } from "../../../../models/Product/IProduct";
import { EOrderActionTypes } from "../../../../redux/actionTypes/OrderActionTypes";
import { ReducerState } from "../../../../redux/store";

interface IProductInfoProps {
  product: IAccessories;
}

const ProductInfo: React.FunctionComponent<IProductInfoProps> = (props) => {
  const { product } = props;
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
    })
  }, [product, quanlity])

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
  }

  return (
    <div className="content__info">
      <h3 className="info__title">General information</h3>
      <ul className="info__list">
        <li className="list__content">Producer: {product.producerName}</li>
        <li className="list__content">Warranty: 36 months</li>
        <li className="list__content">Status: new</li>
        <li className="list__content">
          Price: <span>${product.price?.toLocaleString()}</span>
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
        <div className="button--submit">Order</div>
      </div>
    </div>
  );
};

export default ProductInfo;
