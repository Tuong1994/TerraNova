import React from "react";
import * as customHooks from "../../../hooks";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import OptionList from "./OptionList";
import utils from "../../../utils";

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
  data?: any;
  dataLabel?: string;
  dataValue?: string;
  total?: number;
  limits?: number;
  currentPage?: number;
  placeholder?: string;
  groupClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  fieldClassName?: string;
  iconClassName?: string;
  totalPage?: number;
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
    data,
    dataLabel,
    dataValue,
    total,
    limits,
    currentPage,
    placeholder,
    groupClassName,
    labelClassName,
    inputClassName,
    fieldClassName,
    iconClassName,
    totalPage,
    onNext,
    onPrev,
    onChange,
  } = props;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { dataLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const [isDropdown, setIsDropdown] = React.useState<boolean>(false);
  const [newValue, setNewValue] = React.useState<any>();
  const [freeText, setFreeText] = React.useState<string>("");
  const [page, setPage] = React.useState<number>(1);
  const [list, setList] = React.useState<any>([]);
  const controlRef = React.useRef(null);

  customHooks.useClickOutSide(controlRef, setIsDropdown);

  const langs = utils.changeLang(lang);

  const totalData = Math.ceil((total || 0) / (limits || 0));
  const start = ((page || 1) - 1) * (limits || 0);
  const end = start + (limits || 0);
  const optionData = list?.slice(start, end).map((d: any) => {
    return { label: d[dataLabel || 0], value: d[dataValue || 0] };
  });

  React.useEffect(() => {
    if(data && data.length > 0) {
      setList(data)
    }
  }, [data])

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

  const getOption = () => {
    if(optionData.length > 0) {
      return optionData
    } 
    return option
  }

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
          option={getOption()}
          isPaging={isPaging}
          isDropdown={isDropdown}
          isLoading={dataLoading}
          langs={langs}
          page={currentPage || page}
          totalPage={totalData || totalPage}
          filter={filter}
          onChange={onChange}
          getValue={getValue}
          onNext={onNext}
          onPrev={onPrev}
          setIsDropdown={setIsDropdown}
          setFreeText={setFreeText}
          setPage={setPage}
        />
        {/* Options */}
      </div>
    </React.Fragment>
  );
};

export default SelectCustomField;
