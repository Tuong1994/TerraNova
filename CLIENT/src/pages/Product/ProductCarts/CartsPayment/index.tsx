import React from "react";
import * as FormControl from "../../../../components/Fields";
import { ILangs } from "../../../../interfaces/lang";
import { ICarts } from "../../../../models/Carts";
import Summary from "./Summary";

interface CartsPaymentProps {
  langs: ILangs;
  carts: ICarts[];
  shipment: number;
  price: number;
  total: number;
  vat: number;
  totalPay: number;
  setShipment: React.Dispatch<React.SetStateAction<number>>;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  setVat: React.Dispatch<React.SetStateAction<number>>;
  setTotalPay: React.Dispatch<React.SetStateAction<number>>;
  setNote: React.Dispatch<React.SetStateAction<string>>;
}

const CartsPayment: React.FunctionComponent<CartsPaymentProps> = (props) => {
  const {
    langs,
    carts,
    shipment,
    price,
    total,
    vat,
    totalPay,
    setShipment,
    setPrice,
    setTotal,
    setVat,
    setTotalPay,
    setNote,
  } = props;

  return (
    <div className="card__payment">
      <FormControl.Note
        label={langs?.form.note}
        placeholder=" "
        groupClassName="payment__group"
        inputClassName="group__input"
        labelClassName="group__label"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setNote(e.target.value)
        }}
      />
      <Summary
        langs={langs}
        carts={carts}
        shipment={shipment}
        price={price}
        total={total}
        vat={vat}
        totalPay={totalPay}
        setShipment={setShipment}
        setPrice={setPrice}
        setTotal={setTotal}
        setVat={setVat}
        setTotalPay={setTotalPay}
      />
    </div>
  );
};

export default CartsPayment;
