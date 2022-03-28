import React from "react";
import * as customHook from "../../../hooks/index";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import utils from "../../../utils";

const CourseBanner: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const [reveal, setReveal] = React.useState<boolean>(false);
  
  const bannerRef = React.useRef<any>(null);

  const langs = utils.changeLang(lang);

  customHook.useReveal(bannerRef, setReveal);

  return (
    <div className="home__course-banner" ref={bannerRef}>
      <ul className="course-banner__list">
        <li className={reveal ? "list list--active-1" : "list"}>
          {langs?.home.banner.frontend}
        </li>
        <li className={reveal ? "list list--active-2" : "list"}>
          {langs?.home.banner.backend}
        </li>
        <li className={reveal ? "list list--active-3" : "list"}>
          {langs?.home.banner.fullstack}
        </li>
        <li className={reveal ? "list list--active-3" : "list"}>
          {langs?.home.banner.mobile}
        </li>
        <li className={reveal ? "list list--active-4" : "list"}>
          {langs?.home.banner.mindset}
        </li>
      </ul>
      <div
        className={
          reveal
            ? "course-banner__content course-banner__content--reveal"
            : "course-banner__content"
        }
      >
        <p>{langs?.home.banner.title_2}</p>
        <p>
          {langs?.home.banner.content_2}
        </p>
      </div>
    </div>
  );
};

export default CourseBanner;
