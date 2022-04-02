import React from "react";
import { FieldProps } from "formik";

interface TextAreaFieldProps extends FieldProps {
  label?: string;
  placeholder?: string;
  cols?: number;
  rows?: number;
  icon?: React.ReactNode;
  groupClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  fieldClassName?: string;
  iconClassName?: string;
}

const TextAreaField: React.FunctionComponent<TextAreaFieldProps> = (props) => {
  const {
    form,
    field,
    label,
    placeholder,
    cols,
    rows,
    icon,
    groupClassName,
    fieldClassName,
    inputClassName,
    labelClassName,
    iconClassName,
  } = props;
  const { name } = field;
  const { touched, errors } = form;
  return (
    <div className={`form__group ${groupClassName}`}>
      <div
        className={
          touched[name] && errors[name]
            ? `group__field group__field--invalid ${fieldClassName}`
            : `group__field ${fieldClassName}`
        }
      >
        <textarea
          {...field}
          cols={cols || 10}
          rows={rows || 5}
          placeholder={placeholder}
          className={`field__control ${inputClassName}`}
        />
        {label && (
          <label htmlFor={name} className={`field__label ${labelClassName}`}>
            {label}
          </label>
        )}
        {touched[name] && errors[name] ? (
          <div className="field__error-icon">
            <i className="fas fa-exclamation-triangle"></i>
          </div>
        ) : (
          icon && <div className={`field__icon ${iconClassName}`}>{icon}</div>
        )}
      </div>
      {touched[name] && errors[name] ? (
        <div className="group__error">{errors[name]}</div>
      ) : null}
    </div>
  );
};

export default TextAreaField;
