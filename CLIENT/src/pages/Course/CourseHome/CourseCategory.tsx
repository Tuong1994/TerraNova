import React from "react";
import Layer from "../../../components/Layer";
import { ILangs } from "../../../interfaces/lang";

interface CourseCategoryProps {
  langs: ILangs;
}

const CourseCategory: React.FunctionComponent<CourseCategoryProps> = (
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
    <div className="course-home__category">
      <h3 className="category__title">{langs?.course.home.category.title}</h3>
      <div className="category__list">
        {categoryList.map((i) => {
          return (
            <div className="list__item">
              <Layer
                key={i.id}
                link={i.path}
                title={i.title}
                icon={i.icon}
                background={i.color}
              />
            </div>
          );
        })}
      </div>
      <div className="category__wave"></div>
    </div>
  );
};

export default CourseCategory;
