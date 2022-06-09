import React from "react";
import * as FormControl from "../../../../components/Fields";
import * as Card from "../../../../components/Card";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";

interface DetailFieldsProps {
  langs: ILangs;
  isReset: boolean;
  options: IOptionsLang;
}

const DetailFields: React.FunctionComponent<DetailFieldsProps> = (props) => {
  const { langs, options, isReset } = props;

  return (
    <Card.Wrapper className="item__inner item__detail">
      <h3 className="inner__title">{langs?.admin.movie.subTitle_6}</h3>
      <Field
        name="director"
        placeholder=" "
        component={FormControl.Input}
        label={langs?.form.director}
        groupClassName="inner__control"
      />
      <Field
        name="actors"
        placeholder=" "
        component={FormControl.Input}
        label={langs?.form.actors}
        groupClassName="inner__control"
      />
      <Field
        name="duration"
        placeholder=" "
        component={FormControl.Input}
        label={langs?.form.duration}
        groupClassName="inner__control"
      />
      <Field
        name="releaseDay"
        placeholder=" "
        type="date"
        component={FormControl.Input}
        label={langs?.form.releaseDay}
      />
      <Field
        name="type"
        placeholder=" "
        isReset={isReset}
        component={FormControl.Select}
        label={langs?.form.type}
        option={options?.movieType}
        groupClassName="inner__control"
      />
    </Card.Wrapper>
  );
};

export default DetailFields;
