import React from "react";
import * as Modal from "../../../../components/Modal";
import * as FormControl from "../../../../components/Fields";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { IShipment } from "../../../../models/Shipment";
import { EShipmentActionTypes } from "../../../../redux/actionTypes/ShipmentActionTypes";
import { phoneRegex } from "../../../../configs/regex";
import ButtonLoading from "../../../../components/Loading/ButtonLoading";
import Button from "../../../../components/Button";
import actions from "../../../../configs/actions";
import utils from "../../../../utils";
import options from "../../../../configs/options";

interface ShipmentModalProps {}

const ShipmentModal: React.FunctionComponent<ShipmentModalProps> = (props) => {
  const { isShowing } = useSelector(
    (state: ReducerState) => state.ModalReducer
  );
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

  const initialValues = {
    userName: "",
    phone: "",
    email: "",
    address: "",
    ward: "",
    district: "",
    province: "",
  };

  const validationSchema = yup.object().shape({
    userName: yup.string().required(langs?.validateMessages.required),
    phone: yup
      .string()
      .matches(phoneRegex, langs?.validateMessages.required)
      .required(langs?.validateMessages.required),
    email: yup
      .string()
      .email(langs?.validateMessages.email)
      .required(langs?.validateMessages.required),
    address: yup.string().required(langs?.validateMessages.required),
    ward: yup.string().required(langs?.validateMessages.required),
    district: yup.string().required(langs?.validateMessages.required),
    province: yup.string().required(langs?.validateMessages.required),
  });

  const handleSubmit = (value: IShipment, action: any) => {
    dispatch(actions.openButtonLoading);
    setTimeout(() => {
      dispatch({
        type: EShipmentActionTypes.ADD_SHIPMENT,
        payload: value,
      });
      action.resetForm({
        values: {
          ...initialValues,
        },
      });
      dispatch(actions.closeButtonLoading);
      dispatch(actions.closeModal);
    }, 1000);
  };

  return (
    <Modal.Wrapper
      isShowing={isShowing}
      className="product-carts__shipment-modal"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          const { isValid, isSubmitting } = formikProps;
          return (
            <Form>
              <Modal.Header
                titleClassName="shipment-modal__header"
                title={langs?.productCarts.modal.shipmentTitle}
              />
              <Modal.Body className="shipment-modal__body">
                <div className="body__group">
                  <h3 className="group__title">
                    {langs?.productCarts.modal.receiver}
                  </h3>
                  <Field
                    name="userName"
                    component={FormControl.Input}
                    label={langs?.form.name}
                    placeholder=" "
                    icon={<i className="fas fa-user"></i>}
                    labelClassName="group__label"
                    inputClassName="group__input"
                    iconClassName="group__icon"
                  />
                  <Field
                    name="phone"
                    type="number"
                    component={FormControl.Input}
                    label={langs?.form.phone}
                    placeholder=" "
                    icon={<i className="fas fa-phone"></i>}
                    labelClassName="group__label"
                    inputClassName="group__input"
                    iconClassName="group__icon"
                    onKeyPress={(e: any) => {
                      if (e.type === "number") {
                        utils.checkKeyNumberType(
                          e,
                          langs?.toastMessages.error.onlyNumber
                        );
                      }
                    }}
                  />
                  <Field
                    name="email"
                    component={FormControl.Input}
                    label={langs?.form.email}
                    placeholder=" "
                    icon={<i className="fas fa-envelope"></i>}
                    labelClassName="group__label"
                    inputClassName="group__input"
                    iconClassName="group__icon"
                  />
                </div>

                <div className="body__line"></div>

                <div className="body__group">
                  <h3 className="group__title">
                    {langs?.productCarts.modal.address}
                  </h3>
                  <Field
                    name="address"
                    component={FormControl.Input}
                    label={langs?.form.address}
                    placeholder=" "
                    icon={<i className="fa-solid fa-location-dot"></i>}
                    labelClassName="group__label"
                    inputClassName="group__input"
                    iconClassName="group__icon"
                  />
                  <Field
                    name="ward"
                    component={FormControl.Input}
                    label={langs?.form.ward}
                    placeholder=" "
                    icon={<i className="fa-solid fa-location-dot"></i>}
                    labelClassName="group__label"
                    inputClassName="group__input"
                    iconClassName="group__icon"
                  />
                  <Field
                    name="district"
                    component={FormControl.Input}
                    label={langs?.form.district}
                    placeholder=" "
                    icon={<i className="fa-solid fa-location-dot"></i>}
                    labelClassName="group__label"
                    inputClassName="group__input"
                    iconClassName="group__icon"
                  />
                  <Field
                    name="province"
                    component={FormControl.Input}
                    label={langs?.form.province}
                    placeholder=" "
                    icon={<i className="fa-solid fa-location-dot"></i>}
                    labelClassName="group__label"
                    inputClassName="group__input"
                    iconClassName="group__icon"
                  />
                </div>
              </Modal.Body>
              <Modal.Footer className="shipment-modal__footer">
                {!isValid ? (
                  <Button type="button" className="button--disabled">
                    {langs?.button.submit}
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className={
                      buttonLoading
                        ? "button--submit button--loading"
                        : "button--submit"
                    }
                    isDisabled={!isValid || isSubmitting}
                  >
                    <ButtonLoading />
                    <span>{langs?.button.submit}</span>
                  </Button>
                )}
                <p className="footer__note">{langs?.productCarts.modal.note}</p>
              </Modal.Footer>
            </Form>
          );
        }}
      </Formik>
    </Modal.Wrapper>
  );
};

export default ShipmentModal;
