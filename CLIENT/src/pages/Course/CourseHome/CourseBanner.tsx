import React from "react";
import TypingText from "../../../components/TypingText";
import { ELangs, ILangs } from "../../../interfaces/lang";

interface CourseBannerProps {
  langs: ILangs;
  lang: string;
}

const textListENG = [
  "Mindset Programming",
  "Mobile Programming",
  "BackEnd Programming",
  "FrontEnd Programming",
  "Fullstack Programming",
];

const textListVN = [
  "Tư duy lập trình",
  "Lập trình di động",
  "Lập trình BackEnd",
  "Lập trình FrontEnd",
  "Lập trình Fullstack",
];

const CourseBanner: React.FunctionComponent<CourseBannerProps> = (props) => {
  const { langs, lang } = props;

  const getTextList = () => {
    if (lang === ELangs.ENG) {
      return textListENG;
    } else if (lang === ELangs.VN) {
      return textListVN;
    }
  };

  return (
    <div className="course-home__banner">
      <div className="banner__intro">{langs?.course.home.banner.title}</div>
      <TypingText
        textList={getTextList() || []}
        textClassName="banner__text-dynamic"
        lineClassName="text-dynamic__blink-line"
      />
    </div>
  );
};

export default CourseBanner;
