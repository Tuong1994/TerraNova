import React from "react";
import { useDispatch } from "react-redux";
import actions from "../../../configs/actions";
import { ILangs } from "../../../interfaces/lang";
import { EPaginationActionTypes } from "../../../redux/actionTypes/PaginationActionTypes";
import Button from "../../Button";
import DataLoading from "../../Loading/DataLoading";

interface OptionListProps {
  id: any;
  name: any;
  value: any;
  option: any;
  langs: ILangs;
  isPaging?: boolean;
  isDropdown: boolean;
  isLoading: boolean;
  page?: number;
  totalPage?: number;
  filter: (v: any) => any;
  getValue: (v: any) => void;
  onChange?: (v: any) => void;
  onPrev?: () => void;
  onNext?: () => void;
  setIsDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  setFreeText: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const OptionList: React.FunctionComponent<OptionListProps> = (props) => {
  const {
    id,
    name,
    value,
    option,
    page,
    totalPage,
    langs,
    isPaging,
    isDropdown,
    isLoading,
    filter,
    getValue,
    onChange,
    onPrev,
    onNext,
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
        isDropdown ? "group__option group__option--active" : "group__option"
      }
    >
      <div
        className={`option__wrapper ${
          isLoading ? "option__wrapper--loading" : ""
        }`}
      >
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

        {option && option?.length > 0 ? (
          filter &&
          filter(option)?.map((item: any) => {
            return (
              <div
                key={item[id]}
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
