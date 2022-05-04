import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";

interface DescFieldsProps {
  langs: ILangs;
}

const DescFields: React.FunctionComponent<DescFieldsProps> = (props) => {
  const { langs } = props;

  return (
    <Card.Wrapper className="item__inner item__desc">
      <h3 className="inner__title">
        {langs?.admin.course.addCourse.subTitle_2}
      </h3>
      <Field
        name="descENG"
        placeholder=" "
        label={langs?.form.courseDescENG}
        component={FormControl.TextArea}
        groupClassName="inner__control"
      />
      <Field
        name="descVN"
        placeholder=" "
        label={langs?.form.courseDescVN}
        component={FormControl.TextArea}
        groupClassName="inner__control"
      />
      <Field
        name="descCH"
        placeholder=" "
        label={langs?.form.courseDescCH}
        component={FormControl.TextArea}
        groupClassName="inner__control"
      />
    </Card.Wrapper>
  );
};

export default DescFields;
