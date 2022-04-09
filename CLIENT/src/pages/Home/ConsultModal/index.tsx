import React from "react";
import * as Modal from "../../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { EModalActionTypes } from "../../../redux/actionTypes/ModalActionTypes";
import utils from "../../../utils";

interface ConsultModalProps {}

const ConsultModal: React.FunctionComponent<ConsultModalProps> = (props) => {
  const { isConsult } = useSelector(
    (state: ReducerState) => state.ModalReducer
  );
  const { consultationDetail } = useSelector(
    (state: ReducerState) => state.UserReducer
  );
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

  const handleCloseModal = () => {
    dispatch({
      type: EModalActionTypes.CLOSE_CONSULT_MODAL,
    });
  };

  return (
    <Modal.Wrapper isShowing={isConsult} onHide={handleCloseModal}>
      <Modal.Header
        title={langs?.home.consultation.modal.title}
        onHide={handleCloseModal}
      />
      <Modal.Body>
        <div className="body__content">
          <span className="content">
            {langs?.home.consultation.modal.name} :
          </span>
          <span className="content">{consultationDetail?.name}</span>
        </div>
        <div className="body__content">
          <span className="content">
            {langs?.home.consultation.modal.email} :
          </span>
          <span className="content">{consultationDetail?.email}</span>
        </div>
        <div className="body__content">
          <span className="content">
            {langs?.home.consultation.modal.phone} :
          </span>
          <span className="content">{consultationDetail?.phone}</span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="footer__content">
          {langs?.home.consultation.modal.note}
        </div>
      </Modal.Footer>
    </Modal.Wrapper>
  );
};

export default ConsultModal;
