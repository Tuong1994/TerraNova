import React from "react";
import { useDispatch } from "react-redux";
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
  isSelected: number;
  page: number;
  totalPage?: number;
  filter: (v: any) => any;
  getValue: (v: any) => void;
  onChange?: (v: any) => void;
  onPrev?: () => void;
  onNext?: () => void;
  setIsDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  setFreeText: React.Dispatch<React.SetStateAction<string>>;
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
    isSelected,
    filter,
    getValue,
    onChange,
    onPrev,
    onNext,
    setIsDropdown,
    setFreeText,
  } = props;

  const dispatch = useDispatch();

  const handlePrevPage = () => {
    dispatch({
      type: EPaginationActionTypes.CHANGE_PAGE,
      payload: page - 1,
    });
  };

  const handleNextPage = () => {
    dispatch({
      type: EPaginationActionTypes.CHANGE_PAGE,
      payload: page + 1,
    });
  };

  return (
    <div
      className={
        isDropdown ? "group__option group__option--active" : "group__option"
      }
    >
      <div className="option__wrapper">
        {(() => {
          if (isPaging) {
            return <DataLoading className="wrapper__loading" spinnerClassName="loading__spinner" />;
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
                {/* {isSelected !== -1 && (
                  <span>
                    <i className="fa-solid fa-check"></i>
                  </span>
                )} */}
              </div>
            );
          })
        ) : (
          <div className="wrapper__nodata">{langs?.form.noOption}</div>
        )}
      </div>

      {isPaging && (
        <div className="option__pagination">
          <div
            className={`button--round ${page === 1 ? "button--disabled" : ""}`}
            onClick={() => {
              if(onPrev) {
                return onPrev()
              } else {
                return handlePrevPage()
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
              if(onNext) {
                return onNext()
              } else {
                handleNextPage()
              }
            }}
          >
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptionList;
