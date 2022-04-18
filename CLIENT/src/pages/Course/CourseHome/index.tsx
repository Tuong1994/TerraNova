import React from "react";
import * as customHooks from "../../../hooks";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import CourseBanner from "./CourseBanner";
import CourseIntro from "./CourseIntro";
import CourseSubject from "./CourseSubject";
import CourseBenefits from "./CourseBenefits";
import CourseSlogan from "./CourseSlogan";
import CoursePartners from "./CoursePartners";
import CourseCategory from "./CourseCategory";
import Consultation from "../../../components/Consultation/ConsultationForm";
import RCourseCategory from "../../../responsive/RCourseCategory";
import utils from "../../../utils";
import ConsultModal from "../../../components/Consultation/ConsultModal";

interface CourseHomeProps {}

const CourseHome: React.FunctionComponent<CourseHomeProps> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  customHooks.useLoading();

  const langs = utils.changeLang(lang);

  return (
    <div className="course-home">
      <CourseBanner lang={lang} langs={langs} />
      <CourseIntro langs={langs} />
      <CourseSubject langs={langs} />
      <CourseBenefits langs={langs} />
      <CourseSlogan langs={langs} />
      <CoursePartners langs={langs} />
      <CourseCategory langs={langs} />

      <RCourseCategory langs={langs} />

      <Consultation />
      <ConsultModal />
    </div>
  );
};

export default CourseHome;
