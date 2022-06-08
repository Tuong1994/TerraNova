import React from "react";
import * as Modal from "../../components/Modal";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import Button from "../../components/Button";
import utils from "../../utils";

interface RemoveModalProps {
  show: boolean;
  title?: string;
  content?: () => React.ReactNode | string;
  onHide: () => void;
  onRemove: () => void;
}

const RemoveModal: React.FunctionComponent<RemoveModalProps> = (props) => {
  const { show, title, content, onHide, onRemove } = props;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  return (
    <Modal.Wrapper
      isShowing={show}
      onHide={onHide}
      className="remove-modal"
    >
      <Modal.Header title={title} onHide={onHide} />

      <Modal.Body className="remove-modal__body">
        <div className="body__icon">
          <i className="fas fa-exclamation-circle"></i>
        </div>
        <div className="body__content">{content && content()}</div>
      </Modal.Body>

      <Modal.Footer className="remove-modal__footer">
        <Button
          className="button--delete footer__action"
          onClick={onHide}
        >
          {langs?.button.no}
        </Button>
        <Button className="button--add footer__action" onClick={onRemove}>
          {langs?.button.yes}
        </Button>
      </Modal.Footer>
    </Modal.Wrapper>
  );
};

export default RemoveModal;
