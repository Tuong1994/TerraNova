import React from "react";
import * as customHooks from "../../../hooks";
import { FieldProps } from "formik";
import Calendar from "./Calander";
import moment from "moment";

interface DateFieldProps extends FieldProps {
  label?: string;
  placeholder?: string;
  groupClassName?: string;
  labelClassName?: string;
  fieldClassName?: string;
}

const DateField: React.FunctionComponent<DateFieldProps> = (props) => {
  const {
    form,
    field,
    label,
    placeholder,
    groupClassName,
    labelClassName,
    fieldClassName,
  } = props;

  const { name } = field;
  const { touched, errors, setFieldValue } = form;

  const [value, setValue] = React.useState<any>(moment());
  const [isDropdown, setIsDropdown] = React.useState<boolean>(false);

  const controlRef = React.useRef<any>(null);

  customHooks.useClickOutSide(controlRef, setIsDropdown);

  React.useEffect(() => {
    if (value) {
      setFieldValue(name, value.toISOString());
    }
  }, []);

  const getClassName = () => {
    if (!isDropdown) {
      return touched[name] && errors[name]
        ? `group__field group__field--invalid ${
            fieldClassName ? fieldClassName : ""
          }`
        : `group__field ${fieldClassName ? fieldClassName : ""}`;
    } else {
      return `group__field ${fieldClassName ? fieldClassName : ""}`;
    }
  };

  return (
    <div
      className={`form__group ${groupClassName ? groupClassName : ""}`}
      ref={controlRef}
    >
      <div
        className={getClassName()}
        onClick={() => setIsDropdown(!isDropdown)}
      >
        <input
          {...field}
          value={value.format("DD/MM/YYYY")}
          placeholder={placeholder || " "}
          type="text"
          disabled={true}
          className="field__control"
        />
        <label
          className={`field__label ${labelClassName ? labelClassName : ""}`}
        >
          {label || "Date"}
        </label>
      </div>

      {(() => {
        if (!isDropdown) {
          return touched[name] && errors[name] ? (
            <div className="group__error">{errors[name]}</div>
          ) : null;
        }
      })()}

      <Calendar
        value={value}
        name={name}
        isDropdown={isDropdown}
        setValue={setValue}
        setFieldValue={setFieldValue}
      />
    </div>
  );
};

export default DateField;
