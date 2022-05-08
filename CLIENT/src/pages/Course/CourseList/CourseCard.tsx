import React from "react";
import * as Card from "../../../components/Card";
import { Link } from "react-router-dom";
import { ICourse } from "../../../models/Course";
import { ELangs, ILangs } from "../../../interfaces/lang";

interface CourseCardProps {
  course: ICourse;
  lang: string;
  langs: ILangs;
}

const CourseCard: React.FunctionComponent<CourseCardProps> = (props) => {
  const { course, lang, langs } = props;

  const [studyWeeks, setStudyWeeks] = React.useState<number>(0);

  React.useEffect(() => {
    if (course && course.trainingTime) {
      const weeks = (course.trainingTime * 4) / 1;
      setStudyWeeks(weeks);
    }
  }, [course]);

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
    } else if (lang === ELangs.CH) {
      return <p className="content__name">{course.nameCH}</p>;
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
        <Card.Body className="card__content">{renderCourseName()}</Card.Body>
        <Card.Footer className="card__desc">
          <ul className="desc__list">
            <li>
              <div className="list__content">
                <i className="fa-solid fa-calendar-days"></i>
                <span>
                  {course.trainingTime} {langs?.time.months} - {studyWeeks}{" "}
                  {langs?.time.weeks}
                </span>
              </div>
            </li>
            <li>
              <div className="list__content">
                <i className="fa-solid fa-book-open"></i>
                <span>
                  {course?.lessons?.length} {langs?.course.list.lessonDesc}
                </span>
              </div>
            </li>
          </ul>
        </Card.Footer>
      </Card.Wrapper>
    </Link>
  );
};

export default CourseCard;
