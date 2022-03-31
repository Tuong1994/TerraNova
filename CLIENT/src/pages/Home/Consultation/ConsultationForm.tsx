import React from "react";
import * as yup from "yup";
import * as FormControl from "../../../components/Fields";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { IUser } from "../../../models/User";
import { EModalActionTypes } from "../../../redux/actionTypes/ModalActionTypes";
import { EUserActionTypes } from "../../../redux/actionTypes/UserActionTypes";
import { EValidateMessage } from "../../../interfaces/validateMessage";
import { phoneRegex } from "../../../configs/regex";
import Button from "../../../components/Button";
import ButtonLoading from "../../../components/Loading/ButtonLoading";
import actions from "../../../configs/actions";
import utils from "../../../utils";

const ConsultationForm: React.FunctionComponent<{}> = (props) => {
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

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
    dispatch(actions.openButtonLoading);
    dispatch({
      type: EUserActionTypes.CONSULTATION,
      payload: values,
    });
    setTimeout(() => {
      action.resetForm({
        values: {
          ...initialValues,
        },
      });
      dispatch({
        type: EModalActionTypes.OPEN_MODAL,
      });
      dispatch(actions.closeButtonLoading);
    }, 1000);
  };

  return (
    <div className="consultation__form">
      <div className="form__title">
        {langs?.home.consultation.signUpConsultation}
      </div>
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
                  component={FormControl.Input}
                  label={langs?.home.consultation.name}
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
                  component={FormControl.Input}
                  label={langs?.home.consultation.email}
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
                  component={FormControl.Input}
                  label={langs?.home.consultation.phone}
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
                      {langs?.button.submit}
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
                      <span>{langs?.button.submit}</span>
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

export default ConsultationForm;
