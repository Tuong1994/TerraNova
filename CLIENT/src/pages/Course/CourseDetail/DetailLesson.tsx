import React from "react";
import * as Card from "../../../components/Card";
import { ILangs } from "../../../interfaces/lang";

interface DetailLessonProps {
  langs: ILangs;
}

const DetailLesson: React.FunctionComponent<DetailLessonProps> = (props) => {
  const { langs } = props;

  return (
    <div className="course-detail__lesson">
      <div className="lesson__inner">
        <h3 className="inner__title">{langs?.course.detail.lesson.title}</h3>
        <div className="inner__list">
          {[...Array(10)].map((i, index) => {
            return (
              <Card.Wrapper className="list__card" key={index}>
                <Card.Img
                  src="../img/product_img.jpg"
                  alt="img"
                  className="card__image"
                />
                <Card.Body className="card__content">
                  <h3 className="content__title">Lesson</h3>
                </Card.Body>
              </Card.Wrapper>
            );
          })}
        </div>
      </div>
      <div className="lesson__wave">
      </div>
    </div>
  );
};

export default DetailLesson;
