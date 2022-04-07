import React from "react";
import { FieldProps } from "formik";

interface InputFieldProps extends FieldProps {
  label?: string;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
  groupClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  fieldClassName?: string;
  iconClassName?: string;
  onKeyPress?: (e: any) => void;
}

const InputField: React.FunctionComponent<InputFieldProps> = (props) => {
  const {
    form,
    field,
    label,
    placeholder,
    type,
    icon,
    groupClassName,
    fieldClassName,
    inputClassName,
    labelClassName,
    iconClassName,
    onKeyPress,
  } = props;
  const { name } = field;
  const { touched, errors } = form;
  return (
    <div className={`form__group ${groupClassName ? groupClassName : ""}`}>
      <div
        className={
          touched[name] && errors[name]
            ? `group__field group__field--invalid ${fieldClassName ? fieldClassName : ""}`
            : `group__field ${fieldClassName ? fieldClassName : ""}`
        }
      >
        <input
          {...field}
          type={type}
          placeholder={placeholder}
          className={`field__control ${inputClassName ? inputClassName : ""}`}
          onKeyPress={onKeyPress}
        />
        {label && (
          <label htmlFor={name} className={`field__label ${labelClassName ? labelClassName : ""}`}>
            {label}
          </label>
        )}
        {touched[name] && errors[name] ? (
          <div className="field__error-icon">
            <i className="fas fa-exclamation-triangle"></i>
          </div>
        ) : (
          icon && <div className={`field__icon ${iconClassName ? iconClassName : ""}`}>{icon}</div>
        )}
      </div>
      {touched[name] && errors[name] ? (
        <div className="group__error">{errors[name]}</div>
      ) : null}
    </div>
  );
};

export default InputField;
