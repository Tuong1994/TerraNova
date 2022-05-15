import React from "react";
import {
  EInventoryStatus,
  EProductStatus,
  IProduct,
} from "../../../../models/Product";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { ILangs } from "../../../../interfaces/lang";
import { EBadgeStatus } from "../../../../interfaces/badge";
import ButtonLoading from "../../../../components/Loading/ButtonLoading";
import Badge from "../../../../components/Badge";
import ProductRate from "../ProductRate";

interface IProductInfoProps {
  product: IProduct;
  amount: number;
  langs: ILangs;
  ratePoint: number;
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

  const renderStatus = () => {
    if (product?.status === EProductStatus.new) {
      return langs?.status.new;
    }
  };

  const getBadgeStatus = () => {
    if (product?.inventoryStatus === EInventoryStatus.inStock) {
      return EBadgeStatus.success;
    } else if (product?.inventoryStatus === EInventoryStatus.outOfStock) {
      return EBadgeStatus.error;
    }
  };

  const renderBadge = () => {
    if (product?.inventoryStatus === EInventoryStatus.inStock) {
      return <Badge status={getBadgeStatus()} title={langs?.status.stocking} />;
    } else if (product?.inventoryStatus === EInventoryStatus.outOfStock) {
      return (
        <Badge status={getBadgeStatus()} title={langs?.status.outOfStock} />
      );
    }
  };

  return (
    <div className="content__info">
      <h3 className="info__title">{langs?.productDetail.generalInfo}</h3>

      <div className="info__badge">{renderBadge()}</div>

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
          {langs?.productDetail.status} : <strong>{renderStatus()}</strong>
        </li>
        <li className="list__content">
          {langs?.productDetail.price} :{" "}
          <span>{product.price?.toLocaleString()} VND</span>
        </li>
      </ul>

      <div className="info__note">
        <p>{`(${langs?.productDetail.vat})`}</p>
      </div>

      <div className="info__rate">
        <ProductRate langs={langs} product={product} />
      </div>

      <div className="info__amount">
        <div
          className={
            amount <= 0 ? "amount__item button--disabled" : "amount__item"
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
