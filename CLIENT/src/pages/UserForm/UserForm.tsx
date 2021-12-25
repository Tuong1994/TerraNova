import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

interface IUserFormProps extends RouteComponentProps {}

const UserForm: React.FunctionComponent<IUserFormProps> = (props) => {
  const path = props.match.path;
  const renderForm = () => {
    if (path === "/signIn") {
      return <SignInForm />;
    } else if (path === "/signUp") {
      return <SignUpForm />;
    }
  };
  return (
    <div className="user-form">
      <Logo className="user-form__logo" />

      <div className="user-form__line"></div>

      {renderForm()}
    </div>
  );
};

export default UserForm;
