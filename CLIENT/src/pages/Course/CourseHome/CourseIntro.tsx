import React from "react";
import { ILangs } from "../../../interfaces/lang";

interface CourseIntroProps {
  langs: ILangs;
}

const CourseIntro: React.FunctionComponent<CourseIntroProps> = (props) => {
  const { langs } = props;

  return (
    <div className="course-home__intro">
      <div className="intro__content">
        <h3 className="content__title">
          <i className="fa-solid fa-graduation-cap"></i>
          <span>{langs?.course.home.intro.title}</span>
        </h3>
        <p className="content__text">{langs?.course.home.intro.content}</p>
      </div>
      <div className="intro__img">
        <img src="../img/class.jpg" alt="class" />
      </div>
    </div>
  );
};

export default CourseIntro;
