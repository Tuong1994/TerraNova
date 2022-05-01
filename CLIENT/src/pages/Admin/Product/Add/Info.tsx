import React from "react";
import * as FormControl from "../../../../components/Fields";
import * as Card from "../../../../components/Card";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";

interface InfoFieldsProps {
  langs: ILangs;
  isReset: boolean;
  options: IOptionsLang;
}

const InfoFields: React.FunctionComponent<InfoFieldsProps> = (props) => {
  const { langs, isReset, options } = props;

  return (
    <Card.Wrapper className="item__inner item__info">
      <h3 className="inner__title">
        {langs?.admin.product.addProduct.subTitle_2}
      </h3>
      <Field
        name="name"
        placeholder=" "
        label={langs?.form.productName}
        component={FormControl.Input}
        groupClassName="inner__control"
      />
      <Field
        name="productType"
        placeholder=" "
        isReset={isReset}
        label={langs?.form.productType}
        component={FormControl.Select}
        option={options?.productCategory}
        groupClassName="inner__control"
      />
    </Card.Wrapper>
  );
};

export default InfoFields;
