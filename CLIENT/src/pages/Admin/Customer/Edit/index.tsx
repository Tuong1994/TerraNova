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
import {
  getUserDetail,
  updateUser,
} from "../../../../redux/actionCreators/UserCreators";
import { RouteComponentProps } from "react-router-dom";
import { IRouteParams } from "../../../../interfaces/route";
import { IQueryList } from "../../../../interfaces/query";
import { IUser } from "../../../../models/User";

const EditCustomer: React.FunctionComponent<
  RouteComponentProps<IRouteParams>
> = (props) => {
  const userId = props.match.params.id;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const { userAdmin } = useSelector((state: ReducerState) => state.UserReducer);

  const [userDetail, setUserDetail] = React.useState<IUser>({});
  const [imgUpload, setImgUpload] = React.useState<any>(null);
  const [defaultImg, setDefaultImg] = React.useState<any>({});

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);
  const options = utils.getOptionByLang(lang);

  React.useEffect(() => {
    const query: IQueryList = {
      userId: userId,
    };

    dispatch(getUserDetail(query, true));
  }, []);

  React.useEffect(() => {
    if (userAdmin) {
      setUserDetail(userAdmin);
    }
  }, [userAdmin]);

  React.useEffect(() => {
    if (userDetail) {
      setDefaultImg(userDetail?.avatar);
    }
  }, [userDetail]);

  const handleSelectedImg = (file: any) => {
    setImgUpload(file);
  };

  const initialValues = {
    account: userDetail?.account,
    firstName: userDetail?.firstName,
    lastName: userDetail?.lastName,
    email: userDetail?.email,
    phone: userDetail?.phone,
    address: userDetail?.address,
    ward: userDetail?.ward,
    district: userDetail?.district,
    province: userDetail?.province,
    birthDay: userDetail?.birthDay,
    gender: userDetail?.gender,
    role: userDetail?.role,
  };

  const validationSchema = yup.object().shape({
    account: yup.string().required(langs?.validateMessages.required),
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

  const handleSubmit = (values: any) => {
    const query: IQueryList = {
      userId: userId,
    };

    const data = new FormData();
    for (let key in values) {
      data.append(key, values[key]);
    }
    if (imgUpload) {
      data.append("avatar", imgUpload);
    }
    data.append("defaultImg", defaultImg);

    dispatch(
      updateUser(
        query,
        data,
        langs?.toastMessages.success.update,
        langs?.toastMessages.error.update
      )
    );
  };

  return (
    <div className="add-customer">
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          const { isValid } = formikProps;
          return (
            <Form autoComplete="off">
              <ContentHeader
                name={langs?.admin.pageTitle.editCustomer || ""}
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
                    user={userDetail}
                    onSelectedImg={handleSelectedImg}
                  />
                  <InfoFields
                    langs={langs}
                    values={initialValues}
                    options={options}
                  />
                </div>
                <div className="wrapper__item">
                  <RoleFields
                    langs={langs}
                    values={initialValues}
                    options={options}
                  />
                  <AddressFields
                    langs={langs}
                    values={initialValues}
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

export default EditCustomer;
