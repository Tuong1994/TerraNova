import React from "react";
import { ILangs } from "../../../interfaces/lang";

interface OptionListProps {
  name: any;
  value: any;
  option: any;
  langs: ILangs;
  isDropdown: boolean;
  optionClassName?: string;
  selectClassName?: string;
  filter: (v: any) => any;
  getValue: (v: any) => void;
  onChange?: (v: any) => void;
  setFieldValue: (n: any, v: any) => void;
  setIsDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  setFreeText: React.Dispatch<React.SetStateAction<string>>;
}

const OptionList: React.FunctionComponent<OptionListProps> = (props) => {
  const {
    name,
    value,
    option,
    langs,
    isDropdown,
    optionClassName,
    selectClassName,
    filter,
    getValue,
    onChange,
    setFieldValue,
    setIsDropdown,
    setFreeText,
  } = props;

  return (
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
  );
};

export default OptionList;
