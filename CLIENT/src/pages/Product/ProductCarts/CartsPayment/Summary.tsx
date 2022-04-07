import React from "react";
import * as Card from "../../../../components/Card";
import { ILangs } from "../../../../interfaces/lang";
import { ICarts } from "../../../../models/Carts";

interface SummaryProps {
  langs: ILangs;
  carts: ICarts[];
  shipmentFee: number;
  price: number;
  total: number;
  vat: number;
  totalPay: number;
  setShipmentFee: React.Dispatch<React.SetStateAction<number>>;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  setVat: React.Dispatch<React.SetStateAction<number>>;
  setTotalPay: React.Dispatch<React.SetStateAction<number>>;
}

const Summary: React.FunctionComponent<SummaryProps> = (props) => {
  const {
    langs,
    carts,
    shipmentFee,
    price,
    total,
    vat,
    totalPay,
    setPrice,
    setTotal,
    setVat,
    setTotalPay,
  } = props;

  React.useEffect(() => {
    let sum = 0;
    if (carts && carts?.length > 0) {
      if (carts && carts.length > 0) {
        for (let i = 0; i < carts.length; i++) {
          sum += (carts[i].price || 0) * (carts[i].amount || 0);
        }
      }
    }
    setPrice(sum);
  }, [carts]);

  React.useEffect(() => {
    if(shipmentFee !== 0) {
      setTotal(price + shipmentFee);
    } else {
      setTotal(price)
    }
  }, [price, shipmentFee]);

  React.useEffect(() => {
    setVat((total * 10) / 100);
  }, [price, shipmentFee, total]);

  React.useEffect(() => {
    setTotalPay(price + vat);
  }, [price, vat]);

  return (
    <Card.Wrapper className="payment__summary">
      <Card.Header className="summary__header">
        <h3 className="header__title">{langs?.productCarts.summaryTitle}</h3>
      </Card.Header>
      <Card.Body className="summary__body">
        <ul className="body__list">
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

        <div className="body__line"></div>

        <ul className="body__list">
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
      </Card.Body>
    </Card.Wrapper>
  );
};

export default Summary;
