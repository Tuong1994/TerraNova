import React from "react";
import * as Modal from "../../../../components/Modal";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { useDispatch, useSelector } from "react-redux";
import { ILangs } from "../../../../interfaces/lang";
import { ReducerState } from "../../../../redux/store";
import { EModalActionTypes } from "../../../../redux/actionTypes/ModalActionTypes";
import Rate from "../../../../components/Rate";
import Button from "../../../../components/Button";
import ButtonLoading from "../../../../components/Loading/ButtonLoading";

interface RateModalProps {
  langs: ILangs;
  onSubmit: () => void;
  setRatePoint: React.Dispatch<React.SetStateAction<number>>;
  setRateNote: React.Dispatch<React.SetStateAction<string>>;
}

const RateModal: React.FunctionComponent<RateModalProps> = (props) => {
  const { langs, onSubmit, setRateNote, setRatePoint } = props;

  const { isRate } = useSelector((state: ReducerState) => state.ModalReducer);
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const dispatch = useDispatch();

  const handleHideModal = () => {
    dispatch({
      type: EModalActionTypes.CLOSE_RATING_MODAL,
    });
  };

  return (
    <Modal.Wrapper
      isShowing={isRate}
      onHide={handleHideModal}
      className="product-rate-modal"
    >
      <Modal.Header
        title={langs?.productDetail.modal.title}
        onHide={handleHideModal}
      />
      <Modal.Body className="product-rate-modal__body">
        <Card.Wrapper className="body__wrapper">
          <Rate
            starClass="wrapper__stars"
            onChange={(value: any) => {
              setRatePoint(value);
            }}
          />
          <FormControl.TextAreaCustom
            placeholder=" "
            label={langs?.form.note}
            groupClassName="wrapper__control"
            onChange={(e) => {
              const value = e.target.value;
              setRateNote(value);
            }}
          />
        </Card.Wrapper>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="button"
          className={`button--submit ${
            buttonLoading ? "button--disabled" : ""
          }`}
          onClick={onSubmit}
        >
          <ButtonLoading />
          <span>{langs?.button.save}</span>
        </Button>
      </Modal.Footer>
    </Modal.Wrapper>
  );
};

export default RateModal;
