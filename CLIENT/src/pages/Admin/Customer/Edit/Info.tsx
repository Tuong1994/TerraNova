import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";
import utils from "../../../../utils";

interface InfoFieldsProps {
  langs: ILangs;
  values: any;
  options: IOptionsLang;
}

const InfoFields: React.FunctionComponent<InfoFieldsProps> = (props) => {
  const { langs, values, options } = props;

  return (
    <Card.Wrapper className="item__inner item__info">
      <h3 className="inner__title">{langs?.admin.customer.subTitle_2}</h3>
      <div className="inner__group">
        <Field
          name="firstName"
          placeholder=" "
          label={langs?.form.firstName}
          component={FormControl.Input}
          groupClassName="group__control"
        />
        <Field
          name="lastName"
          placeholder=" "
          label={langs?.form.lastName}
          component={FormControl.Input}
          groupClassName="group__control"
        />
      </div>

      <div className="inner__group">
        <Field
          name="birthDay"
          type="date"
          placeholder=" "
          label={langs?.form.birthday}
          component={FormControl.Input}
          groupClassName="group__control"
        />
        <Field
          name="gender"
          placeholder=" "
          label={langs?.form.gender}
          defaultValue={options?.gender.find(i => i.value === values.gender)}
          option={options?.gender}
          component={FormControl.Select}
          groupClassName="group__control"
        />
      </div>

      <div className="inner__group">
        <Field
          name="email"
          placeholder=" "
          label={langs?.form.email}
          component={FormControl.Input}
          groupClassName="group__control"
        />
        <Field
          name="phone"
          type="number"
          placeholder=" "
          label={langs?.form.phone}
          component={FormControl.Input}
          groupClassName="group__control"
          onKeyPress={(e: React.ChangeEvent<HTMLInputElement>) => {
            utils.checkKeyNumberType(e, langs?.toastMessages.error.onlyNumber);
          }}
        />
      </div>
    </Card.Wrapper>
  );
};

export default InfoFields;
