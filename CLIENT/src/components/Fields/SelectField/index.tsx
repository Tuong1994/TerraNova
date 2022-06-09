import React from "react";
import * as customHooks from "../../../hooks";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { FieldProps } from "formik";
import utils from "../../../utils";
import OptionList from "./OptionList";

interface IOption {
  label?: string;
  value?: any;
}

interface SelectFieldProps extends FieldProps {
  label?: string;
  option?: IOption[];
  isReset?: boolean;
  defaultValue?: any;
  placeholder?: string;
  groupClassName?: string;
  optionClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  fieldClassName?: string;
  iconClassName?: string;
  selectClassName?: string;
  onChange?(item: any): void;
}

const SelectField: React.FunctionComponent<SelectFieldProps> = (props) => {
  const {
    form,
    field,
    label,
    option,
    isReset,
    defaultValue,
    placeholder,
    groupClassName,
    optionClassName,
    labelClassName,
    inputClassName,
    fieldClassName,
    iconClassName,
    selectClassName,
    onChange,
  } = props;

  const { value, name } = field;
  const { touched, errors, setFieldValue } = form;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const [isDropdown, setIsDropdown] = React.useState<boolean>(false);
  const [newValue, setNewValue] = React.useState<any>();
  const [freeText, setFreeText] = React.useState<string>("");
  const controlRef = React.useRef(null);

  customHooks.useClickOutSide(controlRef, setIsDropdown);

  const langs = utils.changeLang(lang);

  // Reset value by lang
  React.useEffect(() => {
    if (isReset) {
      setNewValue("");
    }
  }, [lang, isReset]);

  // Check value is not empty => Set default value
  React.useEffect(() => {
    if (value !== "" || utils.checkKeyNumberType(value)) {
      option?.map((item: any) => {
        if (item.value === value?.value) {
          return setNewValue(item.label);
        }
      });
    }
  }, [lang, value]);

  // Set label for value
  const getValue = (item: any) => {
    setNewValue(item);
  };

  // Filter options
  const filter = (options: any) => {
    if (options && options.length > 0) {
      return options.filter((item: any) => {
        return item.label?.toLowerCase().indexOf(freeText.toLowerCase()) > -1;
      });
    }
    return;
  };

  const renderValue = () => {
    if (freeText.length > 0) return freeText;
    if (newValue) return newValue;
    if (defaultValue) return defaultValue.label;
    return "";
  };

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
      {/* Input */}
      <div
        className={getClassName()}
      >
        <input
          {...field}
          type="text"
          className={`field__control ${inputClassName ? inputClassName : ""}`}
          value={renderValue() || ""}
          placeholder={placeholder || newValue ? " " : ""}
          onChange={(e) => {
            setFreeText(e.target.value);
            onChange && onChange(null);
          }}
          onClick={() => {
            setIsDropdown(!isDropdown);
          }}
        />
        {/* Icon arrow */}
        <div
          className={`field__icon ${isDropdown ? "field__icon--active" : ""} ${
            iconClassName ? iconClassName : ""
          }`}
          onClick={() => {
            setIsDropdown(!isDropdown);
          }}
        >
          <i className="fa fa-angle-down"></i>
        </div>

        {/* Label */}
        {label && (
          <div
            className={`field__label field__label--select ${
              labelClassName ? labelClassName : ""
            }`}
          >
            {label}
          </div>
        )}
      </div>
      {/* Input */}

      {/* Error message */}
      {(() => {
        if (!isDropdown) {
          return touched[name] && errors[name] ? (
            <div className="group__error">{errors[name]}</div>
          ) : null;
        }
      })()}

      {/* Options */}
      <OptionList
        name={name}
        value={value}
        option={option}
        langs={langs}
        isDropdown={isDropdown}
        optionClassName={optionClassName}
        selectClassName={selectClassName}
        filter={filter}
        getValue={getValue}
        onChange={onChange}
        setFieldValue={setFieldValue}
        setIsDropdown={setIsDropdown}
        setFreeText={setFreeText}
      />
    </div>
  );
};

export default SelectField;
