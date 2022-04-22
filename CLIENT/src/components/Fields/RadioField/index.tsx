import React from "react";
import { FieldProps } from "formik";

interface IRadioFieldProps extends FieldProps {
  label?: string;
  value?: string;
  groupClassName?: string;
  radioClassName?: string;
  labelClassName?: string;
}

const RadioField: React.FunctionComponent<IRadioFieldProps> = (props) => {
  const {
    field,
    form,
    label,
    value,
    groupClassName,
    radioClassName,
    labelClassName,
  } = props;
  const { name } = field;
  const { touched, errors, setFieldValue } = form;

  return (
    <div className="form__group">
      <div className={`group__radio ${groupClassName ? groupClassName : ""}`}>
        <input
          {...field}
          id={label}
          value={value}
          type="radio"
          className={`radio__control ${radioClassName ? radioClassName : ""}`}
          onChange={(e) => {
            setFieldValue(name, e.target.value);
          }}
        />
        <label className={`radio__label ${labelClassName ? labelClassName : ""}`} htmlFor={label}>
          {label}
        </label>
      </div>
      {touched[name] && errors[name] ? (
        <div className="group__error">{errors[name]}</div>
      ) : null}
    </div>
  );
};

export default RadioField;
