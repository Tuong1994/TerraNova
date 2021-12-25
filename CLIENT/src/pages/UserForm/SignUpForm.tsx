import React from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { IUser } from "../../models/User/IUser";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import { EValidateMessage } from "../../interfaces/validateMessage";
import { phoneRegex, spaceRegex } from "../../configs/regex";
import { signUp } from "../../redux/actionCreators/UserCreators";
import InputField from "../../components/Fields/InputField/InputField";
import Button from "../../components/Button/Button";
import PasswordField from "../../components/Fields/PasswordField/PasswordField";
import Spinner from "../../components/Spinner/Spinner";
import RadioField from "../../components/Fields/RadioField/RadioField";

const SignUpForm: React.FunctionComponent<{}> = (props) => {
  const { isLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const dispatch = useDispatch();
  const initialValues = {
    account: "",
    password: "",
    passwordConfirm: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    birthDay: "",
    gender: "",
    role: "USER",
  };
  const validationSchema = yup.object().shape({
    account: yup
      .string()
      .min(2, "At least 2 character")
      .max(25, "At most 25 character")
      .matches(spaceRegex, `Account ${EValidateMessage.whiteSpace}`)
      .required(EValidateMessage.required),
    password: yup.string().required(EValidateMessage.required),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], EValidateMessage.password)
      .required(EValidateMessage.required),
    firstName: yup.string().required(EValidateMessage.required),
    lastName: yup.string().required(EValidateMessage.required),
    email: yup
      .string()
      .email(EValidateMessage.email)
      .required(EValidateMessage.required),
    phone: yup
      .string()
      .max(10, "At most 10 character")
      .matches(phoneRegex, EValidateMessage.phone)
      .required(EValidateMessage.required),
    address: yup.string().required(EValidateMessage.required),
    birthDay: yup.string().required(EValidateMessage.date),
    gender: yup.string().required(EValidateMessage.gender),
  });
  const handleSubmit = (values: IUser, action: any) => {
    dispatch(signUp(values));
    setTimeout(() => {
      action.resetForm({
        values: {
          account: "",
          password: "",
          passwordConfirm: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          birthDay: "",
          gender: "",
        },
      });
    }, 1000);
  };
  return (
    <div className="sign-up__form">
      <div className="form__title">Sign Up</div>
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
              <Field
                name="passwordConfirm"
                component={PasswordField}
                label="Password Confirm"
                placeholder=" "
                type="password"
                icon={<i className="fas fa-eye"></i>}
              />

              <h3 className="wrapper__title">Person Information</h3>

              <div className="wrapper__group">
                <Field
                  name="firstName"
                  component={InputField}
                  label="First name"
                  placeholder=" "
                  type="text"
                  icon={<i className="fas fa-user"></i>}
                  groupClassName="group__control"
                />
                <Field
                  name="lastName"
                  component={InputField}
                  label="Last name"
                  placeholder=" "
                  type="text"
                  icon={<i className="fas fa-user"></i>}
                  groupClassName="group__control"
                />
              </div>

              <div className="wrapper__group">
                <Field
                  name="email"
                  component={InputField}
                  label="Email"
                  placeholder=" "
                  type="text"
                  icon={<i className="fas fa-envelope"></i>}
                  groupClassName="group__control"
                />
                <Field
                  name="phone"
                  component={InputField}
                  label="Phone"
                  placeholder=" "
                  type="text"
                  icon={<i className="fas fa-phone"></i>}
                  groupClassName="group__control"
                />
              </div>

              <div className="wrapper__group">
                <Field
                  name="address"
                  component={InputField}
                  label="Address"
                  placeholder=" "
                  type="text"
                  groupClassName="group__control"
                />
                <Field
                  name="birthDay"
                  component={InputField}
                  label="Birthday"
                  placeholder=" "
                  type="date"
                  groupClassName="group__control"
                />
              </div>

              <div className="wrapper__group">
                <div className="group__inner">
                  <div className="inner__title">Gender</div>
                  <div className="inner__control">
                    <Field
                      name="gender"
                      value="male"
                      component={RadioField}
                      label="Male"
                      groupClassName="control__item"
                    />
                    <Field
                      name="gender"
                      value="female"
                      component={RadioField}
                      label="Female"
                      groupClassName="control__item"
                    />
                  </div>
                </div>

                <div className="group__button">
                  {!isValid ? (
                    <Button type="button" className="button--disabled">
                      Sign Up
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
                      <span>Sign Up</span>
                    </Button>
                  )}
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignUpForm;
