import React from "react";
import { Link } from "react-router-dom";
import { ILangs } from "../../../interfaces/lang";

interface CourseSubjectProps {
  langs: ILangs;
}

const CourseSubject: React.FunctionComponent<CourseSubjectProps> = (props) => {
  const { langs } = props;
  return (
    <div className="course-home__subject">
      <Link to="/courseRoute" className="subject__item">
        <h3 className="item__title">{langs?.course.home.subject.title_1}</h3>
        <p className="item__content">{langs?.course.home.subject.content_1}</p>
      </Link>
      <Link to="/courseRoute" className="subject__item">
        <h3 className="item__title">{langs?.course.home.subject.title_2}</h3>
        <p className="item__content">{langs?.course.home.subject.content_2}</p>
      </Link>
    </div>
  );
};

export default CourseSubject;
