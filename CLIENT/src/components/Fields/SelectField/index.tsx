import React from "react";
import * as customHooks from "../../../hooks";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";

interface ISelectFieldProps {
  id?: any;
  name?: any;
  label?: string;
  value?: any;
  option?: any;
  error?: string;
  placeholder?: string;
  groupClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  fieldClassName?: string;
  iconClassName?: string;
  onChange?(item: any): void;
}

const SelectField: React.FunctionComponent<ISelectFieldProps> = (props) => {
  const {
    id,
    name,
    label,
    value,
    option,
    error,
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

  React.useEffect(() => {
    setNewValue("");
  }, [lang]);

  React.useEffect(() => {
    if (value !== "") {
      option?.map((item: any) => {
        if (item[id] === value) {
          return setNewValue(item[name]);
        }
      });
    }
  }, []);

  const getValue = (item: any) => {
    setNewValue(item);
  };

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
            value={renderValue()}
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
                  {item[name]}
                </div>
              );
            })
          ) : (
            <div className="option__nodata">No options</div>
          )}
        </div>
        {/* Options */}
      </div>
    </React.Fragment>
  );
};

export default SelectField;
