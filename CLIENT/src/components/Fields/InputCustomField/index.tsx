import React from "react";

interface InputFieldCustomProps {
  label?: string;
  placeholder?: string;
  name?: string;
  value?: string | number;
  type?: string;
  icon?: React.ReactNode;
  groupClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  fieldClassName?: string;
  iconClassName?: string;
  onKeyPress?: (e: any) => void;
  onBlur?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFieldCustom: React.FunctionComponent<InputFieldCustomProps> = (props) => {
  const {
    label,
    placeholder,
    name,
    value,
    type,
    icon,
    groupClassName,
    fieldClassName,
    inputClassName,
    labelClassName,
    iconClassName,
    onKeyPress,
    onBlur,
    onChange,
  } = props;

  return (
    <div className={`form__group ${groupClassName ? groupClassName : ""}`}>
      <div className={`group__field ${fieldClassName ? fieldClassName : ""}`}>
        <input
          value={value}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`field__control ${!icon && "w-100"} ${
            inputClassName ? inputClassName : ""
          }`}
          onBlur={onBlur}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />

        {label && (
          <label
            htmlFor={name}
            className={`field__label ${labelClassName ? labelClassName : ""}`}
          >
            {label}
          </label>
        )}

        {icon && (
          <div className={`field__icon ${iconClassName ? iconClassName : ""}`}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputFieldCustom;
