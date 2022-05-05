import React from "react";
import * as FormControl from "../Fields";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import { EPaginationActionTypes } from "../../redux/actionTypes/PaginationActionTypes";
import utils from "../../utils";

interface FilterProps {
  defaultSortValue?: number;
  defaultFilterValue?: string;
  filterOptions?: any;
  onSort?: (v: number) => void;
  onFilter?: (v: string) => void;
  onSearch?: (v: string) => void;
}

const Filter: React.FunctionComponent<FilterProps> = (props) => {
  const {
    defaultFilterValue,
    defaultSortValue,
    filterOptions,
    onSort,
    onFilter,
    onSearch,
  } = props;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const dispatch = useDispatch();

  const options = utils.getOptionByLang(lang);

  const handleResetPage = () => {
    dispatch({
      type: EPaginationActionTypes.CHANGE_PAGE,
      payload: 1,
    });
  };

  return (
    <div className="filter">
      <div className="filter__item">
        <FormControl.Search
          groupClassName="item__search"
          fieldClassName="search__input"
          onChange={(e) => {
            const value = e.target.value;
            onSearch && onSearch(value);
            handleResetPage();
          }}
        />
      </div>
      <div className="filter__item">
        <FormControl.SelectCustom
          id="value"
          name="label"
          groupClassName="item__select"
          option={filterOptions}
          value={filterOptions?.find(
            (i: any) => i.value === defaultFilterValue
          )}
          onChange={(value: any) => {
            onFilter && onFilter(value);
            handleResetPage();
          }}
        />
      </div>
      <div className="filter__item">
        <FormControl.SelectCustom
          id="value"
          name="label"
          groupClassName="item__select"
          option={options?.sortBy}
          value={options?.sortBy.find((i) => i.value === defaultSortValue)}
          onChange={(value: any) => {
            onSort && onSort(value);
            handleResetPage();
          }}
        />
      </div>
    </div>
  );
};

export default Filter;
