import React from "react";
import * as customHook from "../../hooks/index";
import Logo from "../../components/Logo";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { RouteComponentProps } from "react-router-dom";

interface IUserFormProps extends RouteComponentProps {}

const UserForm: React.FunctionComponent<IUserFormProps> = (props) => {
  const path = props.match.path;
  
  customHook.useLoading();

  const renderForm = () => {
    if (path === "/signIn") {
      return <SignInForm />;
    } else if (path === "/signUp") {
      return <SignUpForm />;
    }
  };


  return (
    <div className="user-form">
      <div className="user-form__logo">
        <Logo className="logo__inner" />
        <ul className="logo__content">
          <li className="content__list">Build your own PC</li>
          <li className="content__list">Gain knownledge for yourself</li>
          <li className="content__list">Enjoy movies with your family</li>
        </ul>
      </div>

      <div className="user-form__line"></div>

      {renderForm()}
    </div>
  );
};

export default UserForm;
