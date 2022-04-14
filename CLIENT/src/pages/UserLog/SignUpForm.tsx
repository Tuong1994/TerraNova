import React from "react";
import * as yup from "yup";
import * as FormControl from "../../components/Fields";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { IUser } from "../../models/User";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import { phoneRegex, spaceRegex } from "../../configs/regex";
import { signUp } from "../../redux/actionCreators/UserCreators";
import Button from "../../components/Button";
import ButtonLoading from "../../components/Loading/ButtonLoading";
import utils from "../../utils";

const SignUpForm: React.FunctionComponent<{}> = (props) => {
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

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
      .matches(spaceRegex, `Account ${langs?.validateMessages.whiteSpace}`)
      .required(langs?.validateMessages.required),
    password: yup.string().required(langs?.validateMessages.required),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], langs?.validateMessages.password)
      .required(langs?.validateMessages.required),
    firstName: yup.string().required(langs?.validateMessages.required),
    lastName: yup.string().required(langs?.validateMessages.required),
    email: yup
      .string()
      .email(langs?.validateMessages.email)
      .required(langs?.validateMessages.required),
    phone: yup
      .string()
      .max(10, "At most 10 character")
      .matches(phoneRegex, langs?.validateMessages.phone)
      .required(langs?.validateMessages.required),
    address: yup.string().required(langs?.validateMessages.required),
    birthDay: yup.string().required(langs?.validateMessages.date),
    gender: yup.string().required(langs?.validateMessages.gender),
  });
  const handleSubmit = (values: IUser, action: any) => {
    dispatch(
      signUp(
        values,
        langs?.toastMessages.success.signUp,
        langs?.toastMessages.error.signUp
      )
    );
    setTimeout(() => {
      action.resetForm({
        values: {
          ...initialValues,
        },
      });
    }, 1000);
  };
  return (
    <div className="sign-up__form">
      <div className="form__title">{langs?.form.signUp}</div>
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
                label={langs?.form.account}
                placeholder=" "
                type="text"
                icon={<i className="fas fa-user"></i>}
              />
              <Field
                name="password"
                component={FormControl.Password}
                label={langs?.form.password}
                placeholder=" "
                type="password"
                icon={<i className="fas fa-eye"></i>}
              />
              <Field
                name="passwordConfirm"
                component={FormControl.Password}
                label={langs?.form.passConfirm}
                placeholder=" "
                type="password"
                icon={<i className="fas fa-eye"></i>}
              />

              <h3 className="wrapper__title">{langs?.form.personalInfo}</h3>

              <div className="wrapper__group">
                <Field
                  name="firstName"
                  component={FormControl.Input}
                  label={langs?.form.firstName}
                  placeholder=" "
                  type="text"
                  icon={<i className="fas fa-user"></i>}
                  groupClassName="group__control"
                />
                <Field
                  name="lastName"
                  component={FormControl.Input}
                  label={langs?.form.lastName}
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
                  label={langs?.form.email}
                  placeholder=" "
                  type="text"
                  icon={<i className="fas fa-envelope"></i>}
                  groupClassName="group__control"
                />
                <Field
                  name="phone"
                  component={FormControl.Input}
                  label={langs?.form.phone}
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
                  label={langs?.form.address}
                  placeholder=" "
                  type="text"
                  groupClassName="group__control"
                />
                <Field
                  name="birthDay"
                  component={FormControl.Input}
                  label={langs?.form.birthday}
                  placeholder=" "
                  type="date"
                  groupClassName="group__control"
                />
              </div>

              <div className="wrapper__group">
                <div className="group__inner">
                  <div className="inner__title">{langs?.form.gender}</div>
                  <div className="inner__control">
                    <Field
                      name="gender"
                      value="male"
                      component={FormControl.Radio}
                      label={langs?.form.male}
                      groupClassName="control__item"
                    />
                    <Field
                      name="gender"
                      value="female"
                      component={FormControl.Radio}
                      label={langs?.form.female}
                      groupClassName="control__item"
                    />
                  </div>
                </div>

                <div className="group__button">
                  {!isValid ? (
                    <Button type="button" className="button--disabled">
                      {langs?.form.signUp}
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
                      <span>{langs?.form.signUp}</span>
                    </Button>
                  )}
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
      <div className="form__link">
        <p>
          {langs?.form.haveAcc} |{" "}
          <Link className="link" to="/signIn">
            {langs?.form.signIn}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
