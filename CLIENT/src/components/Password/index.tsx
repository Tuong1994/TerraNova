import React from "react";
import * as yup from "yup";
import * as Modal from "../Modal";
import * as Card from "../Card";
import * as FormControl from "../../components/Fields";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import { EModalActionTypes } from "../../redux/actionTypes/ModalActionTypes";
import { changePassword } from "../../redux/actionCreators/UserCreators";
import Button from "../Button";
import ButtonLoading from "../Loading/ButtonLoading";
import utils from "../../utils";

interface PasswordModalProps {}

const PasswordModal: React.FunctionComponent<PasswordModalProps> = (props) => {
  const { isPassword } = useSelector(
    (state: ReducerState) => state.ModalReducer
  );
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { user } = useSelector((state: ReducerState) => state.UserReducer);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

  const handleHide = () => {
    dispatch({
      type: EModalActionTypes.CLOSE_PASSWORD_MODAL,
    });
  };

  const initialValues = {
    oldPassword: "",
    newPassword: "",
  };

  const validationSchema = yup.object().shape({
    oldPassword: yup.string().required(langs?.validateMessages.required),
    newPassword: yup.string().required(langs?.validateMessages.required),
  });

  const handleSubmit = (values: any, action: any) => {
    const data = {
      userId: user?.id || user?.userId,
      account: user?.account,
      password: values.newPassword,
      ...values,
    };
    dispatch(
      changePassword(
        data,
        langs?.toastMessages.success.update,
        langs?.toastMessages.error.password
      )
    );

    setTimeout(() => {
      action.resetForm({
        values: {
          ...initialValues,
        },
      });
      handleHide();
    }, 1000);
  };

  return (
    <Modal.Wrapper
      isShowing={isPassword}
      onHide={handleHide}
      className="password-modal"
    >
      <Modal.Header
        title={langs?.user.modal.title}
        onHide={handleHide}
        className="password-modal__header"
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
              <Modal.Body className="password-modal__body">
                <Card.Wrapper className="body__card">
                  <Field
                    name="oldPassword"
                    type="password"
                    placeholder=" "
                    label={langs?.form.oldPassword}
                    component={FormControl.Password}
                    icon={<i className="fas fa-eye"></i>}
                    groupClassName="card__field"
                  />
                  <Field
                    name="newPassword"
                    type="password"
                    placeholder=" "
                    label={langs?.form.newPassword}
                    component={FormControl.Password}
                    icon={<i className="fas fa-eye"></i>}
                    groupClassName="card__field"
                  />
                </Card.Wrapper>
              </Modal.Body>
              <Modal.Footer className="password-modal__footer">
                {!isValid ? (
                  <Button
                    className="button--disabled"
                    style={{ fontSize: "16px" }}
                  >
                    {langs?.button.save}
                  </Button>
                ) : (
                  <Button
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

export default PasswordModal;
