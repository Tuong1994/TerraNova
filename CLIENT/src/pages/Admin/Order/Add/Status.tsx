import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";

interface StatusFieldsProps {
  langs: ILangs;
}

const StatusFields: React.FunctionComponent<StatusFieldsProps> = (props) => {
  const { langs } = props;

  return (
    <Card.Wrapper className="item__inner item__status">
      <h3 className="inner__title">{langs?.admin.order.subTitle_2}</h3>
      <Field
        name="status"
        placeholder=" "
        label={langs?.form.status}
        component={FormControl.Select}
        groupClassName="inner__control"
      />
    </Card.Wrapper>
  );
};

export default StatusFields;