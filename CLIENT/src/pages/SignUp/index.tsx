import React from "react";
import * as yup from "yup";
import * as FormControl from "../../components/Fields";
import * as customHooks from "../../hooks";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { EGender, IUser } from "../../models/User";
import { EProvince } from "../../models/Shipment";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import { phoneRegex, spaceRegex } from "../../configs/regex";
import { signUp } from "../../redux/actionCreators/UserCreators";
import Button from "../../components/Button";
import ButtonLoading from "../../components/Loading/ButtonLoading";
import utils from "../../utils";
import Account from "./Account";
import Personal from "./Personal";
import Address from "./Address";

const SignUp: React.FunctionComponent<{}> = (props) => {
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const [provinceType, setProvinceType] = React.useState<number>(0);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

  const options = utils.getOptionByLang(lang);

  customHooks.useLoading();

  const getOptionsByProvince = () => {
    if (provinceType === EProvince.HCM) {
      return options?.HCM;
    } else if (provinceType === EProvince.HN) {
      return options?.HN;
    }
  };

  const initialValues = {
    account: "",
    password: "",
    passwordConfirm: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    province: "",
    ward: "",
    district: "",
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
    province: yup.string().required(langs?.validateMessages.required),
    district: yup.string().required(langs?.validateMessages.required),
    ward: yup.string().required(langs?.validateMessages.required),
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
    <div className="sign-up">
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
              <Form className="form__wrapper" autoComplete="off">

                <Account langs={langs} />

                <Address
                  langs={langs}
                  options={options}
                  setProvinceType={setProvinceType}
                  getOptionsByProvince={getOptionsByProvince}
                />

                <Personal langs={langs} />

                <div className="wrapper__group">
                  <div className="group__link">
                    <p>
                      {langs?.form.haveAcc} |{" "}
                      <Link className="link" to="/signIn">
                        {langs?.form.signIn}
                      </Link>
                    </p>
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
      </div>
    </div>
  );
};

export default SignUp;
