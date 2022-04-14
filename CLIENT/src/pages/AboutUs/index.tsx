import React from "react";
import * as customHook from "../../hooks/index";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import Banner from "./Banner";
import Intro from "./Intro";
import Vision from "./Vision";
import Mission from "./Mission";
import utils from "../../utils";

const AboutUs: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  customHook.useLoading();

  return (
    <div className="about-us">
      <Banner langs={langs} />
      <div className="about-us__content">
        <Intro langs={langs} />
        <Vision langs={langs} />
        <Mission langs={langs} />
      </div>
    </div>
  );
};

export default AboutUs;
