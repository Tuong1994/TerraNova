import React from "react";
import * as FormControl from "../Fields";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
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

  const options = utils.getOptionByLang(lang);

  return (
    <div className="filter">
      <div className="filter__item">
        <FormControl.Search
          groupClassName="item__search"
          fieldClassName="search__input"
          onChange={(e) => {
            const value = e.target.value;
            onSearch && onSearch(value)
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
          }}
        />
      </div>
    </div>
  );
};

export default Filter;
