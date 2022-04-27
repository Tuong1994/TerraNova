import React from "react";
import * as FormControl from "../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../interfaces/lang";

interface AccountProps {
  langs: ILangs;
}

const Account: React.FunctionComponent<AccountProps> = (props) => {
  const { langs } = props;

  return (
    <div className="wrapper__group">
      <h3 className="group__title">{langs?.form.accountInfo}</h3>
      <Field
        name="account"
        component={FormControl.Input}
        label={langs?.form.account}
        placeholder=" "
        type="text"
        icon={<i className="fas fa-user"></i>}
      />
      <Field
        name="email"
        component={FormControl.Input}
        label={langs?.form.email}
        placeholder=" "
        type="text"
        icon={<i className="fas fa-envelope"></i>}
        groupClassName="item__control"
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
    </div>
  );
};

export default Account;
