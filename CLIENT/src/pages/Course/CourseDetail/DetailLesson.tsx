import React from "react";
import * as Card from "../../../components/Card";
import { ELangs, ILangs } from "../../../interfaces/lang";
import { ICourse, ILesson } from "../../../models/Course";

interface DetailLessonProps {
  lang: string;
  langs: ILangs;
  courseDetail: ICourse;
}

const DetailLesson: React.FunctionComponent<DetailLessonProps> = (props) => {
  const { lang, langs, courseDetail } = props;

  const renderLessonTitle = (lesson: ILesson) => {
    if (lang === ELangs.ENG) {
      return lesson.nameENG;
    } else if (lang === ELangs.VN) {
      return lesson.nameVN;
    } else if (lang === ELangs.CH) {
      return lesson.nameCH;
    }
  };

  return (
    <div className="course-detail__lesson">
      <div className="lesson__inner">
        <h3 className="inner__title">{langs?.course.detail.lesson.title}</h3>
        <div className="inner__list">
          {courseDetail?.lessons?.map((lesson, index) => {
            return (
              <Card.Wrapper className="list__card" key={index}>
                <Card.Img
                  src="../img/product_img.jpg"
                  alt="img"
                  className="card__image"
                />
                <Card.Body className="card__content">
                  <h3 className="content__title">{renderLessonTitle(lesson)}</h3>
                </Card.Body>
              </Card.Wrapper>
            );
          })}
        </div>
      </div>
      <div className="lesson__wave"></div>
    </div>
  );
};

export default DetailLesson;
