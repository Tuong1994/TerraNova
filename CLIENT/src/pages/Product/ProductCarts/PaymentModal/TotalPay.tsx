import React from "react";
import * as Card from "../../../../components/Card";
import { ILangs } from "../../../../interfaces/lang";

interface TotalPayProps {
  langs: ILangs;
  price: number;
  shipmentFee: number;
  total: number;
  totalPay: number;
  vat: number;
  renderPaymentType(): React.ReactNode;
}

const TotalPay: React.FunctionComponent<TotalPayProps> = (props) => {
  const { langs, price, shipmentFee, total, totalPay, vat, renderPaymentType } =
    props;

  return (
    <Card.Wrapper className="body__item">
      <Card.Body>
        <ul className="item__list">
          <li className="list__item">
            <div className="item__inner">
              <span>{langs?.productCarts.price} : </span>
              <strong>{price.toLocaleString()} VND</strong>
            </div>
          </li>
          <li className="list__item">
            <div className="item__inner">
              <span>{langs?.productCarts.shipment} : </span>
              <strong>{shipmentFee.toLocaleString()} VND</strong>
            </div>
          </li>
        </ul>

        <div className="item__line"></div>

        <ul className="item__list">
          <li className="list__item">
            <div className="item__inner">
              <span>{langs?.productCarts.total} : </span>
              <strong>{total.toLocaleString()} VND</strong>
            </div>
          </li>
          <li className="list__item">
            <div className="item__inner">
              <span>{langs?.productCarts.vat} : </span>
              <strong>{vat.toLocaleString()} VND</strong>
            </div>
          </li>
          <li className="list__item">
            <div className="item__inner">
              <span>{langs?.productCarts.totalPay} : </span>
              <strong>{totalPay.toLocaleString()} VND</strong>
            </div>
          </li>
        </ul>

        <div className="item__line"></div>

        <div className="item__payment-type">
          <span>{langs?.productCarts.paymentType}</span>
          <strong>{renderPaymentType()}</strong>
        </div>
      </Card.Body>
    </Card.Wrapper>
  );
};

export default TotalPay;
