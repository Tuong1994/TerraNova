import React from "react";
import * as customHook from "../../hooks/index";
import Logo from "../../components/Logo";
import SignInForm from "./SignInForm";
import { RouteComponentProps } from "react-router-dom";

interface ISignInProps extends RouteComponentProps {}

const SignIn: React.FunctionComponent<ISignInProps> = (props) => {
  customHook.useLoading();

  return (
    <div className="sign-in">
      <div className="sign-in__logo">
        <Logo className="logo__inner" />
        <ul className="logo__content">
          <li className="content__list">Build your own PC</li>
          <li className="content__list">Gain knownledge for yourself</li>
          <li className="content__list">Enjoy movies with your family</li>
        </ul>
      </div>

      <div className="sign-in__line"></div>

      <SignInForm />
    </div>
  );
};

export default SignIn;
