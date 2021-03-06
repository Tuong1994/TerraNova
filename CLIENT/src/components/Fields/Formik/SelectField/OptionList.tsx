import React from "react";
import { useDispatch } from "react-redux";
import actions from "../../../../configs/actions";
import { ILangs } from "../../../../interfaces/lang";
import DataLoading from "../../../Loading/DataLoading";

interface OptionListProps {
  name: any;
  value: any;
  option: any;
  langs: ILangs;
  isDropdown: boolean;
  isLoading?: boolean;
  isPaging?: boolean;
  totalPage?: number;
  page?: number;
  optionClassName?: string;
  selectClassName?: string;
  filter: (v: any) => any;
  getValue: (v: any) => void;
  onChange?: (v: any) => void;
  onPrev?: () => void;
  onNext?: () => void;
  setFieldValue: (n: any, v: any) => void;
  setIsDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  setFreeText: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const OptionList: React.FunctionComponent<OptionListProps> = (props) => {
  const {
    name,
    value,
    option,
    langs,
    isDropdown,
    isLoading,
    isPaging,
    totalPage,
    page,
    optionClassName,
    selectClassName,
    filter,
    getValue,
    onChange,
    onPrev,
    onNext,
    setFieldValue,
    setIsDropdown,
    setFreeText,
    setPage,
  } = props;

  const dispatch = useDispatch();

  const handlePrev = () => {
    dispatch(actions.openDataLoading);
    setPage((prevValue) => prevValue - 1);
    setTimeout(() => {
      dispatch(actions.closeDataLoading);
    }, 500);
  };

  const handleNext = () => {
    dispatch(actions.openDataLoading);
    setPage((prevValue) => prevValue + 1);
    setTimeout(() => {
      dispatch(actions.closeDataLoading);
    }, 500);
  };

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
      <div
        className={`option__wrapper ${
          isLoading ? "option__wrapper--loading" : ""
        }`}
      >
        {/* Loading */}
        {(() => {
          if (isPaging) {
            return (
              <DataLoading
                className="wrapper__loading"
                spinnerClassName="loading__spinner"
              />
            );
          } else {
            return null;
          }
        })()}

        {/* Option Items */}
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

        {/* Pagination */}
        {isPaging && (totalPage || 1) > 1 ? (
        <div className="option__pagination">
          <div
            className={`button--round ${page === 1 ? "button--disabled" : ""}`}
            onClick={() => {
              if (onPrev) {
                return onPrev();
              } else {
                handlePrev();
              }
            }}
          >
            <i className="fa-solid fa-angle-left"></i>
          </div>
          <div
            className={`button--round ${
              page === totalPage ? "button--disabled" : ""
            }`}
            onClick={() => {
              if (onNext) {
                return onNext();
              } else {
                handleNext();
              }
            }}
          >
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default OptionList;
