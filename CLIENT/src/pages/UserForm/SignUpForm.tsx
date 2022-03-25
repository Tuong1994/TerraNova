import React from "react";
import * as yup from "yup";
import * as FormControl from "../../components/Fields";
import { Formik, Form, Field } from "formik";
import { IUser } from "../../models/User";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import { EValidateMessage } from "../../interfaces/validateMessage";
import { phoneRegex, spaceRegex } from "../../configs/regex";
import { signUp } from "../../redux/actionCreators/UserCreators";
import Button from "../../components/Button";
import ButtonLoading from "../../components/Loading/ButtonLoading";

const SignUpForm: React.FunctionComponent<{}> = (props) => {
  const { buttonLoading } = useSelector(
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
                component={FormControl.Input}
                label="Account"
                placeholder=" "
                type="text"
                icon={<i className="fas fa-user"></i>}
              />
              <Field
                name="password"
                component={FormControl.Password}
                label="Password"
                placeholder=" "
                type="password"
                icon={<i className="fas fa-eye"></i>}
              />
              <Field
                name="passwordConfirm"
                component={FormControl.Password}
                label="Password Confirm"
                placeholder=" "
                type="password"
                icon={<i className="fas fa-eye"></i>}
              />

              <h3 className="wrapper__title">Person Information</h3>

              <div className="wrapper__group">
                <Field
                  name="firstName"
                  component={FormControl.Input}
                  label="First name"
                  placeholder=" "
                  type="text"
                  icon={<i className="fas fa-user"></i>}
                  groupClassName="group__control"
                />
                <Field
                  name="lastName"
                  component={FormControl.Input}
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
                  component={FormControl.Input}
                  label="Email"
                  placeholder=" "
                  type="text"
                  icon={<i className="fas fa-envelope"></i>}
                  groupClassName="group__control"
                />
                <Field
                  name="phone"
                  component={FormControl.Input}
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
                  component={FormControl.Input}
                  label="Address"
                  placeholder=" "
                  type="text"
                  groupClassName="group__control"
                />
                <Field
                  name="birthDay"
                  component={FormControl.Input}
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
                      component={FormControl.Radio}
                      label="Male"
                      groupClassName="control__item"
                    />
                    <Field
                      name="gender"
                      value="female"
                      component={FormControl.Radio}
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
                        buttonLoading
                          ? "button--submit button--loading"
                          : "button--submit"
                      }
                      isDisabled={!isValid || isSubmitting}
                    >
                      <ButtonLoading />
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
