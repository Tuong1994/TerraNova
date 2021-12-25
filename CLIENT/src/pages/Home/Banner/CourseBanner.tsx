import React from "react";
import * as customHook from "../../../hooks/index";

const CourseBanner: React.FunctionComponent<{}> = (props) => {
  const [reveal, setReveal] = React.useState<boolean>(false);
  const bannerRef = React.useRef<any>(null);
  customHook.useReveal(bannerRef, setReveal);

  return (
    <div className="home__course-banner" ref={bannerRef}>
      <ul className="course-banner__list">
        <li className={reveal ? "list list--active-1" : "list"}>
          Front End Programming
        </li>
        <li className={reveal ? "list list--active-2" : "list"}>Mainboard</li>
        <li className={reveal ? "list list--active-3" : "list"}>
          Back End Programming
        </li>
        <li className={reveal ? "list list--active-3" : "list"}>
          Mobile Progamming
        </li>
        <li className={reveal ? "list list--active-4" : "list"}>
          UI/UX Design
        </li>
      </ul>
      <div
        className={
          reveal
            ? "course-banner__content course-banner__content--reveal"
            : "course-banner__content"
        }
      >
        <p>COURSES</p>
        <p>
          Gains knownledge
          <br />
          for yourself
        </p>
      </div>
    </div>
  );
};

export default CourseBanner;
