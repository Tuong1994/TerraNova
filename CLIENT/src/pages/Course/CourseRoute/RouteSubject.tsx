import React from "react";
import { Link } from "react-router-dom";
import { ILangs } from "../../../interfaces/lang";

interface RouteSubjectProps {
  langs: ILangs;
  categoryList: any;
}

const RouteSubject: React.FunctionComponent<RouteSubjectProps> = (props) => {
  const { langs, categoryList } = props;

  return (
    <div className="course-route__subject">
      <div className="subject__item">
        <div className="item__list">
          {categoryList.map((i: any, index: number) => {
            return (
              <Link to={i.link} className="list__inner" key={i.id}>
                <div className="inner__number">{index + 1}</div>
                <div className="inner__content">
                  <span>{i.title}</span>
                  <span>
                    {i.shortTerm} {langs?.time.months}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="item__img">
          <p>{langs?.course.route.subject.title_1}</p>
        </div>
      </div>

      <div className="subject__item">
        <div className="item__list">
          {categoryList.map((i: any, index: number) => {
            return (
              <Link to={i.link} className="list__inner" key={i.id}>
                <div className="inner__number">{index + 1}</div>
                <div className="inner__content">
                  <span>{i.title}</span>
                  <span>
                    {i.longTerm} {langs?.time.months}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="item__img">
          <p>{langs?.course.route.subject.title_2}</p>
        </div>
      </div>
    </div>
  );
};

export default RouteSubject;
