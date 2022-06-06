import React from "react";
import * as Modal from "../../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { ILangs } from "../../../interfaces/lang";
import { ReducerState } from "../../../redux/store";
import { EModalActionTypes } from "../../../redux/actionTypes/ModalActionTypes";
import Button from "../../../components/Button";

interface TimeOutModalProps {
  langs: ILangs;
}

const TimeOutModal: React.FunctionComponent<TimeOutModalProps> = (props) => {
  const { langs } = props;

  const { isTimeOut } = useSelector(
    (state: ReducerState) => state.ModalReducer
  );

  const dispatch = useDispatch();

  const handleHideModal = () => {
    dispatch({
      type: EModalActionTypes.CLOSE_TIMEOUT_MODAL,
    });
  };

  return (
    <Modal.Wrapper
      isShowing={isTimeOut}
      onHide={() => {}}
      className="timeout-modal"
    >
      <Modal.Body className="timeout-modal__body">
        <h3 className="body__title">{langs?.movie.bookTicket.timeOut.title}</h3>
        <p className="body__content">{langs?.movie.bookTicket.timeOut.note}</p>
      </Modal.Body>
      <Modal.Footer className="timeout-modal__footer">
        <Button
          className="button--delete footer__action"
          onClick={() => {
            window.location.reload();
            setTimeout(() => {
              handleHideModal();
            }, 500);
          }}
        >
          {langs?.movie.bookTicket.timeOut.reBook}
        </Button>
      </Modal.Footer>
    </Modal.Wrapper>
  );
};

export default TimeOutModal;
