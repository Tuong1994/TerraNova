import React from "react";
import * as FormControl from "../../../../components/Fields";
import * as Card from "../../../../components/Card";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";

interface InfoFieldsProps {
  langs: ILangs;
}

const InfoFields: React.FunctionComponent<InfoFieldsProps> = (props) => {
  const { langs } = props;

  return (
    <Card.Wrapper className="item__inner item__info">
      <h3 className="inner__title">
        {langs?.admin.product.editProduct.subTitle_2}
      </h3>
      <Field
        name="name"
        placeholder=" "
        label={langs?.form.productName}
        component={FormControl.Input}
        groupClassName="inner__control"
      />
    </Card.Wrapper>
  );
};

export default InfoFields;
