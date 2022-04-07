import React from "react";
import { useDispatch } from "react-redux";
import { EModalActionTypes } from "../../redux/actionTypes/ModalActionTypes";

interface IModalHeaderProps {
  title?: string;
  className?: string;
  titleClassName?: string;
}

const ModalHeader: React.FunctionComponent<IModalHeaderProps> = (props) => {
  const { title, className, titleClassName } = props;
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch({
      type: EModalActionTypes.CLOSE_MODAL,
    });
  };

  return (
    <div className={`modal__header ${className ? className : ""}`}>
      <div className={`header__title ${titleClassName ? titleClassName : ""}`}>{title}</div>
      <div className="button--delete header__button" onClick={handleCloseModal}>
        <i className="fa fa-times"></i>
      </div>
    </div>
  );
};

export default ModalHeader;
