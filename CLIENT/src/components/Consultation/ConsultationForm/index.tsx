import React from "react";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import Logo from "../../Logo";
import ConsultationForm from "./Form";
import utils from "../../../utils";

const Consultation: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  return (
    <div className="consultation">
      <ConsultationForm />
      <div className="consultation__logo">
        <Logo className="logo__inner" />
        <ul className="logo__content">
          <li className="content__list">{langs?.home.carousel.slideContent_1}</li>
          <li className="content__list">{langs?.home.carousel.slideContent_2}</li>
          <li className="content__list">{langs?.home.carousel.slideContent_3}</li>
        </ul>
      </div>
    </div>
  );
};

export default Consultation;
