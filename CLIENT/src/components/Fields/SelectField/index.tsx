import React from "react";
import * as customHooks from "../../../hooks";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { FieldProps } from "formik";
import utils from "../../../utils";

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
  }, [lang]);

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

  return (
    <React.Fragment>
      <div
        className={`form__group ${groupClassName ? groupClassName : ""}`}
        ref={controlRef}
      >
        {/* Input */}
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
            type="text"
            className={`field__control ${inputClassName ? inputClassName : ""}`}
            value={renderValue() || ""}
            placeholder={placeholder}
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
            className={`field__icon ${
              isDropdown ? "field__icon--active" : ""
            } ${iconClassName ? iconClassName : ""}`}
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
        {touched[name] && errors[name] ? (
          <div className="group__error">{errors[name]}</div>
        ) : null}

        {/* Options */}
        <div
          className={
            isDropdown
              ? `group__option group__option--active ${
                  optionClassName ? optionClassName : ""
                }`
              : `group__option ${optionClassName ? optionClassName : ""}`
          }
        >
          {option && option?.length > 0 ? (
            filter(option).map((item: any) => {
              return (
                <div
                  key={item.label}
                  className={
                    value?.value === item.value
                      ? `option__item option__item--selected ${
                          selectClassName ? selectClassName : ""
                        }`
                      : `option__item ${selectClassName ? selectClassName : ""}`
                  }
                  onClick={() => {
                    setFreeText("");
                    setFieldValue(name, item.value);
                    onChange && onChange(item.value);
                    getValue(item.label);
                    setIsDropdown(false);
                  }}
                >
                  {item.icon && <img src={item.icon} alt="" />}
                  <span>{item.label}</span>
                </div>
              );
            })
          ) : (
            <div className="option__nodata">{langs?.form.noOption}</div>
          )}
        </div>
        {/* Options */}
      </div>
    </React.Fragment>
  );
};

export default SelectField;
