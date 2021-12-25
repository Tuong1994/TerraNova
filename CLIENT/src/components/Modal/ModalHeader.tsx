import React from "react";
import { useDispatch } from "react-redux";
import { EModalActionTypes } from "../../redux/actionTypes/ModalActionTypes";

interface IModalHeaderProps {
  title?: string;
}

const ModalHeader: React.FunctionComponent<IModalHeaderProps> = (props) => {
  const { title } = props;
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch({
      type: EModalActionTypes.CLOSE_MODAL,
    })
  }
  return (
    <div className="modal__header">
      <div className="header__title">{title}</div>
      <div className="button--delete header__button" onClick={handleCloseModal}>
        <i className="fa fa-times"></i>
      </div>
    </div>
  );
};

export default ModalHeader;
