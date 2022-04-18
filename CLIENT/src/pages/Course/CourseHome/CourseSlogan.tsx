import React from "react";
import { ILangs } from "../../../interfaces/lang";

interface CourseSloganProps {
  langs: ILangs;
}

const CourseSlogan: React.FunctionComponent<CourseSloganProps> = (props) => {
  const { langs } = props;

  return (
    <div className="course-home__slogan">
      <p className="slogan__item">{langs?.course.home.slogan.content_1}</p>
      <p className="slogan__item">{langs?.course.home.slogan.content_2}</p>
    </div>
  );
};

export default CourseSlogan;
