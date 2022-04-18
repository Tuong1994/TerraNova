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
      title: "Mindset",
      icon: "fa-solid fa-brain",
      color: "#f08383",
    },
    {
      id: 2,
      title: "Mobile",
      icon: "fa-brands fa-apple",
      color: "#4272d8",
    },
    {
      id: 3,
      title: "FrontEnd",
      icon: "fa-solid fa-code",
      color: "#6093ff",
    },
    {
      id: 4,
      title: "BackEnd",
      icon: "fa-solid fa-file",
      color: "#555",
    },
    {
      id: 5,
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
                title={i.title}
                icon={i.icon}
                background={i.color}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseCategory;
