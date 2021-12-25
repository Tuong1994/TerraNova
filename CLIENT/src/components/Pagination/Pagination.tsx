import React from "react";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { EPaginationActionTypes } from "../../redux/actionTypes/PaginationActionTypes";

interface IPaginationProps {
  perPage: number;
  total: number;
}

const Pagination: React.FunctionComponent<IPaginationProps> = (props) => {
  const { perPage, total } = props;
  const pageNumber: number[] = [];
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = React.useState(0);

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumber.push(i);
  }

  const renderPageNumber = () => {
    return pageNumber.map((page, index) => {
      return (
        <Button
          key={index}
          activeIndex={index}
          activeButton={activeButton}
          onClick={() => {
            setActiveButton(index);
            dispatch({
              type: EPaginationActionTypes.CHANGE_PAGE,
              payload: page,
            })
          }}
          type="button"
          className="button--page"
        >
          {page}
        </Button>
      );
    });
  };
  return <div className="pagination">{renderPageNumber()}</div>;
};

export default Pagination;
