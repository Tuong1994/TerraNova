import React from "react";
import * as FormControl from "../../../../components/Fields";
import { ILangs } from "../../../../interfaces/lang";
import { IProductCarts } from "../../../../models/Carts";
import { IShipment } from "../../../../models/Shipment";
import Shipment from "./Shipment";
import Summary from "./Summary";
import utils from "../../../../utils";

interface CartsPaymentProps {
  langs: ILangs;
  carts?: IProductCarts[];
  shipment: IShipment;
  shipmentFee: number;
  price: number;
  total: number;
  vat: number;
  totalPay: number;
  paymentType: number;
  setShipmentFee: React.Dispatch<React.SetStateAction<number>>;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  setVat: React.Dispatch<React.SetStateAction<number>>;
  setTotalPay: React.Dispatch<React.SetStateAction<number>>;
  setPaymentType: React.Dispatch<React.SetStateAction<number>>;
  setNote: React.Dispatch<React.SetStateAction<string>>;
}

const CartsPayment: React.FunctionComponent<CartsPaymentProps> = (props) => {
  const {
    langs,
    carts,
    shipment,
    shipmentFee,
    price,
    total,
    vat,
    totalPay,
    paymentType,
    setShipmentFee,
    setPrice,
    setTotal,
    setVat,
    setTotalPay,
    setPaymentType,
    setNote,
  } = props;

  return (
    <div className="product-carts__payment">
      <div className="payment__info">
        {(() => {
          if (utils.checkObjectEmpty(shipment)) {
            return <Shipment shipment={shipment} />;
          }
          return;
        })()}
        <FormControl.Note
          label={langs?.form.note}
          placeholder=" "
          groupClassName="info__group"
          inputClassName="group__input"
          labelClassName="group__label"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setNote(e.target.value);
          }}
        />
      </div>
      <Summary
        langs={langs}
        carts={carts}
        shipmentFee={shipmentFee}
        price={price}
        total={total}
        vat={vat}
        totalPay={totalPay}
        paymentType={paymentType}
        setShipmentFee={setShipmentFee}
        setPrice={setPrice}
        setTotal={setTotal}
        setVat={setVat}
        setTotalPay={setTotalPay}
        setPaymentType={setPaymentType}
      />
    </div>
  );
};

export default CartsPayment;
