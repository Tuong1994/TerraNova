import React from "react";
import * as Modal from "../../../../components/Modal";
import * as FormControls from "../../../../components/Fields";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ILangs } from "../../../../interfaces/lang";
import { ReducerState } from "../../../../redux/store";
import { EModalActionTypes } from "../../../../redux/actionTypes/ModalActionTypes";
import { IUser } from "../../../../models/User";
import { EShipmentActionTypes } from "../../../../redux/actionTypes/ShipmentActionTypes";
import { EShipmentType } from "../../../../models/Order";
import { EOrderActionTypes } from "../../../../redux/actionTypes/OrderActionTypes";
import { phoneRegex } from "../../../../configs/regex";
import Button from "../../../../components/Button";
import ButtonLoading from "../../../../components/Loading/ButtonLoading";
import actions from "../../../../configs/actions";
import utils from "../../../../utils";

interface OrderModalProps {
  langs: ILangs;
  shipmentType: number;
  options: any;
  handlePayment: () => void;
  setShipmentType: React.Dispatch<React.SetStateAction<number>>;
}

const OrderModal: React.FunctionComponent<OrderModalProps> = (props) => {
  const { langs, shipmentType, options, handlePayment, setShipmentType } =
    props;

  const { isOrder } = useSelector((state: ReducerState) => state.ModalReducer);
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (shipmentType === EShipmentType.delivery) {
      dispatch({
        type: EModalActionTypes.CLOSE_ORDER_MODAL,
      });
      setTimeout(() => {
        dispatch({
          type: EModalActionTypes.OPEN_SHIPMENT_MODAL,
        });
      }, 200);
    } else {
      dispatch({
        type: EShipmentActionTypes.REMOVE_SHIPMENT,
      });
    }
  }, [shipmentType]);

  const handleCloseModal = () => {
    dispatch({
      type: EModalActionTypes.CLOSE_ORDER_MODAL,
    });
  };

  const initialValues = {
    name: "",
    phone: "",
    email: "",
  };

  const validateSchema = yup.object().shape({
    name: yup.string().required(langs?.validateMessages.required),
    email: yup
      .string()
      .email(langs?.validateMessages.email)
      .required(langs?.validateMessages.required),
    phone: yup
      .string()
      .matches(phoneRegex, langs?.validateMessages.phone)
      .required(langs?.validateMessages.required),
  });

  const handleSubmit = (values: IUser, action: any) => {
    dispatch(actions.openButtonLoading);
    dispatch({
      type: EOrderActionTypes.ADD_ORDERER,
      payload: values,
    });
    setTimeout(() => {
      handlePayment();
      action.resetForm({
        values: {
          ...initialValues,
        },
      });
      dispatch({
        type: EModalActionTypes.CLOSE_ORDER_MODAL,
      });
      dispatch(actions.closeButtonLoading);
    }, 500);
  };

  return (
    <Modal.Wrapper
      isShowing={isOrder}
      className="product-carts__order-modal"
      onHide={handleCloseModal}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          const { isValid, isSubmitting } = formikProps;
          return (
            <Form autoComplete="off">
              <Modal.Header
                title={langs?.productCarts.modal.orderTitle}
                onHide={handleCloseModal}
              />
              <Modal.Body className="order-modal__body">
                <div className="body__group">
                  <h3 className="group__title">
                    {langs?.productCarts.modal.orderer}
                  </h3>
                  <Field
                    name="name"
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
                  <Field
                    component={FormControls.Select}
                    option={options?.shipmentType}
                    defaultValue={options?.shipmentType?.find(
                      (i: any) => i.value === shipmentType
                    )}
                    selectClassName="options__item"
                    labelClassName="group__label"
                    inputClassName="group__input"
                    iconClassName="group__icon"
                    optionClassName="group__options"
                    onChange={(value: any) => {
                      setShipmentType(value);
                    }}
                  />
                </div>
              </Modal.Body>
              <Modal.Footer>
                {!isValid ? (
                  <Button type="button" className="button--disabled">
                    {langs?.button.payment}
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
                    <span>{langs?.button.payment}</span>
                  </Button>
                )}
              </Modal.Footer>
            </Form>
          );
        }}
      </Formik>
    </Modal.Wrapper>
  );
};

export default OrderModal;
