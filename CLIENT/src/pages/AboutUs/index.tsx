import React from "react";
import * as customHook from "../../hooks/index";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import Banner from "./Banner";
import Intro from "./Intro";
import utils from "../../utils";

const AboutUs: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  customHook.useLoading();

  return (
    <div className="about-us">
      <Banner langs={langs} />
      <Intro langs={langs} />
    </div>
  );
};

export default AboutUs;
