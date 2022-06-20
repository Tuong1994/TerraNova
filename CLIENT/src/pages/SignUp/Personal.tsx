import React from "react";
import * as FormControl from "../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../interfaces/lang";
import { EGender } from "../../models/User";

interface PersonalProps {
  langs: ILangs;
}

const Personal: React.FunctionComponent<PersonalProps> = (props) => {
  const { langs } = props;

  return (
    <div className="wrapper__group">
      <h3 className="group__title">{langs?.form.personalInfo}</h3>

      <div className="group__item">
        <Field
          name="firstName"
          component={FormControl.Input}
          label={langs?.form.firstName}
          placeholder=" "
          type="text"
          icon={<i className="fas fa-user"></i>}
          groupClassName="item__control"
        />
        <Field
          name="lastName"
          component={FormControl.Input}
          label={langs?.form.lastName}
          placeholder=" "
          type="text"
          icon={<i className="fas fa-user"></i>}
          groupClassName="item__control"
        />
      </div>

      <div className="group__item">
        <Field
          name="phone"
          component={FormControl.Input}
          label={langs?.form.phone}
          placeholder=" "
          type="text"
          icon={<i className="fas fa-phone"></i>}
          groupClassName="item__control"
        />

        <Field
          name="birthDay"
          type="date"
          placeholder=" "
          component={FormControl.Input}
          label={langs?.form.birthday}
          groupClassName="item__control"
        />
      </div>

      <div className="group__gender">
        <h5 className="gender__label">{langs?.form.gender}</h5>
        <div className="gender__control">
          <Field
            name="gender"
            value={EGender.male}
            component={FormControl.Radio}
            label={langs?.form.male}
            wrapperClassName="control__radio"
            groupClassName="radio__group"
            labelClassName="group__label"
          />
          <Field
            name="gender"
            value={EGender.female}
            component={FormControl.Radio}
            label={langs?.form.female}
            wrapperClassName="control__radio"
            groupClassName="radio__group"
            labelClassName="group__label"
          />
        </div>
      </div>
    </div>
  );
};

export default Personal;
