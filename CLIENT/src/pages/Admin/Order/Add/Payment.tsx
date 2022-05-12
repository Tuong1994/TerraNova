import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";

interface PaymentFieldsProps {
  langs: ILangs;
  options: IOptionsLang;
  isReset: boolean;
  setPaymentType: React.Dispatch<React.SetStateAction<number>>;
}

const PaymentFields: React.FunctionComponent<PaymentFieldsProps> = (props) => {
  const { langs, options, isReset, setPaymentType } = props;

  return (
    <Card.Wrapper className="item__inner item__payment">
      <h3 className="inner__title">{langs?.admin.order.subTitle_6}</h3>
      <Field
        name="paymentType"
        placeholder=" "
        isReset={isReset}
        option={options?.paymentType}
        component={FormControl.Select}
        groupClassName="inner__control"
        onChange={(value: any) => {
            setPaymentType(value);
        }}
      />
    </Card.Wrapper>
  );
};

export default PaymentFields;
