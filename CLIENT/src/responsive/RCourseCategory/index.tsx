import React from "react";
import { Link } from "react-router-dom";
import { ILangs } from "../../interfaces/lang";

interface RCourseCategoryProps {
  langs: ILangs;
}

const RCourseCategory: React.FunctionComponent<RCourseCategoryProps> = (
  props
) => {
  const { langs } = props;

  const categoryList = [
    {
      id: 1,
      path: "/courseByCategory/mindSet",
      title: "Mindset",
      icon: "fa-solid fa-brain",
      color: "#f08383",
    },
    {
      id: 2,
      path: "/courseByCategory/mobile",
      title: "Mobile",
      icon: "fa-brands fa-apple",
      color: "#4272d8",
    },
    {
      id: 3,
      path: "/courseByCategory/frontEnd",
      title: "FrontEnd",
      icon: "fa-solid fa-code",
      color: "#6093ff",
    },
    {
      id: 4,
      path: "/courseByCategory/backEnd",
      title: "BackEnd",
      icon: "fa-solid fa-file",
      color: "#555",
    },
    {
      id: 5,
      path: "/courseByCategory/fullStack",
      title: "Fullstack",
      icon: "fa-brands fa-dev",
      color: "#0faf37",
    },
  ];
  return (
    <div className="course-category__responsive">
      <h3 className="responsive__title">{langs?.course.home.category.title}</h3>
      <div className="responsive__list">
        {categoryList.map((i) => {
          return (
            <div className="list__item" key={i.id}>
              <Link to={i.path} className="item__inner" style={{ backgroundColor: i.color }}>
                <div
                  className="inner__icon"
                >
                  <i className={i.icon}></i>
                </div>
              </Link>
              <div className="item__title">{i.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RCourseCategory;
