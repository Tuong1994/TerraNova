import React from "react";
import { FieldProps } from "formik";

interface IPasswordFieldProps extends FieldProps {
  label?: string;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
  groupClassName?: string;
  fieldClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  iconClassName?: string;
}

const PasswordField: React.FunctionComponent<IPasswordFieldProps> = (props) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const {
    field,
    form,
    label,
    placeholder,
    type,
    icon,
    groupClassName,
    fieldClassName,
    labelClassName,
    inputClassName,
    iconClassName,
  } = props;
  const { name } = field;
  const { touched, errors } = form;
  return (
    <div className={`form__group ${groupClassName ? groupClassName : ""}`}>
      <div
        className={
          touched[name] && errors[name]
            ? `group__field group__field--invalid ${
                fieldClassName ? fieldClassName : ""
              }`
            : `group__field ${fieldClassName ? fieldClassName : ""}`
        }
      >
        <input
          {...field}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          className={`field__control ${inputClassName ? inputClassName : ""}`}
        />
        {label && (
          <label
            className={`field__label ${labelClassName ? labelClassName : ""}`}
          >
            {label}
          </label>
        )}
        <div
          className={`field__icon ${iconClassName ? iconClassName : ""}`}
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? <i className="fas fa-eye-slash"></i> : icon}
        </div>
      </div>
      {touched[name] && errors[name] ? (
        <div className="group__error">{errors[name]}</div>
      ) : null}
    </div>
  );
};

export default PasswordField;
