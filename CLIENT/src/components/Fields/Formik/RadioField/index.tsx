import React from "react";
import { FieldProps } from "formik";

interface IRadioFieldProps extends FieldProps {
  label?: string;
  value?: string;
  checked?: boolean;
  wrapperClassName?: string;
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
    checked,
    wrapperClassName,
    groupClassName,
    radioClassName,
    labelClassName,
  } = props;
  const { name } = field;
  const { touched, errors, setFieldValue } = form;

  return (
    <div className={`form__group ${wrapperClassName ? wrapperClassName : ""}`}>
      <div className={`group__radio ${groupClassName ? groupClassName : ""}`}>
        <input
          {...field}
          id={label}
          value={value}
          defaultChecked={checked}
          type="radio"
          className={`radio__control ${radioClassName ? radioClassName : ""}`}
          onChange={(e) => {
            setFieldValue(name, e.target.value);
          }}
        />
        <label
          className={`radio__label ${labelClassName ? labelClassName : ""}`}
          htmlFor={label}
        >
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
