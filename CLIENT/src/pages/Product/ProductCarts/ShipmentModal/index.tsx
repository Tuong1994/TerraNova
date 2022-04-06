import React from "react";
import * as Modal from "../../../../components/Modal";
import * as FormControls from "../../../../components/Fields";
import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import utils from "../../../../utils";

interface ShipmentModalProps {}

const ShipmentModal: React.FunctionComponent<ShipmentModalProps> = (props) => {
  const { isShowing } = useSelector(
    (state: ReducerState) => state.ModalReducer
  );
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  const initialValues = {
    userName: "",
    address: "",
    ward: 0,
    district: 0,
    province: 0,
  };

  const handleSubmit = (value: any) => {};

  return (
    <Modal.Wrapper isShowing={isShowing} className="product-carts__shipment-modal">
      <Modal.Header title={langs?.productCarts.modal.shipmentTitle} />
      <Modal.Body className="shipment-modal__body">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {(formikProps) => {
            return (
              <Form className="body__form">
                <Field
                  name="userName"
                  component={FormControls.Input}
                  label={langs?.form.name}
                  placeholder=" "
                  labelClassName="form__label"
                  inputClassName="form__input"
                />
                <Field
                  name="address"
                  component={FormControls.Input}
                  label={langs?.form.address}
                  placeholder=" "
                  labelClassName="form__label"
                  inputClassName="form__input"
                />
                
              </Form>
            );
          }}
        </Formik>
      </Modal.Body>
    </Modal.Wrapper>
  );
};

export default ShipmentModal;
