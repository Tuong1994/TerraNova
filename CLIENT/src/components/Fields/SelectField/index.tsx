import React from "react";
import { FieldProps } from "formik";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import utils from "../../../utils";

interface IOption {
  label?: string;
  value?: string | number;
}

interface SelectFieldProps extends FieldProps {
  option?: IOption[];
  label?: string;
  placeholder?: string;
  groupClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  fieldClassName?: string;
  iconClassName?: string;
  selectClassName?: string;
}

const SelectField: React.FunctionComponent<SelectFieldProps> = (props) => {
  const {
    form,
    field,
    option,
    label,
    placeholder,
    groupClassName,
    fieldClassName,
    inputClassName,
    labelClassName,
    selectClassName,
  } = props;
  const { name } = field;
  const { touched, errors } = form;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  return (
    <div className={`form__group ${groupClassName ? groupClassName : ""}`}>
      <div
        className={
          touched[name] && errors[name]
            ? `group__field group__field--invalid ${
                fieldClassName ? fieldClassName : ""
              }`
            : `group__field ${fieldClassName ? fieldClassName : ""}`
        }
      >
        <select
          {...field}
          placeholder={placeholder}
          className={`field__control field__control--select ${
            inputClassName ? inputClassName : ""
          }`}
        >
          {option && option.length > 0 ? (
            <React.Fragment>
              <option
                className={`select__item ${
                  selectClassName ? selectClassName : ""
                }`}
              >
                Select
              </option>

              {option.map((item) => {
                return (
                  <option
                    className={`select__item ${
                      selectClassName ? selectClassName : ""
                    }`}
                    value={item.value}
                  >
                    {item.label}
                  </option>
                );
              })}
            </React.Fragment>
          ) : (
            <option
              className={`select__item ${
                selectClassName ? selectClassName : ""
              }`}
            >
              {langs?.form.noOption}
            </option>
          )}
        </select>
      </div>
      {touched[name] && errors[name] ? (
        <div className="group__error">{errors[name]}</div>
      ) : null}
    </div>
  );
};

export default SelectField;
