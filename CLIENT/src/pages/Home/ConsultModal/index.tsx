import React from "react";
import * as Modal from "../../../components/Modal";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import utils from "../../../utils";

interface ConsultModalProps {}

const ConsultModal: React.FunctionComponent<ConsultModalProps> = (props) => {
  const { isShowing } = useSelector(
    (state: ReducerState) => state.ModalReducer
  );
  const { consultationDetail } = useSelector(
    (state: ReducerState) => state.UserReducer
  );
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  return (
    <Modal.Wrapper isShowing={isShowing}>
      <Modal.Header title={langs?.home.consultation.modal.title} />
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
