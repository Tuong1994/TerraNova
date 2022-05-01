import React from "react";
import * as FormControl from "../../../../components/Fields";
import * as Card from "../../../../components/Card";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";

interface StatusFieldsProps {
  langs: ILangs;
  isReset: boolean;
  options: IOptionsLang
}

const StatusFields: React.FunctionComponent<StatusFieldsProps> = (props) => {
  const { langs, isReset, options } = props;

  return (
    <Card.Wrapper className="item__inner item__status">
      <h3 className="inner__title">
        {langs?.admin.product.addProduct.subTitle_1}
      </h3>
      <Field
        name="status"
        placeholder=" "
        isReset={isReset}
        label={langs?.form.status}
        component={FormControl.Select}
        option={options?.productStatus}
        groupClassName="inner__control"
      />
      <Field
        name="inventoryStatus"
        placeholder=" "
        isReset={isReset}
        label={langs?.form.inventoryStatus}
        component={FormControl.Select}
        option={options?.inventoryStatus}
        groupClassName="inner__control"
      />
      <Field
        name="stockAmount"
        placeholder=" "
        label={langs?.form.stockAmount}
        component={FormControl.Input}
        groupClassName="inner__control"
      />
    </Card.Wrapper>
  );
};

export default StatusFields;
