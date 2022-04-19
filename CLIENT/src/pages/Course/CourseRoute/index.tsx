import React from "react";
import * as customHooks from "../../../hooks";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import RouteIntro from "./RouteIntro";
import RouteSubject from "./RouteSubject";
import RouteCategory from "./RouteCategory";
import Consultation from "../../../components/Consultation/ConsultationForm";
import ConsultModal from "../../../components/Consultation/ConsultModal";
import utils from "../../../utils";

interface CourseRouteProps {}

const CourseRoute: React.FunctionComponent<CourseRouteProps> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  customHooks.useLoading();

  const categoryList = [
    {
      id: 1,
      title: langs?.headerMenu.mindsetProgramming,
      link: "/courseByCategory/mindSet",
      imgSrc: "../img/course/category_img/illustration_1.svg",
      background: "#f08383",
      longTerm: 4,
      shortTerm: 2,
    },
    {
      id: 2,
      title: langs?.headerMenu.mobileProgramming,
      link: "/courseByCategory/mobile",
      imgSrc: "../img/course/category_img/illustration_2.svg",
      background: "#4272d8",
      longTerm: 6,
      shortTerm: 3,
    },
    {
      id: 3,
      title: langs?.headerMenu.frontendProgramming,
      link: "/courseByCategory/frontEnd",
      imgSrc: "../img/course/category_img/illustration_3.svg",
      background: "#6093ff",
      longTerm: 6,
      shortTerm: 4,
    },
    {
      id: 4,
      title: langs?.headerMenu.backendProgramming,
      link: "/courseByCategory/backEnd",
      imgSrc: "../img/course/category_img/illustration_4.svg",
      background: "#555",
      longTerm: 4,
      shortTerm: 2,
    },
    {
      id: 5,
      title: langs?.headerMenu.fullstackProgramming,
      link: "/courseByCategory/fullStack",
      imgSrc: "../img/course/category_img/illustration_5.svg",
      background: "#0faf37",
      longTerm: 8,
      shortTerm: 5,
    },
  ];

  return (
    <div className="course-route">
      <RouteIntro langs={langs} />
      <RouteSubject categoryList={categoryList} langs={langs} />
      <RouteCategory categoryList={categoryList} langs={langs} />

      <Consultation />
      <ConsultModal />
    </div>
  );
};

export default CourseRoute;
