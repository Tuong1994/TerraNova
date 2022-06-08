import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";

interface StatusFieldsProps {
  langs: ILangs;
  options: IOptionsLang;
  isReset: boolean;
}

const StatusFields: React.FunctionComponent<StatusFieldsProps> = (props) => {
  const { langs, options, isReset } = props;

  return (
    <Card.Wrapper className="item__inner item__status">
      <h3 className="inner__title">{langs?.admin.movie.subTitle_3}</h3>
      <Field
        name="status"
        placeholder=" "
        isReset={isReset}
        component={FormControl.Select}
        option={options?.movieStatus}
        groupClassName="inner__control"
      />
    </Card.Wrapper>
  );
};

export default StatusFields;
