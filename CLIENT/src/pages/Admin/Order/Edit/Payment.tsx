import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";

interface PaymentFieldsProps {
  langs: ILangs;
  options: IOptionsLang;
  paymentType: number;
  setPaymentType: React.Dispatch<React.SetStateAction<number>>;
}

const PaymentFields: React.FunctionComponent<PaymentFieldsProps> = (props) => {
  const { langs, options, paymentType, setPaymentType } = props;

  return (
    <Card.Wrapper className="item__inner item__payment">
      <h3 className="inner__title">{langs?.admin.order.subTitle_6}</h3>
      <Field
        name="paymentType"
        placeholder=" "
        option={options?.paymentType}
        component={FormControl.Select}
        defaultValue={options?.paymentType.find((i) => i.value === paymentType)}
        groupClassName="inner__control"
        onChange={(value: any) => {
          setPaymentType(value);
        }}
      />
    </Card.Wrapper>
  );
};

export default PaymentFields;
