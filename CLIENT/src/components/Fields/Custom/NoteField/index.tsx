import React from "react";

interface NoteFieldProps {
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
  onChange?:(e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const NoteField: React.FunctionComponent<NoteFieldProps> = (props) => {
  const {
    label,
    placeholder,
    cols,
    rows,
    groupClassName,
    fieldClassName,
    inputClassName,
    labelClassName,
    onChange
  } = props;
  return (
    <div className={`form__group ${groupClassName ? groupClassName : ""}`}>
      <div className={`group__field ${fieldClassName ? fieldClassName : ""}`}>
        <textarea
          cols={cols || 10}
          rows={rows || 5}
          placeholder={placeholder}
          className={`field__control ${inputClassName ? inputClassName : ""}`}
          onChange={onChange}
        />
        {label && (
          <label
            className={`field__label ${labelClassName ? labelClassName : ""}`}
          >
            {label}
          </label>
        )}
      </div>
    </div>
  );
};

export default NoteField;
