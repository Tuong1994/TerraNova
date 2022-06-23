import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";

interface ShowTimeFieldsProps {
  langs: ILangs;
}

const ShowTimeFields: React.FunctionComponent<ShowTimeFieldsProps> = (
  props
) => {
  const { langs } = props;

  return (
    <Card.Wrapper className="item__inner inner__showtime">
      <h3 className="inner__title">{langs?.admin.showTime.subTitle_2}</h3>
      <Field
        name="showTime"
        component={FormControl.Date}
        groupClassName="inner__control"
      />
    </Card.Wrapper>
  );
};

export default ShowTimeFields;
