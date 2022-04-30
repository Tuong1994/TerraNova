import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";

interface SourceFieldsProps {
  langs: ILangs;
  options: IOptionsLang;
}

const SourceFields: React.FunctionComponent<SourceFieldsProps> = (props) => {
  const { langs, options } = props;

  return (
    <Card.Wrapper className="item__inner item__source">
      <h3 className="inner__title">
        {langs?.admin.product.addProduct.subTitle_5}
      </h3>
      <Field
        name="categoryId"
        placeholder=" "
        label={langs?.form.category}
        component={FormControl.Select}
        option={options?.productCategory}
        groupClassName="inner__control"
      />
      <Field
        name="producerId"
        placeholder=" "
        label={langs?.form.producer}
        component={FormControl.Select}
        option={options?.producer}
        groupClassName="inner__control"
      />
    </Card.Wrapper>
  );
};

export default SourceFields;
