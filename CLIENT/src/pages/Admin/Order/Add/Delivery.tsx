import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";

interface DeliveryFieldsProps {
  langs: ILangs;
}

const DeliveryFields: React.FunctionComponent<DeliveryFieldsProps> = (
  props
) => {
  const { langs } = props;

  return (
    <Card.Wrapper className="item__inner item__delivery">
      <h3 className="inner__title">{langs?.admin.order.subTitle_4}</h3>
      <Field
        name="shipmentType"
        placeholder=" "
        label={langs?.form.shipmentType}
        component={FormControl.Select}
        groupClassName="inner__control"
      />
    </Card.Wrapper>
  );
};

export default DeliveryFields;
