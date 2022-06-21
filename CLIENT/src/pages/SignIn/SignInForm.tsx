import React from "react";
import * as yup from "yup";
import * as FormControl from "../../components/Fields";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { IUser } from "../../models/User";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import { signIn } from "../../redux/actionCreators/UserCreators";
import { ILangs } from "../../interfaces/lang";
import { domain } from "../../configs/setting";
import Button from "../../components/Button";
import ButtonLoading from "../../components/Loading/ButtonLoading";

interface SignInFormProps {
  langs: ILangs;
}

const SignInForm: React.FunctionComponent<SignInFormProps> = (props) => {
  const { langs } = props;

  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const dispatch = useDispatch();

  const google = () => {
    window.open(`${domain}/api/authManagement/google`, "_self");
  };

  const initialValues = {
    account: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    account: yup.string().required(langs?.validateMessages.required),
    password: yup.string().required(langs?.validateMessages.required),
  });
  const handleSubmit = (values: IUser, action: any) => {
    dispatch(
      signIn(
        values,
        langs?.toastMessages.success.signIn,
        langs?.toastMessages.error.signIn
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
    <div className="sign-in__form">
      <div className="form__title">{langs?.form.signIn}</div>
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

              <div className="wrapper__link">
                <p>
                  {langs?.form.dontHaveAcc} |{" "}
                  <Link className="link" to="/signUp">
                    {langs?.form.signUp}
                  </Link>
                </p>
              </div>

              <div className="wrapper__button">
                {!isValid ? (
                  <Button type="button" className="button--disabled">
                    {langs?.form.signIn}
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
                    <span>{langs?.form.signIn}</span>
                  </Button>
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
      <div className="form__line">
        <div className="line__content">{langs?.form.or}</div>
      </div>

      <div className="form__social">
        <div className="social__button social__fb">
          <i className="fa-brands fa-facebook-f"></i>
          <span>Facebook</span>
        </div>
        <div className="social__button social__google" onClick={google}>
          <i className="fa-brands fa-google"></i>
          <span>Google</span>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
