import React from "react";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import utils from "../../../utils";

interface SearchInputProps {
  groupClassName?: string;
  inputClassName?: string;
  fieldClassName?: string;
  iconClassName?: string;
  placeholder?: string;
  value?: string;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}

const SearchInput: React.FunctionComponent<SearchInputProps> = (props) => {
  const {
    groupClassName,
    inputClassName,
    fieldClassName,
    iconClassName,
    placeholder,
    value,
    onChange,
  } = props;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  return (
    <div className={`form__group ${groupClassName ? groupClassName : ""}`}>
      <div
        className={`group__field group__search ${
          fieldClassName ? fieldClassName : ""
        }`}
      >
        <input
          type="text"
          value={value}
          placeholder={placeholder ? placeholder + "..." : langs?.form.search + "..."}
          className={`field__control ${inputClassName ? inputClassName : ""}`}
          onChange={onChange}
        />
        <div className={`field__icon ${iconClassName ? iconClassName : ""}`}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
