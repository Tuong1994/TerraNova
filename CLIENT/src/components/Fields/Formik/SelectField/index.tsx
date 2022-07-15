import React from "react";
import * as customHooks from "../../../../hooks";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { FieldProps } from "formik";
import OptionList from "./OptionList";
import utils from "../../../../utils";

interface IOption {
  label?: string;
  value?: any;
}

interface SelectFieldProps extends FieldProps {
  data?: any;
  total?: number;
  limits?: number;
  dataLabel?: string;
  dataValue?: string;
  label?: string;
  option?: IOption[];
  isReset?: boolean;
  isPaging?: boolean;
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
  onPrev?(): void;
  onNext?(): void;
}

const SelectField: React.FunctionComponent<SelectFieldProps> = (props) => {
  const {
    form,
    field,
    data,
    total,
    limits,
    dataLabel,
    dataValue,
    label,
    option,
    isReset,
    isPaging,
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
    onPrev,
    onNext,
  } = props;

  const { value, name } = field;
  const { touched, errors, setFieldValue } = form;

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

  // Calculate pagination
  const totalData = Math.ceil((total || 0) / (limits || 0));
  const start = ((page || 1) - 1) * (limits || 0);
  const end = start + (limits || 0);
  const optionData = list?.slice(start, end).map((d: any) => {
    return { label: d[dataLabel || 0], value: d[dataValue || 0] };
  });

  React.useEffect(() => {
    if (data && data.length > 0) {
      setList(data);
    }
  }, [data]);

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

  const getOption = () => {
    if (optionData.length > 0) {
      return optionData;
    }
    return option;
  };

  return (
    <div
      className={`form__group form__group--custom ${
        groupClassName ? groupClassName : ""
      }`}
      ref={controlRef}
    >
      {/* Input */}
      <div className={getClassName()}>
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
        option={getOption()}
        langs={langs}
        isDropdown={isDropdown}
        isLoading={dataLoading}
        isPaging={isPaging}
        totalPage={totalData}
        page={page}
        optionClassName={optionClassName}
        selectClassName={selectClassName}
        filter={filter}
        getValue={getValue}
        onChange={onChange}
        onPrev={onPrev}
        onNext={onNext}
        setFieldValue={setFieldValue}
        setIsDropdown={setIsDropdown}
        setFreeText={setFreeText}
        setPage={setPage}
      />
    </div>
  );
};

export default SelectField;
