import React from "react";
import { Link } from "react-router-dom";
import { ILangs } from "../../../interfaces/lang";

interface RouteCategoryProps {
  langs: ILangs;
  categoryList: any;
}

const RouteCategory: React.FunctionComponent<RouteCategoryProps> = (props) => {
  const { categoryList, langs } = props;

  return (
    <div className="course-route__category">
      <div className="category__list">
        <div className="list__item">
          <div className="item__background">
            {langs?.course.route.category.title_1}
          </div>
        </div>
        {categoryList.map((i: any) => {
          return (
            <Link
              to={i.link}
              className="list__item"
              key={i.id}
              style={{ backgroundColor: i.background }}
            >
              <img className="item__img" src={i.imgSrc} alt="img" />
              <div className="item__content">
                <p>{i.title}</p>
                <p>
                  {i.shortTerm} {langs?.time.months}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="category__line"></div>

      <div className="category__list">
        <div className="list__item">
          <div className="item__background">
            {langs?.course.route.category.title_2}
          </div>
        </div>
        {categoryList.slice(0, 4).map((i: any) => {
          return (
            <Link
              to={i.link}
              className="list__item"
              key={i.id}
              style={{ backgroundColor: i.background }}
            >
              <img className="item__img" src={i.imgSrc} alt="img" />
              <div className="item__content">
                <p>{i.title}</p>
                <p>
                  {i.longTerm} {langs?.time.months}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RouteCategory;
