import React from "react";
import * as FormControl from "../../../../components/Fields";
import { ILangs } from "../../../../interfaces/lang";
import { ICarts } from "../../../../models/Carts";
import { IShipment } from "../../../../models/Shipment";
import Shipment from "./Shipment";
import Summary from "./Summary";
import utils from "../../../../utils";

interface CartsPaymentProps {
  langs: ILangs;
  carts: ICarts[];
  shipment: IShipment
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
    setShipmentFee,
    setPrice,
    setTotal,
    setVat,
    setTotalPay,
    setNote,
  } = props;

  return (
    <div className="card__payment">
      <div className="payment__info">
        {(() => {
          if(utils.checkObjectEmpty(shipment)) {
            return <Shipment shipment={shipment} />
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
        setShipmentFee={setShipmentFee}
        setPrice={setPrice}
        setTotal={setTotal}
        setVat={setVat}
        setTotalPay={setTotalPay}
      />
    </div>
  );
};

export default CartsPayment;
