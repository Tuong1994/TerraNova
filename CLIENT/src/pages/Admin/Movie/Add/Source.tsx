import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields"
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";

interface SourceFieldsProps {
  langs: ILangs;
  isReset: boolean;
  options: IOptionsLang;
}

const SourceFields: React.FunctionComponent<SourceFieldsProps> = (props) => {
  const { langs, isReset, options} = props;

  return (
    <Card.Wrapper className="item__inner item__source">
      <h3 className="inner__title">{langs?.admin.movie.subTitle_4}</h3>
      <Field
        name="country"
        placeholder=" "
        isReset={isReset}
        component={FormControl.Select}
        option={options?.movieCountry}
        groupClassName="inner__control"
      />
    </Card.Wrapper>
  );
};

export default SourceFields;
