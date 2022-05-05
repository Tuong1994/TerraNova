import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";

interface TrainTimeFieldsProps {
  langs: ILangs;
}

const TrainTimeFields: React.FunctionComponent<TrainTimeFieldsProps> = (
  props
) => {
  const { langs } = props;

  return (
    <Card.Wrapper className="item__inner item__time">
      <h3 className="inner__title">
        {langs?.admin.course.subTitle_3}
      </h3>
      <Field
        name="trainingTime"
        placeholder=" "
        component={FormControl.Input}
        groupClassName="inner__control"
      />
    </Card.Wrapper>
  );
};

export default TrainTimeFields;
