import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";

interface InfoFieldsProps {
  langs: ILangs;
  totalAmount: number;
  total: number;
  shipmentFee: number;
  vat: number;
  totalPay: number;
}

const InfoFields: React.FunctionComponent<InfoFieldsProps> = (props) => {
  const { langs, totalAmount, total, shipmentFee, vat, totalPay } = props;
  return (
    <Card.Wrapper className="item__inner item__info">
      <h3 className="inner__title">{langs?.admin.order.subTitle_3}</h3>
      <Field
        name="note"
        placeholder=" "
        label={langs?.form.note}
        component={FormControl.TextArea}
      />
      <div className="inner__detail">
        <ul className="detail__list">
          <li className="list__inner">
            <p>{langs?.admin.order.amount} : </p>
            <p>{totalAmount}</p>
          </li>
          <li className="list__inner">
            <p>{langs?.admin.order.total} : </p>
            <p>{total.toLocaleString()} VND</p>
          </li>
          <li className="list__inner">
            <p>{langs?.admin.order.shipFee} : </p>
            <p>{shipmentFee.toLocaleString()} VND</p>
          </li>
          <li className="list__inner">
            <p>{langs?.admin.order.vat} : </p>
            <p>{vat.toLocaleString()} VND</p>
          </li>
          <hr />
          <li className="list__inner">
            <p>{langs?.admin.order.totalPay} : </p>
            <p>{totalPay.toLocaleString()} VND</p>
          </li>
        </ul>
      </div>
    </Card.Wrapper>
  );
};

export default InfoFields;
