import React from "react";
import * as Modal from "../../../../components/Modal";
import * as FormControls from "../../../../components/Fields";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { EProvince, IShipment } from "../../../../models/Shipment";
import { EShipmentActionTypes } from "../../../../redux/actionTypes/ShipmentActionTypes";
import { phoneRegex } from "../../../../configs/regex";
import { ILangs } from "../../../../interfaces/lang";
import { EModalActionTypes } from "../../../../redux/actionTypes/ModalActionTypes";
import ButtonLoading from "../../../../components/Loading/ButtonLoading";
import Button from "../../../../components/Button";
import actions from "../../../../configs/actions";
import utils from "../../../../utils";

interface ShipmentModalProps {
  lang: string;
  langs: ILangs;
}

const ShipmentModal: React.FunctionComponent<ShipmentModalProps> = (props) => {
  const { lang, langs } = props;

  const { isShipment } = useSelector(
    (state: ReducerState) => state.ModalReducer
  );
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const [provinceType, setProvinceType] = React.useState<number>(0);

  const dispatch = useDispatch();

  const options = utils.getOptionByLang(lang);

  const getOptionsByProvince = () => {
    if (provinceType === EProvince.HCM) {
      return options?.HCM;
    } else if (provinceType === EProvince.HN) {
      return options?.HN;
    }
  };

  const handleCloseModal = () => {
    dispatch({
      type: EModalActionTypes.CLOSE_SHIPMENT_MODAL,
    });
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

  const handleSubmit = (values: IShipment, action: any) => {
    dispatch(actions.openButtonLoading);
    setTimeout(() => {
      dispatch({
        type: EShipmentActionTypes.ADD_SHIPMENT,
        payload: values,
      });
      action.resetForm({
        values: {
          ...initialValues,
        },
      });
      dispatch(actions.closeButtonLoading);
      dispatch({
        type: EModalActionTypes.CLOSE_SHIPMENT_MODAL,
      });
    }, 1000);
  };

  return (
    <Modal.Wrapper
      isShowing={isShipment}
      className="product-carts__shipment-modal"
      onHide={handleCloseModal}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          const { isValid, isSubmitting } = formikProps;
          return (
            <Form autoComplete="off">
              <Modal.Header
                titleClassName="shipment-modal__header"
                title={langs?.productCarts.modal.shipmentTitle}
                onHide={handleCloseModal}
              />
              <Modal.Body className="shipment-modal__body">
                <div className="body__group">
                  <h3 className="group__title">
                    {langs?.productCarts.modal.receiver}
                  </h3>
                  <Field
                    name="userName"
                    component={FormControls.Input}
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
                    component={FormControls.Input}
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
                    component={FormControls.Input}
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
                    component={FormControls.Input}
                    label={langs?.form.address}
                    placeholder=" "
                    icon={<i className="fa-solid fa-location-dot"></i>}
                    labelClassName="group__label"
                    inputClassName="group__input"
                    iconClassName="group__icon"
                  />
                  <Field
                    name="province"
                    component={FormControls.Select}
                    label={langs?.form.province}
                    option={options?.province}
                    selectClassName="options__item"
                    labelClassName="group__label"
                    inputClassName="group__input"
                    iconClassName="group__icon"
                    optionClassName="group__options"
                    onChange={(value: any) => {
                      setProvinceType(value);
                    }}
                  />
                  <Field
                    name="ward"
                    component={FormControls.Select}
                    label={langs?.form.ward}
                    option={getOptionsByProvince()?.ward}
                    selectClassName="options__item"
                    labelClassName="group__label"
                    inputClassName="group__input"
                    iconClassName="group__icon"
                    optionClassName="group__options"
                  />

                  <Field
                    name="district"
                    component={FormControls.Select}
                    label={langs?.form.district}
                    option={getOptionsByProvince()?.district}
                    selectClassName="options__item"
                    labelClassName="group__label"
                    inputClassName="group__input"
                    iconClassName="group__icon"
                    optionClassName="group__options"
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
