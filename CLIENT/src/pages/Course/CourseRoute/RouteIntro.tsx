import React from "react";
import { ILangs } from "../../../interfaces/lang";

interface RouteIntroProps {
  langs: ILangs;
}

const RouteIntro: React.FunctionComponent<RouteIntroProps> = (props) => {
  const { langs } = props;

  const iconList = [
    {
      id: 1,
      imgSrc: "../img/course/programming_logo/angular.svg",
    },
    {
      id: 2,
      imgSrc: "../img/course/programming_logo/cloud-computing.svg",
    },
    {
      id: 3,
      imgSrc: "../img/course/programming_logo/css.svg",
    },
    {
      id: 4,
      imgSrc: "../img/course/programming_logo/data-science.svg",
    },
    {
      id: 5,
      imgSrc: "../img/course/programming_logo/docker.svg",
    },
    {
      id: 6,
      imgSrc: "../img/course/programming_logo/html.svg",
    },
    {
      id: 7,
      imgSrc: "../img/course/programming_logo/java.svg",
    },
    {
      id: 8,
      imgSrc: "../img/course/programming_logo/js.svg",
    },
    {
      id: 9,
      imgSrc: "../img/course/programming_logo/flutter.png",
    },
    {
      id: 10,
      imgSrc: "../img/course/programming_logo/nodejs.png",
    },
    {
      id: 11,
      imgSrc: "../img/course/programming_logo/react.png",
    },
    {
      id: 12,
      imgSrc: "../img/course/programming_logo/redux.png",
    },
  ];

  return (
    <div className="course-route__intro">
      <div className="intro__content">
        <h3 className="content__title">{langs?.course.route.intro.title}</h3>
        <p className="content__text">{langs?.course.route.intro.content}</p>
      </div>
      <div className="intro__icons">
        {iconList.map((i) => {
          return (
            <div className="icons__img" key={i.id}>
              <div className="img__inner">
                <img src={i.imgSrc} alt="icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RouteIntro;
