import React from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { IUser } from "../../../models/User/IUser";
import { ELoadingActionTypes } from "../../../redux/actionTypes/LoadingActionTypes";
import { EModalActionTypes } from "../../../redux/actionTypes/ModalActionTypes";
import { EUserActionTypes } from "../../../redux/actionTypes/UserActionTypes";
import { EValidateMessage } from "../../../interfaces/validateMessage";
import { phoneRegex } from "../../../configs/regex";
import InputField from "../../../components/Fields/InputField/InputField";
import Button from "../../../components/Button";
import ButtonLoading from "../../../components/Loading/ButtonLoading";

const CarouselForm: React.FunctionComponent<{}> = (props) => {
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };
  const validationSchema = yup.object().shape({
    name: yup.string().required(EValidateMessage.required),
    email: yup
      .string()
      .email(EValidateMessage.email)
      .required(EValidateMessage.required),
    phone: yup
      .string()
      .matches(phoneRegex, EValidateMessage.phone)
      .required(EValidateMessage.required),
  });
  const handleSubmit = (values: IUser, action: any) => {
    dispatch({
      type: ELoadingActionTypes.OPEN_BUTTON_LOADING,
    });
    dispatch({
      type: EUserActionTypes.CONSULTATION,
      payload: values,
    });
    setTimeout(() => {
      action.resetForm({
        values: {
          name: "",
          email: "",
          phone: "",
        },
      });
      dispatch({
        type: EModalActionTypes.OPEN_MODAL,
      });
      dispatch({
        type: ELoadingActionTypes.CLOSE_BUTTON_LOADING,
      });
    }, 1000);
  };
  return (
    <div className="carousel__form">
      <h4 className="form__title">Consultation</h4>
      <div className="form__line"></div>
      <div className="form__wrapper">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps) => {
            const { isValid, isSubmitting } = formikProps;
            return (
              <Form>
                <Field
                  name="name"
                  component={InputField}
                  label="Name"
                  placeholder=" "
                  type="text"
                  icon={<i className="fas fa-user"></i>}
                  fieldClassName="wrapper__field"
                  inputClassName="wrapper__input"
                  labelClassName="wrapper__label"
                  iconClassName="wrapper__icon"
                />
                <Field
                  name="email"
                  component={InputField}
                  label="Email"
                  placeholder=" "
                  type="text"
                  icon={<i className="fas fa-envelope"></i>}
                  fieldClassName="wrapper__field"
                  inputClassName="wrapper__input"
                  labelClassName="wrapper__label"
                  iconClassName="wrapper__icon"
                />
                <Field
                  name="phone"
                  component={InputField}
                  label="Phone"
                  placeholder=" "
                  type="text"
                  icon={<i className="fas fa-phone"></i>}
                  fieldClassName="wrapper__field"
                  inputClassName="wrapper__input"
                  labelClassName="wrapper__label"
                  iconClassName="wrapper__icon"
                />
                <div className="wrapper__button">
                  {!isValid ? (
                    <Button type="button" className="button--disabled">
                      Submit
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className={
                        buttonLoading
                          ? "button--round button--loading"
                          : "button--round"
                      }
                      isDisabled={!isValid || isSubmitting}
                    >
                      <ButtonLoading />
                      <span>Submit</span>
                    </Button>
                  )}
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default CarouselForm;
