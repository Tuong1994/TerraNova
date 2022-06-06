import React from "react";
import * as Modal from "../Modal";
import * as Card from "../Card";
import * as FormControl from "../Fields";
import { useDispatch, useSelector } from "react-redux";
import { ILangs } from "../../interfaces/lang";
import { ReducerState } from "../../redux/store";
import { EModalActionTypes } from "../../redux/actionTypes/ModalActionTypes";
import RateStar from "./Star";
import Button from "../Button";
import ButtonLoading from "../Loading/ButtonLoading";

interface RateModalProps {
  langs: ILangs;
  title: string;
  onSubmit: () => void;
  setRatePoint: React.Dispatch<React.SetStateAction<number>>;
  setRateNote: React.Dispatch<React.SetStateAction<string>>;
}

const RateModal: React.FunctionComponent<RateModalProps> = (props) => {
  const { title, langs, onSubmit, setRateNote, setRatePoint } = props;

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
      className="rate-modal"
    >
      <Modal.Header
        title={title}
        onHide={handleHideModal}
      />
      <Modal.Body className="rate-modal__body">
        <Card.Wrapper className="body__wrapper">
          <RateStar
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
