import React from "react";
import { ILangs } from "../../../interfaces/lang";
import { ICourse } from "../../../models/Course";

interface DetailQuestionProps {
  langs: ILangs;
}

const DetailQuestion: React.FunctionComponent<DetailQuestionProps> = (
  props
) => {
  const { langs } = props;

  return (
    <div className="course-detail__question">
      <div className="question__item">
        <h3 className="item__title">
          <i className="fa-solid fa-user"></i>
          <p>{langs?.course.detail.question.title_1}</p>
        </h3>
        <ul className="item__list">
          <li>
            <i className="fa-solid fa-check"></i>
            <p>{langs?.course.detail.question.list_2}</p>
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <p>{langs?.course.detail.question.list_3}</p>
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <p>{langs?.course.detail.question.list_4}</p>
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <p>{langs?.course.detail.question.list_5}</p>
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <p>{langs?.course.detail.question.list_6}</p>
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <p>{langs?.course.detail.question.list_7}</p>
          </li>
        </ul>
      </div>

      <div className="question__item">
        <h3 className="item__title">
        <i className="fa-solid fa-graduation-cap"></i>
          <p>{langs?.course.detail.question.title_2}</p>
        </h3>
        <ul className="item__list">
          <li>
            <i className="fa-solid fa-check"></i>
            <p>{langs?.course.detail.question.list_8}</p>
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <p>{langs?.course.detail.question.list_9}</p>
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <p>{langs?.course.detail.question.list_10}</p>
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <p>{langs?.course.detail.question.list_11}</p>
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            <p>{langs?.course.detail.question.list_12}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailQuestion;
