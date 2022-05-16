import React from "react";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import Logo from "../../../components/Logo";
import utils from "../../../utils";

const Achievement: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  return (
    <div className="home__achievement">
      <div className="achievement__card">
        <div className="card__bg">
          <Logo />
        </div>
        <div className="card__content">
          {langs?.home.achievement.slogan}
        </div>
      </div>

      <div className="achievement__content">
        <div className="content__wrapper">
          <div className="wrapper__icon">
            <i className="far fa-building"></i>
          </div>
          <div className="wrapper__number">02</div>
          <div className="wrapper__title">
            {langs?.home.achievement.branches}
          </div>
        </div>

        <div className="content__wrapper">
          <div className="wrapper__icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="wrapper__number">15730</div>
          <div className="wrapper__title">
            {langs?.home.achievement.customers}
          </div>
        </div>

        <div className="content__wrapper">
          <div className="wrapper__icon">
            <i className="fas fa-handshake"></i>
          </div>
          <div className="wrapper__number">08</div>
          <div className="wrapper__title">
            {langs?.home.achievement.partners}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
