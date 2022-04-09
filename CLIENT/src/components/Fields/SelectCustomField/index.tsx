import React from "react";
import * as customHooks from "../../../hooks";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import utils from "../../../utils";

interface SelectCustomFieldProps {
  id?: any;
  name?: any;
  label?: string;
  value?: any;
  option?: any;
  error?: string;
  isReset?: boolean;
  placeholder?: string;
  groupClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  fieldClassName?: string;
  iconClassName?: string;
  onChange?(item: any): void;
}

const SelectCustomField: React.FunctionComponent<SelectCustomFieldProps> = (
  props
) => {
  const {
    id,
    name,
    label,
    value,
    option,
    error,
    isReset,
    placeholder,
    groupClassName,
    labelClassName,
    inputClassName,
    fieldClassName,
    iconClassName,
    onChange,
  } = props;

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
        if (item[id] === value?.value) {
          return setNewValue(item[name]);
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
        return item[name]?.toLowerCase().indexOf(freeText.toLowerCase()) > -1;
      });
    }
    return;
  };

  const renderValue = () => {
    if (freeText.length > 0) return freeText;
    if (value) return newValue;
    return "";
  };

  return (
    <React.Fragment>
      {/* Label */}
      {label && (
        <div
          className={`form__label--select ${
            labelClassName ? labelClassName : ""
          }`}
        >
          {label}
        </div>
      )}
      <div
        className={`form__group ${groupClassName ? groupClassName : ""}`}
        ref={controlRef}
      >
        {/* Input */}
        <div
          className={
            error
              ? `group__field group__field--invalid ${
                  fieldClassName ? fieldClassName : ""
                }`
              : `group__field ${fieldClassName ? fieldClassName : ""}`
          }
        >
          <input
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
        </div>
        {/* Input */}

        {error && <div className="group__error">{error}</div>}

        {/* Options */}
        <div
          className={
            isDropdown ? "group__option group__option--active" : "group__option"
          }
        >
          {option && option?.length > 0 ? (
            filter(option).map((item: any) => {
              return (
                <div
                  key={item.label}
                  className={
                    value?.value === item[id]
                      ? "option__item option__item--selected"
                      : "option__item"
                  }
                  onClick={() => {
                    setFreeText("");
                    onChange && onChange(item[id]);
                    getValue(item[name]);
                    setIsDropdown(false);
                  }}
                >
                  {item.icon && <img src={item.icon} alt="" />}
                  <span>{item[name]}</span>
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

export default SelectCustomField;
