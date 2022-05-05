import React from "react";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { Formik, Form } from "formik";
import ContentHeader from "../../../../components/ContentHeader";
import Button from "../../../../components/Button";
import AccountFields from "./Account";
import utils from "../../../../utils";
import RoleFields from "./Role";

interface AddCustomerProps {}

const AddCustomer: React.FunctionComponent<AddCustomerProps> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

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

  const handleSubmit = (values: any, action: any) => {};

  return (
    <div className="add-customer">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formikProps) => {
          return (
            <Form autoComplete="off">
              <ContentHeader
                name={langs?.admin.pageTitle.addCustomer || ""}
                right={() => {
                  return (
                    <Button type="submit" className="button--submit">
                      {langs?.button.save}
                    </Button>
                  );
                }}
              />
              <div className="add-customer__wrapper">
                <div className="wrapper__item">
                  <AccountFields langs={langs} />
                </div>
                <div className="wrapper__item">
                  <RoleFields langs={langs} />
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
