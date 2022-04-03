import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { EPaginationActionTypes } from "../../redux/actionTypes/PaginationActionTypes";
import { ELoadingActionTypes } from "../../redux/actionTypes/LoadingActionTypes";
import { ReducerState } from "../../redux/store";
import utils from "../../utils";

interface IPaginationProps {
  perPage: any;
  total: any;
}

const Pagination: React.FunctionComponent<IPaginationProps> = (props) => {
  const { perPage, total } = props;

  const { page } = useSelector(
    (state: ReducerState) => state.PaginationReducer
  );
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const [pageNumberLimit, setPageNumberLimit] = React.useState<number>(5);
  const [minPageNumber, setMinPageNumber] = React.useState<number>(0);
  const [maxPageNumber, setMaxPageNumber] = React.useState<number>(5);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

  const pageNumber: number[] = [];
  const start = (page - 1) * perPage + 1;
  const end = start + parseInt(perPage);

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumber.push(i);
  }

  const handleChangePage = (page: number) => {
    dispatch({
      type: EPaginationActionTypes.CHANGE_PAGE,
      payload: page,
    });
    dispatch({
      type: ELoadingActionTypes.OPEN_DATA_LOADING,
    });
    setTimeout(() => {
      dispatch({
        type: ELoadingActionTypes.CLOSE_DATA_LOADING,
      });
    }, 1000);
  };

  const handlePrevPage = () => {
    dispatch({
      type: EPaginationActionTypes.CHANGE_PAGE,
      payload: page - 1,
    });
    if ((page - 1) % pageNumberLimit == 0) {
      setMaxPageNumber(maxPageNumber - pageNumberLimit);
      setMinPageNumber(minPageNumber - pageNumberLimit);
    }
  };

  const handleNextPage = () => {
    dispatch({
      type: EPaginationActionTypes.CHANGE_PAGE,
      payload: page + 1,
    });
    if (page + 1 > maxPageNumber) {
      setMaxPageNumber(maxPageNumber + pageNumberLimit);
      setMinPageNumber(minPageNumber + pageNumberLimit);
    }
  };

  const renderPageNumber = () => {
    if (pageNumber.length > 1) {
      return pageNumber.map((i, index) => {
        if (i < maxPageNumber + 1 && i > minPageNumber) {
          return (
            <div
              key={index}
              onClick={() => {
                handleChangePage(i);
              }}
              className={
                page == i ? "button--page button--active" : "button--page"
              }
            >
              {i}
            </div>
          );
        } else {
          return null;
        }
      });
    } else {
      return null;
    }
  };

  const renderContent = () => {
    return (
      <p>
        {langs?.pagination.showing} {start} {end <= total && "-"}{" "}
        {end <= total ? end : null} {langs?.pagination.of} {total}{" "}
        {langs?.pagination.results}
      </p>
    );
  };


  let pageIncrementBtn: React.ReactNode | null = null;
  if (pageNumber.length > maxPageNumber) {
    pageIncrementBtn = (
      <div onClick={handleNextPage} className="button--page">
        ...
      </div>
    );
  }

  let pageDecrementBtn: React.ReactNode | null = null;
  if (pageNumber.length < maxPageNumber) {
    pageDecrementBtn = (
      <div onClick={handlePrevPage} className="button--page">
        ...
      </div>
    );
  }

  return (
    <div className="pagination">
      <div className="pagination__content">{renderContent()}</div>
      {total > 10 && (
        <div className="pagination__button">
          {/* Prev Btn */}
          <div
            className={`button__prev ${page === 1 ? "button__disabled" : ""}`}
            onClick={handlePrevPage}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </div>
           {/* Prev Btn */}

          {pageDecrementBtn} {/* Left dots button */}

          {renderPageNumber()}

          {pageIncrementBtn} {/* Right dots button */}

           {/* Next Btn */}
          <div
            className={`button__next ${
              page >= pageNumber.length ? "button__disabled" : ""
            }`}
            onClick={handleNextPage}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          {/* Next Btn */}
        </div>
      )}
    </div>
  );
};

export default Pagination;
