import React from "react";
import * as Modal from "../../../../components/Modal";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Formik, Form, Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { EModalActionTypes } from "../../../../redux/actionTypes/ModalActionTypes";
import Button from "../../../../components/Button";

interface AddShipmentModalProps {
  langs: ILangs;
  isReset: boolean;
  setShipmentType: React.Dispatch<React.SetStateAction<number>>;
  setIsReset: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddShipmentModal: React.FunctionComponent<AddShipmentModalProps> = (
  props
) => {
  const { langs, isReset, setShipmentType, setIsReset } = props;

  const { isAddShipment } = useSelector(
    (state: ReducerState) => state.ModalReducer
  );

  const dispatch = useDispatch();

  const handleHideModal = () => {
    if (isReset) {
      setIsReset(false);
    }
    dispatch({
      type: EModalActionTypes.CLOSE_ADD_SHIPMENT_MODAL,
    });
    setShipmentType(0);
    setIsReset(true);
  };

  const initialValues = {
    userName: "",
    phone: "",
    email: "",
    address: "",
    ward: "",
    district: "",
    province: "",
  };

  const handleSubmit = (values: any) => {};

  return (
    <Modal.Wrapper isShowing={isAddShipment} onHide={handleHideModal} className="add-shipment-modal">
      <Modal.Header
        title={langs?.admin.order.modal.title_3}
        onHide={handleHideModal}
      />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formikProps) => {
          return (
            <Form autoComplete="off">
              <Modal.Body className="add-shipment-modal__body">
                <Card.Wrapper className="body__card">
                    
                </Card.Wrapper>
              </Modal.Body>
              <Modal.Footer>
                <Button type="submit" className="button--submit">
                  {langs?.button.save}
                </Button>
              </Modal.Footer>
            </Form>
          );
        }}
      </Formik>
    </Modal.Wrapper>
  );
};

export default AddShipmentModal;
