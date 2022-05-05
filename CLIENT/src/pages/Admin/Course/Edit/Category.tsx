import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";

interface CategoryFieldsProps {
  langs: ILangs;
  values: any;
  options: IOptionsLang;
}

const CategoryFields: React.FunctionComponent<CategoryFieldsProps> = (
  props
) => {
  const { langs, values, options } = props;

  return (
    <Card.Wrapper className="item__inner item__category">
      <h3 className="inner__title">
        {langs?.admin.course.addCourse.subTitle_4}
      </h3>
      <Field
        name="categoryId"
        placeholder=" "
        component={FormControl.Select}
        defaultValue={options?.courseCategory.find(
          (i) => i.value === values.categoryId
        )}
        option={options?.courseCategory}
        groupClassName="inner__control"
      />
    </Card.Wrapper>
  );
};

export default CategoryFields;
