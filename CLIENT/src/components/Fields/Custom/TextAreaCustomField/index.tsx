import React from "react";

interface TextAreaCustomFieldProps {
  label?: string;
  placeholder?: string;
  name?: string;
  value?: string | number;
  cols?: number;
  rows?: number;
  icon?: React.ReactNode;
  groupClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  fieldClassName?: string;
  iconClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaCustomField: React.FunctionComponent<TextAreaCustomFieldProps> = (
  props
) => {
  const {
    label,
    placeholder,
    name,
    value,
    cols,
    rows,
    icon,
    groupClassName,
    fieldClassName,
    inputClassName,
    labelClassName,
    iconClassName,
    onChange,
  } = props;
  return (
    <div className={`form__group ${groupClassName ? groupClassName : ""}`}>
      <div className={`group__field ${fieldClassName ? fieldClassName : ""}`}>
        <textarea
          name={name}
          value={value}
          cols={cols || 10}
          rows={rows || 5}
          placeholder={placeholder}
          className={`field__control field__control--text-area ${
            inputClassName ? inputClassName : ""
          }`}
          onChange={onChange}
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

export default TextAreaCustomField;
