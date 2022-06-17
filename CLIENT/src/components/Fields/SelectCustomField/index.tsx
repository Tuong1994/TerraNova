import React from "react";
import * as customHooks from "../../../hooks";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import utils from "../../../utils";
import OptionList from "./OptionList";

interface SelectCustomFieldProps {
  id?: any;
  name?: any;
  label?: string;
  value?: any;
  option?: any;
  error?: string;
  defaultValue?: any;
  isPaging?: boolean;
  isReset?: boolean;
  placeholder?: string;
  groupClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  fieldClassName?: string;
  iconClassName?: string;
  totalPage?: number;
  selectedItems?: any;
  onChange?(item: any): void;
  onPrev?(): void;
  onNext?(): void;
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
    defaultValue,
    isPaging,
    isReset,
    placeholder,
    groupClassName,
    labelClassName,
    inputClassName,
    fieldClassName,
    iconClassName,
    totalPage,
    selectedItems,
    onChange,
  } = props;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { page } = useSelector(
    (state: ReducerState) => state.PaginationReducer
  );

  const [isDropdown, setIsDropdown] = React.useState<boolean>(false);
  const [newValue, setNewValue] = React.useState<any>();
  const [freeText, setFreeText] = React.useState<string>("");
  const [isSelected, setIsSelected] = React.useState<number>(-1);
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
    if (value !== "" || utils.checkObjectEmpty(value)) {
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
    if (defaultValue) return defaultValue.label || defaultValue;
    return "";
  };

  return (
    <React.Fragment>
      <div
        className={`form__group form__group--custom ${
          groupClassName ? groupClassName : ""
        }`}
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

        {error && <div className="group__error">{error}</div>}

        {/* Options */}
        <OptionList
          id={id}
          name={name}
          value={value}
          option={option}
          isPaging={isPaging}
          isDropdown={isDropdown}
          isSelected={isSelected}
          langs={langs}
          page={page}
          totalPage={totalPage}
          filter={filter}
          onChange={onChange}
          getValue={getValue}
          setIsDropdown={setIsDropdown}
          setFreeText={setFreeText}
        />
        {/* Options */}
      </div>
    </React.Fragment>
  );
};

export default SelectCustomField;
