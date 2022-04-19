import React from "react";
import { useSelector } from "react-redux";
import * as customHooks from "../../../hooks";
import { ReducerState } from "../../../redux/store";
import utils from "../../../utils";
import RouteIntro from "./RouteIntro";

interface CourseRouteProps {}

const CourseRoute: React.FunctionComponent<CourseRouteProps> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  customHooks.useLoading();

  return (
    <div className="course-route">
      <RouteIntro langs={langs} />
    </div>
  );
};

export default CourseRoute;
