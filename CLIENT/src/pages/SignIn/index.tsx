import React from "react";
import * as customHook from "../../hooks/index";
import { RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import Logo from "../../components/Logo";
import SignInForm from "./SignInForm";
import utils from "../../utils";

interface ISignInProps extends RouteComponentProps {}

const SignIn: React.FunctionComponent<ISignInProps> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  customHook.useLoading();

  return (
    <div className="sign-in">
      <div className="sign-in__logo">
        <Logo className="logo__inner" />
        <ul className="logo__content">
          <li className="content__list">
            {langs?.home.carousel.slideContent_1}
          </li>
          <li className="content__list">
            {langs?.home.carousel.slideContent_2}
          </li>
          <li className="content__list">
            {langs?.home.carousel.slideContent_3}
          </li>
        </ul>
      </div>

      <div className="sign-in__line"></div>

      <SignInForm langs={langs} />
    </div>
  );
};

export default SignIn;
