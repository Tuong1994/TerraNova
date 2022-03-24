import React from "react";
import { useDispatch } from "react-redux";
import { EPaginationActionTypes } from "../../redux/actionTypes/PaginationActionTypes";
import { ELoadingActionTypes } from "../../redux/actionTypes/LoadingActionTypes";

interface IPaginationProps {
  perPage: any;
  total: any;
}

const Pagination: React.FunctionComponent<IPaginationProps> = (props) => {
  const { perPage, total } = props;
  const pageNumber: number[] = [];
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = React.useState(0);

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumber.push(i);
  }

  const handleClick = (index: number, page: number) => {
    setActiveButton(index);
    dispatch({
      type: EPaginationActionTypes.CHANGE_PAGE,
      payload: page,
    });
    dispatch({
      type: ELoadingActionTypes.OPEN_DATA_LOADING,
    })
    setTimeout(() => {
      dispatch({
        type: ELoadingActionTypes.CLOSE_DATA_LOADING
      })
    }, 1000);
  };

  const renderPageNumber = () => {
    if (pageNumber.length > 1) {
      return pageNumber.map((page, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              handleClick(index, page);
            }}
            className={
              activeButton === index
                ? "button--page button--active"
                : "button--page"
            }
          >
            {page}
          </div>
        );
      });
    } else {
      return null;
    }
  };
  return <div className="pagination">{renderPageNumber()}</div>;
};

export default Pagination;
