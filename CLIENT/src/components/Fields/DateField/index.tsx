import React from "react";
import * as customHooks from "../../../hooks";
import { FieldProps } from "formik";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import Calendar from "./Calander";
import moment from "moment";
import utils from "../../../utils";

interface DateFieldProps extends FieldProps {
  label?: string;
  placeholder?: string;
  enableTime?: boolean;
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
    enableTime,
    groupClassName,
    labelClassName,
    fieldClassName,
  } = props;

  const { name, value } = field;
  const { touched, errors, setFieldValue } = form;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const [date, setDate] = React.useState<any>(moment());
  const [defaultDate, setDefaultDate] = React.useState<string>("");
  const [isDropdown, setIsDropdown] = React.useState<boolean>(false);

  const controlRef = React.useRef<any>(null);

  customHooks.useClickOutSide(controlRef, setIsDropdown);

  const langs = utils.changeLang(lang);

  React.useEffect(() => {
    setFieldValue(name, date.toISOString())
  }, [])

  React.useEffect(() => {
    if (value) {
      setDate(moment(value));
      setDefaultDate(moment(value).format("DD/MM/YYYY"));
    }
  }, [value, defaultDate]);

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

  const getValue = () => {
    if (defaultDate) return defaultDate;
    if (date) return date.format("DD/MM/YYYY");
    return "";
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
          value={getValue()}
          placeholder={placeholder || " "}
          type="text"
          disabled={true}
          className="field__control"
        />
        <label
          className={`field__label ${labelClassName ? labelClassName : ""}`}
        >
          {label || langs?.form.date}
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
        value={date}
        name={name}
        isDropdown={isDropdown}
        enableTime={enableTime}
        setValue={setDate}
        setDefaultValue={setDefaultDate}
        setFieldValue={setFieldValue}
      />
    </div>
  );
};

export default DateField;
