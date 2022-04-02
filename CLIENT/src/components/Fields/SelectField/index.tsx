import React from "react";
import * as customHooks from "../../../hooks";

interface ISelectFieldProps {
  placeholder?: string;
  id?: any;
  label?: any;
  value?: any;
  option?: any;
  onChange?(item: any): void;
}

const SelectField: React.FunctionComponent<ISelectFieldProps> = (props) => {
  const { placeholder, id, label, value, option, onChange } = props;
  const [isDropdown, setIsDropdown] = React.useState<boolean>(false);
  const [newValue, setNewValue] = React.useState<any>();
  const [freeText, setFreeText] = React.useState<string>("");
  const controlRef = React.useRef(null);

  customHooks.useClickOutSide(controlRef, setIsDropdown);

  React.useEffect(() => {
    if (value !== "") {
      option?.map((item: any) => {
        if (item[id] === value) {
          return setNewValue(item[label]);
        }
      });
    }
  }, []);

  const getValue = (item: any) => {
    setNewValue(item);
  };

  const filter = (options: any) => {
    return options.filter((item: any) => {
      return item[label].toLowerCase().indexOf(freeText.toLowerCase()) > -1;
    });
  };

  const renderValue = () => {
    if (freeText.length > 0) return freeText;
    if (value) return newValue;
    return "";
  };

  return (
    <div className="form__group">
      {/* Input */}
      <div className="group__field">
        <input
          type="text"
          className="field__control"
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
        <div
          className="field__icon"
          onClick={() => {
            setIsDropdown(!isDropdown);
          }}
        >
          <i className="fa fa-angle-down"></i>
        </div>
      </div>
      {/* Input */}

      {/* Options */}
      <div
        className={
          isDropdown ? "group__option group__option--active" : "group__option"
        }
        ref={controlRef}
      >
        {option && option?.length > 0 ? (
          filter(option).map((item: any) => {
            return (
              <div
                key={option[id]}
                className={
                  value === item[id]
                    ? "option__item option__item--selected"
                    : "option__item"
                }
                onClick={() => {
                  setFreeText("");
                  onChange && onChange(item[id]);
                  getValue(item[label]);
                  setIsDropdown(false);
                }}
              >
                {item[label]}
              </div>
            );
          })
        ) : (
          <div className="option__nodata">No options</div>
        )}
      </div>
      {/* Options */}
    </div>
  );
};

export default SelectField;
