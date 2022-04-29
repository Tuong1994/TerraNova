import React from "react";
import * as Card from "../../../components/Card";
import * as FormControl from "../../../components/Fields";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import { ILangs } from "../../../interfaces/lang";
import { EGender, ERole, IUser } from "../../../models/User";
import { ReducerState } from "../../../redux/store";
import { EProvince } from "../../../models/Shipment";
import Button from "../../../components/Button";
import ButtonLoading from "../../../components/Loading/ButtonLoading";
import utils from "../../../utils";
import { IQueryList } from "../../../interfaces/query";
import {
  updateUser,
  uploadAvatar,
} from "../../../redux/actionCreators/UserCreators";
import Upload from "../../../components/Upload";

interface UserEditFormProps {
  lang: string;
  langs: ILangs;
  user: IUser | null;
}

const UserEditForm: React.FunctionComponent<UserEditFormProps> = (props) => {
  const { lang, langs, user } = props;

  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const [provinceType, setProvinceType] = React.useState<number | string>();
  const [optionByProvince, setOptionsByProvince] = React.useState<any>([]);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (user) {
      setProvinceType(user?.province);
    }
  }, [user]);

  React.useEffect(() => {
    getOptionsByProvince();
  }, [provinceType]);

  const options = utils.getOptionByLang(lang);

  const getOptionsByProvince = () => {
    if (provinceType === EProvince.HCM) {
      return setOptionsByProvince(options?.HCM);
    } else if (provinceType === EProvince.HN) {
      return setOptionsByProvince(options?.HN);
    }
  };

  const renderUserRole = () => {
    if (user) {
      if (user?.role === ERole.user) {
        return langs?.user.info.user;
      } else if (user?.role === ERole.admin) {
        return langs?.user.info.admin;
      }
    }
  };

  const handleUpload = (file: any) => {
    const query: IQueryList = {
      userId: user?.id,
    };
    const data = new FormData();
    data.append("avatar", file);
    dispatch(
      uploadAvatar(
        query,
        data,
        langs?.toastMessages.success.upload,
        langs?.toastMessages.error.upload
      )
    );
  };

  const initialValues = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    phone: user?.phone,
    email: user?.email,
    address: user?.address,
    province: user?.province,
    ward: user?.ward,
    district: user?.district,
    birthday: user?.birthDay,
    gender: user?.gender,
    role: user?.role,
  };

  const handleSubmit = (values: IUser) => {
    const query: IQueryList = {
      userId: user?.id,
    };
    dispatch(
      updateUser(
        query,
        values,
        langs?.toastMessages.success.update,
        langs?.toastMessages.error.update
      )
    );
  };

  return (
    <div className="user-edit__form">
      <Card.Wrapper className="form__info">
        <h5 className="info__title">{langs?.user.overview.accountInfo}</h5>
        <div className="info__content">
          <div className="content__avatar">
            <Upload defaultImg={user?.avatar} onSubmit={handleUpload} />
          </div>
          <div className="content__list">
            <div className="list__content">
              <p>{langs?.form.account} : </p>
              <strong>{user?.account}</strong>
            </div>
            <div className="list__content">
              <p>{langs?.user.update.role} : </p>
              <strong>{renderUserRole()}</strong>
            </div>
            <Button className="button--submit list__button">
              {langs?.user.update.updatePassword}
            </Button>
          </div>
        </div>
      </Card.Wrapper>

      <Card.Wrapper className="form__control">
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {(formikProps) => {
            const { isValid, isSubmitting } = formikProps;
            return (
              <Form className="control__inner" autoComplete="off">
                <div className="inner__group">
                  <Field
                    name="firstName"
                    label={langs?.form.firstName}
                    placeholder=" "
                    icon={<i className="fas fa-user"></i>}
                    component={FormControl.Input}
                  />
                  <Field
                    name="lastName"
                    label={langs?.form.lastName}
                    placeholder=" "
                    icon={<i className="fas fa-user"></i>}
                    component={FormControl.Input}
                  />
                  <Field
                    name="email"
                    label={langs?.form.email}
                    placeholder=" "
                    icon={<i className="fas fa-envelope"></i>}
                    component={FormControl.Input}
                  />
                  <Field
                    name="phone"
                    label={langs?.form.phone}
                    placeholder=" "
                    icon={<i className="fas fa-phone"></i>}
                    component={FormControl.Input}
                  />
                  <Field
                    name="birthday"
                    label={langs?.form.birthday}
                    placeholder=" "
                    type="date"
                    component={FormControl.Input}
                  />
                </div>

                <div className="inner__group">
                  <Field
                    name="address"
                    label={langs?.form.address}
                    placeholder=" "
                    component={FormControl.Input}
                    icon={<i className="fa-solid fa-location-dot"></i>}
                  />
                  <Field
                    name="province"
                    label={langs?.form.province}
                    placeholder=" "
                    component={FormControl.Select}
                    option={options?.province}
                    defaultValue={options?.province.find(
                      (i) => i.value === user?.province
                    )}
                    onChange={(value: any) => {
                      setProvinceType(value);
                    }}
                  />
                  <Field
                    name="district"
                    label={langs?.form.district}
                    placeholder=" "
                    component={FormControl.Select}
                    option={optionByProvince?.district}
                    defaultValue={optionByProvince?.district?.find(
                      (i: any) => i.value === user?.district
                    )}
                  />
                  <Field
                    name="ward"
                    label={langs?.form.ward}
                    placeholder=" "
                    component={FormControl.Select}
                    option={optionByProvince?.ward}
                    defaultValue={optionByProvince?.ward?.find(
                      (i: any) => i.value === user?.ward
                    )}
                  />
                  <div className="group__item">
                    <h6 className="item__label">{langs?.form.gender}</h6>
                    <Field
                      name="gender"
                      label={langs?.form.male}
                      value={EGender.male}
                      checked={user?.gender === EGender.male}
                      component={FormControl.Radio}
                      wrapperClassName="item__group"
                      groupClassName="group__radio"
                    />
                    <Field
                      name="gender"
                      label={langs?.form.female}
                      value={EGender.female}
                      checked={user?.gender === EGender.female}
                      component={FormControl.Radio}
                      wrapperClassName="item__group"
                      groupClassName="group__radio"
                    />
                  </div>
                </div>

                <div className="inner__button">
                  {!isValid ? (
                    <Button type="button" className="button--disabled">
                      {langs?.button.update}
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
                      <span>{langs?.button.update}</span>
                    </Button>
                  )}
                </div>
              </Form>
            );
          }}
        </Formik>
      </Card.Wrapper>
    </div>
  );
};

export default UserEditForm;
