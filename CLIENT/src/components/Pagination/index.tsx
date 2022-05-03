import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { EPaginationActionTypes } from "../../redux/actionTypes/PaginationActionTypes";
import { ReducerState } from "../../redux/store";
import actions from "../../configs/actions";
import utils from "../../utils";

interface IPaginationProps {
  perPage: any;
  total: any;
  data?: any;
  isShowContent?: boolean;
  className?: string;
}

const Pagination: React.FunctionComponent<IPaginationProps> = (props) => {
  const { perPage, total, data, isShowContent, className } = props;

  const { page } = useSelector(
    (state: ReducerState) => state.PaginationReducer
  );
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const [pageNumberLimit] = React.useState<number>(3);
  const [minPageNumber, setMinPageNumber] = React.useState<number>(0);
  const [maxPageNumber, setMaxPageNumber] = React.useState<number>(3);
  const [start, setStart] = React.useState<number>(0);
  const [end, setEnd] = React.useState<number>(0);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

  const pageNumber: number[] = [];

  React.useEffect(() => {
    setStart((page - 1) * perPage + 1);
  }, [page, perPage]);

  React.useEffect(() => {
    setEnd(start + parseInt(perPage));
  }, [start]);

  // Calculate page list
  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumber.push(i);
  }

  // Loading data when change page
  const handleDataLoading = () => {
    dispatch(actions.openDataLoading);
    if (utils.checkObjectEmpty(data) || data?.length > 0) {
      setTimeout(() => {
        dispatch(actions.closeDataLoading);
      }, 4000);
    }
    setTimeout(() => {
      dispatch(actions.closeDataLoading);
    }, 1000);
  };

  // Hanlde click to change page
  const handleChangePage = (page: number) => {
    handleDataLoading();
    dispatch({
      type: EPaginationActionTypes.CHANGE_PAGE,
      payload: page,
    });
  };

  // Handle click to preve page
  const handlePrevPage = () => {
    handleDataLoading();
    dispatch({
      type: EPaginationActionTypes.CHANGE_PAGE,
      payload: page - 1,
    });
    if ((page - 1) % pageNumberLimit == 0) {
      setMaxPageNumber(maxPageNumber - pageNumberLimit);
      setMinPageNumber(minPageNumber - pageNumberLimit);
    }
  };

  // Handle click to next page
  const handleNextPage = () => {
    handleDataLoading();
    dispatch({
      type: EPaginationActionTypes.CHANGE_PAGE,
      payload: page + 1,
    });
    if (page + 1 > maxPageNumber) {
      setMaxPageNumber(maxPageNumber + pageNumberLimit);
      setMinPageNumber(minPageNumber + pageNumberLimit);
    }
  };

  // Render page number list
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

  // Right dots button
  let pageIncrementBtn: React.ReactNode | null = null;
  if (pageNumber.length > maxPageNumber) {
    pageIncrementBtn = (
      <div onClick={handleNextPage} className="button--page">
        ...
      </div>
    );
  }

  // Left dots button
  let pageDecrementBtn: React.ReactNode | null = null;
  if (pageNumber.length > maxPageNumber) {
    pageDecrementBtn = (
      <div onClick={handlePrevPage} className="button--page">
        ...
      </div>
    );
  }

  // Render result content
  const renderContent = () => {
    return (
      <p>
        {langs?.pagination.showing}{" "}
        <span>{end == total ? start + 1 : start}</span> <span>-</span>{" "}
        <span>{end <= total ? end : total - end + start + 10}</span>{" "}
        <span>{langs?.pagination.of}</span> <span>{total}</span>{" "}
        <span>{langs?.pagination.results}</span>
      </p>
    );
  };

  return (
    <div className={`pagination ${className ? className : ""}`}>
      <div className="pagination__content">
        {isShowContent ? renderContent() : ""}
      </div>

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
