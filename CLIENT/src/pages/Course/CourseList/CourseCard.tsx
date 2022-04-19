import React from "react";
import * as Card from "../../../components/Card";
import { Link } from "react-router-dom";
import { ICourse } from "../../../models/Course";
import { ELangs } from "../../../interfaces/lang";

interface CourseCardProps {
  course: ICourse;
  lang: string;
}

const CourseCard: React.FunctionComponent<CourseCardProps> = (props) => {
  const { course, lang } = props;

  const renderCourseName = () => {
    if (lang === ELangs.ENG) {
      return course.nameENG && course.nameENG.length > 30 ? (
        <p className="content__name">{course.nameENG.substr(0, 30)}...</p>
      ) : (
        <p className="content__name">{course.nameENG}</p>
      );
    } else if (lang === ELangs.VN) {
      return course.nameVN && course.nameVN.length > 30 ? (
        <p className="content__name">{course.nameVN.substr(0, 30)}...</p>
      ) : (
        <p className="content__name">{course.nameVN}</p>
      );
    }
  };

  return (
    <Link to={`/courseDetail/${course.id}`} className="inner__link">
      <Card.Wrapper className="link__card">
        <Card.Img
          className="card__image"
          src="../img/product_img.jpg"
          alt={course.nameENG}
        />
        <Card.Body className="card__content">
          {renderCourseName()}

          {/* <p className="content__price">
            {course?.price?.toLocaleString()} VND
          </p> */}
        </Card.Body>
        <Card.Footer className="card__features"></Card.Footer>
      </Card.Wrapper>
    </Link>
  );
};

export default CourseCard;
