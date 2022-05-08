import React from "react";
import { ILangs } from "../../../interfaces/lang";
import Button from "../../Button";

interface OptionListProps {
  id: any;
  name: any;
  value: any;
  option: any;
  langs: ILangs;
  isPaging?: boolean;
  isDropdown: boolean;
  filter: (v: any) => any;
  getValue: (v: any) => void;
  onChange?: (v: any) => void;
  setIsDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  setFreeText: React.Dispatch<React.SetStateAction<string>>;
}

const OptionList: React.FunctionComponent<OptionListProps> = (props) => {
  const {
    id,
    name,
    value,
    option,
    langs,
    isPaging,
    isDropdown,
    filter,
    getValue,
    onChange,
    setIsDropdown,
    setFreeText,
  } = props;

  return (
    <div
      className={
        isDropdown ? "group__option group__option--active" : "group__option"
      }
    //   style={isPaging ? { maxHeight: "400px" } : {}}
    >
      <div className="option__wrapper">
        {option && option?.length > 0 ? (
          filter &&
          filter(option)?.map((item: any) => {
            return (
              <div
                key={item.label}
                className={
                  value?.value === item[id]
                    ? "wrapper__item wrapper__item--selected"
                    : "wrapper__item"
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
          <div className="wrapper__nodata">{langs?.form.noOption}</div>
        )}
      </div>
      {isPaging && (
        <div className="option__pagination">
          <Button className="button--submit">
            <i className="fa-solid fa-angle-left"></i>
          </Button>
          <Button className="button--submit">
            <i className="fa-solid fa-angle-right"></i>
          </Button>
        </div>
      )}
    </div>
  );
};

export default OptionList;
