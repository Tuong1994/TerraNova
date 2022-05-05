import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";

interface RoleFieldsProps {
  langs: ILangs;
}

const RoleFields: React.FunctionComponent<RoleFieldsProps> = (props) => {
  const { langs } = props;

  return (
    <Card.Wrapper className="item__inner item__role">
      <h3 className="inner__title">{langs?.admin.customer.subTitle_4}</h3>
      <Field
        name="role"
        placeholder=" "
        label={langs?.form.role}
        component={FormControl.Input}
      />
    </Card.Wrapper>
  );
};

export default RoleFields;
