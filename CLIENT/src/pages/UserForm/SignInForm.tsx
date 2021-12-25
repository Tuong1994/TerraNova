import React from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { IUser } from "../../models/User/IUser";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import { EValidateMessage } from "../../interfaces/validateMessage";
import { signIn } from "../../redux/actionCreators/UserCreators";
import InputField from "../../components/Fields/InputField/InputField";
import Button from "../../components/Button/Button";
import PasswordField from "../../components/Fields/PasswordField/PasswordField";
import Spinner from "../../components/Spinner/Spinner";

const SignInForm: React.FunctionComponent<{}> = (props) => {
  const { isLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const dispatch = useDispatch();
  const initialValues = {
    account: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    account: yup.string().required(EValidateMessage.required),
    password: yup.string().required(EValidateMessage.required),
  });
  const handleSubmit = (values: IUser, action: any) => {
    dispatch(signIn(values));
    setTimeout(() => {
      action.resetForm({
        values: {
          account: "",
          password: "",
        },
      });
    }, 1000);
  };
  return (
    <div className="sign-in__form">
      <div className="form__title">Sign In</div>
      <div className="form__line"></div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          const { isValid, isSubmitting } = formikProps;
          return (
            <Form className="form__wrapper">
              <Field
                name="account"
                component={InputField}
                label="Account"
                placeholder=" "
                type="text"
                icon={<i className="fas fa-user"></i>}
              />
              <Field
                name="password"
                component={PasswordField}
                label="Password"
                placeholder=" "
                type="password"
                icon={<i className="fas fa-eye"></i>}
              />
              <div className="wrapper__button">
                {!isValid ? (
                  <Button type="button" className="button--disabled">
                    Sign In
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className={
                      isLoading
                        ? "button--submit button--loading"
                        : "button--submit"
                    }
                    isDisabled={!isValid || isSubmitting}
                  >
                    <Spinner />
                    <span>Sign In</span>
                  </Button>
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignInForm;
