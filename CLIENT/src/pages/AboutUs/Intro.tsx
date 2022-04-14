import React from "react";
import { ILangs } from "../../interfaces/lang";

interface IntroProps {
  langs: ILangs;
}

const Intro: React.FunctionComponent<IntroProps> = (props) => {
  const { langs } = props;

  return (
    <div className="about-us__intro">
      <div className="intro__content">
        <p>{langs?.aboutUs.intro.intro_1}</p>
        <p>{langs?.aboutUs.intro.intro_2}</p>
        <p>{langs?.aboutUs.intro.subTitle} : </p>
        <ul>
          <li>{langs?.aboutUs.intro.product}</li>
          <li>{langs?.aboutUs.intro.course}</li>
          <li>{langs?.aboutUs.intro.service}</li>
        </ul>
      </div>
      <div className="intro__img">
        <img src="../img/intro.svg" alt="intro" />
      </div>
    </div>
  );
};

export default Intro;
