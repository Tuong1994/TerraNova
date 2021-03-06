import React from "react";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { Formik, Form } from "formik";
import { phoneRegex } from "../../../../configs/regex";
import ContentHeader from "../../../../components/ContentHeader";
import AccountFields from "./Account";
import RoleFields from "./Role";
import InfoFields from "./Info";
import Button from "../../../../components/Button";
import utils from "../../../../utils";
import AddressFields from "./Address";
import ButtonLoading from "../../../../components/Loading/ButtonLoading";
import { createUser } from "../../../../redux/actionCreators/UserCreators";

interface AddCustomerProps {}

const AddCustomer: React.FunctionComponent<AddCustomerProps> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const [imgUpload, setImgUpload] = React.useState<any>(null);
  const [isReset, setIsReset] = React.useState<boolean>(false);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);
  const options = utils.getOptionByLang(lang);

  const handleSelectedImg = (file: any) => {
    setImgUpload(file);
  };

  const initialValues = {
    account: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    ward: 0,
    district: 0,
    province: 0,
    birthDay: "",
    gender: 0,
    role: "",
  };

  const validationSchema = yup.object().shape({
    account: yup.string().required(langs?.validateMessages.required),
    password: yup.string().required(langs?.validateMessages.required),
    firstName: yup.string().required(langs?.validateMessages.required),
    lastName: yup.string().required(langs?.validateMessages.required),
    email: yup
      .string()
      .email(langs?.validateMessages.email)
      .required(langs?.validateMessages.required),
    phone: yup
      .string()
      .matches(phoneRegex, langs?.validateMessages.phone)
      .required(langs?.validateMessages.required),
    address: yup.string().required(langs?.validateMessages.required),
    province: yup.number().min(1, langs?.validateMessages.choose),
    district: yup.number().min(1, langs?.validateMessages.choose),
    ward: yup.number().min(1, langs?.validateMessages.choose),
    birthDay: yup.string().required(langs?.validateMessages.required),
    gender: yup.number().min(1, langs?.validateMessages.choose),
    role: yup.string().required(langs?.validateMessages.choose),
  });

  const handleSubmit = (values: any, action: any) => {
    const data = new FormData();
    for (let key in values) {
      data.append(key, values[key]);
    }
    if (imgUpload) {
      data.append("avatar", imgUpload);
    }

    if (isReset) {
      setIsReset(false);
    }

    dispatch(
      createUser(
        data,
        langs?.toastMessages.success.create,
        langs?.toastMessages.error.create
      )
    );

    setTimeout(() => {
      setIsReset(true);
      action.resetForm({
        values: {
          ...initialValues,
        },
      });
    }, 500);
  };

  return (
    <div className="add-customer">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          const { isValid } = formikProps;
          return (
            <Form autoComplete="off">
              <ContentHeader
                name={langs?.admin.pageTitle.addCustomer || ""}
                right={() => {
                  return !isValid ? (
                    <Button
                      className="button--disabled"
                      style={{ fontSize: "16px" }}
                    >
                      {langs?.button.save}
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className={`button--submit ${
                        buttonLoading ? "button--disabled" : ""
                      }`}
                    >
                      <ButtonLoading />
                      <span>{langs?.button.save}</span>
                    </Button>
                  );
                }}
              />
              <div className="add-customer__wrapper">
                <div className="wrapper__item">
                  <AccountFields
                    langs={langs}
                    isReset={isReset}
                    onSelectedImg={handleSelectedImg}
                  />
                  <InfoFields
                    langs={langs}
                    isReset={isReset}
                    options={options}
                  />
                </div>
                <div className="wrapper__item">
                  <RoleFields
                    langs={langs}
                    isReset={isReset}
                    options={options}
                  />
                  <AddressFields
                    langs={langs}
                    isReset={isReset}
                    options={options}
                  />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddCustomer;
