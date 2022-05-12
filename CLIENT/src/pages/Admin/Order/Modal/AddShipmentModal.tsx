import React from "react";
import * as yup from "yup";
import * as Modal from "../../../../components/Modal";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Formik, Form, Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { EModalActionTypes } from "../../../../redux/actionTypes/ModalActionTypes";
import { IOptionsLang } from "../../../../configs/options";
import { EProvince, IShipment } from "../../../../models/Shipment";
import { phoneRegex } from "../../../../configs/regex";
import { EShipmentActionTypes } from "../../../../redux/actionTypes/ShipmentActionTypes";
import { toast } from "react-toastify";
import actions from "../../../../configs/actions";
import Button from "../../../../components/Button";
import ButtonLoading from "../../../../components/Loading/ButtonLoading";
import utils from "../../../../utils";

interface AddShipmentModalProps {
  langs: ILangs;
  options: IOptionsLang;
  shipment: IShipment;
  isReset: boolean;
  setShipmentType: React.Dispatch<React.SetStateAction<number>>;
  setIsReset: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddShipmentModal: React.FunctionComponent<AddShipmentModalProps> = (
  props
) => {
  const { langs, options, isReset, shipment, setShipmentType, setIsReset } =
    props;

  const { isAddShipment } = useSelector(
    (state: ReducerState) => state.ModalReducer
  );
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const [province, setProvince] = React.useState<number>(0);

  const dispatch = useDispatch();

  const handleHideModal = () => {
    if (isReset) {
      setIsReset(false);
    }
    dispatch({
      type: EModalActionTypes.CLOSE_ADD_SHIPMENT_MODAL,
    });
    // Check if shipment type is delivery => not reset shipment type
    if (utils.checkObjectEmpty(shipment) === true) {
      setIsReset(false);
    } else if (utils.checkObjectEmpty(shipment === false)) {
      setShipmentType(0);
      setIsReset(true);
    }
  };

  const getOptionsByProvince = () => {
    switch (province) {
      case EProvince.HCM: {
        return options?.HCM;
      }
      case EProvince.HN: {
        return options?.HN;
      }
    }
  };

  const initialValues = {
    userName: "",
    phone: "",
    email: "",
    address: "",
    ward: 0,
    district: 0,
    province: 0,
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
  });

  const handleSubmit = (values: any, action: any) => {
    let isValid = false;

    if (values.province === 0) {
      toast.error(langs?.toastMessages.error.province);
      isValid = true;
    } else if (values.district === 0) {
      toast.error(langs?.toastMessages.error.district);
      isValid = true;
    } else if (values.ward === 0) {
      toast.error(langs?.toastMessages.error.ward);
      isValid = true;
    } else {
      isValid = false;
    }

    if (!isValid) {
      dispatch(actions.openButtonLoading);
      setTimeout(() => {
        dispatch({
          type: EShipmentActionTypes.ADD_SHIPMENT,
          payload: values,
        });
        dispatch(actions.closeButtonLoading);
        action.resetForm({
          values: {
            ...initialValues,
          },
        });
        handleHideModal();
      }, 1000);
    }
  };

  return (
    <Modal.Wrapper
      isShowing={isAddShipment}
      onHide={handleHideModal}
      className="add-shipment-modal"
    >
      <Modal.Header
        title={langs?.admin.order.modal.title_3}
        onHide={handleHideModal}
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          const { isValid, isSubmitting } = formikProps;
          return (
            <Form autoComplete="off">
              <Modal.Body className="add-shipment-modal__body">
                <Card.Wrapper className="body__card">
                  <div className="card__group">
                    <h3 className="group__title">
                      {langs?.productCarts.modal.receiver}
                    </h3>
                    <Field
                      name="userName"
                      placeholder=" "
                      label={langs?.form.name}
                      component={FormControl.Input}
                      groupClassName="group__control"
                    />
                    <Field
                      name="phone"
                      type="number"
                      placeholder=" "
                      label={langs?.form.phone}
                      component={FormControl.Input}
                      groupClassName="group__control"
                      onKeyPress={(e: React.ChangeEvent<HTMLInputElement>) =>
                        utils.checkKeyNumberType(
                          e,
                          langs?.toastMessages.error.onlyNumber
                        )
                      }
                    />
                    <Field
                      name="email"
                      placeholder=" "
                      label={langs?.form.email}
                      component={FormControl.Input}
                      groupClassName="group__control"
                    />
                  </div>

                  <div className="card__group">
                    <h3 className="group__title">
                      {langs?.productCarts.modal.address}
                    </h3>
                    <Field
                      name="province"
                      placeholder=" "
                      isReset={isReset}
                      label={langs?.form.province}
                      option={options?.province}
                      component={FormControl.Select}
                      groupClassName="group__control"
                      onChange={(value: any) => {
                        setProvince(value);
                      }}
                    />
                    <Field
                      name="district"
                      placeholder=" "
                      isReset={isReset}
                      label={langs?.form.district}
                      option={getOptionsByProvince()?.district}
                      component={FormControl.Select}
                      groupClassName="group__control"
                    />
                    <Field
                      name="ward"
                      placeholder=" "
                      isReset={isReset}
                      label={langs?.form.ward}
                      option={getOptionsByProvince()?.ward}
                      component={FormControl.Select}
                      groupClassName="group__control"
                    />
                    <Field
                      name="address"
                      placeholder=" "
                      label={langs?.form.address}
                      component={FormControl.Input}
                      groupClassName="group__control"
                    />
                  </div>
                </Card.Wrapper>
              </Modal.Body>

              <Modal.Footer className="add-shipment-modal__footer">
                {!isValid ? (
                  <Button type="button" className="button--disabled">
                    {langs?.button.save}
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className={`button--submit ${
                      buttonLoading ? "button--disabled" : ""
                    }`}
                    isDisabled={!isValid || isSubmitting}
                  >
                    <ButtonLoading />
                    <span>{langs?.button.save}</span>
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

export default AddShipmentModal;
