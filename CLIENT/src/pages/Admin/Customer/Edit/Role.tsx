import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";

interface RoleFieldsProps {
  langs: ILangs;
  values: any;
  options: IOptionsLang;
}

const RoleFields: React.FunctionComponent<RoleFieldsProps> = (props) => {
  const { langs, values, options } = props;

  return (
    <Card.Wrapper className="item__inner item__role">
      <h3 className="inner__title">{langs?.admin.customer.subTitle_4}</h3>
      <Field
        name="role"
        placeholder=" "
        label={langs?.form.role}
        defaultValue={options?.role.find((i) => i.value === values.role)}
        option={options?.role}
        component={FormControl.Select}
      />
    </Card.Wrapper>
  );
};

export default RoleFields;
