import React from "react";
import * as customHooks from "../../../hooks";
import { ILangs } from "../../../interfaces/lang";

interface CourseBenefitsProps {
  langs: ILangs;
}

const CourseBenefits: React.FunctionComponent<CourseBenefitsProps> = (
  props
) => {
  const { langs } = props;

  const [reveal, setReveal] = React.useState<boolean>(false);

  const revealRef = React.useRef<any>(null);

  customHooks.useReveal(revealRef, setReveal);

  const items = [
    {
      id: 1,
      title: langs?.course.home.benefits.itemTitle_1,
      content: langs?.course.home.benefits.itemContent_1,
      icon: "fa-solid fa-route",
    },
    {
      id: 2,
      title: langs?.course.home.benefits.itemTitle_2,
      content: langs?.course.home.benefits.itemContent_2,
      icon: "fa-solid fa-horse-head",
    },
    {
      id: 3,
      title: langs?.course.home.benefits.itemTitle_3,
      content: langs?.course.home.benefits.itemContent_3,
      icon: "fa-brands fa-gripfire",
    },
    {
      id: 4,
      title: langs?.course.home.benefits.itemTitle_4,
      content: langs?.course.home.benefits.itemContent_4,
      icon: "fa-solid fa-user-group",
    },
    {
      id: 5,
      title: langs?.course.home.benefits.itemTitle_5,
      content: langs?.course.home.benefits.itemContent_5,
      icon: "fa-solid fa-qrcode",
    },
    {
      id: 6,
      title: langs?.course.home.benefits.itemTitle_6,
      content: langs?.course.home.benefits.itemContent_6,
      icon: "fa-solid fa-handshake",
    },
  ];

  return (
    <div className="course-home__benefits" ref={revealRef}>
      <div className="benefits__wrapper">
        <h3 className="wrapper__title">{langs?.course.home.benefits.title}</h3>
        <div className="wrapper__list">
          {items.map((i) => {
            return (
              <div
                key={i.id}
                className={`list__item ${reveal ? "list__item--reveal" : ""}`}
              >
                <div className="item__icon">
                  <span className="icon__inner">
                    <i className={i.icon}></i>
                    <div className="inner__backdrop"></div>
                  </span>
                  <span className="icon__line"></span>
                </div>

                <div className="item__content">
                  <h3 className="content__title">{i.title}</h3>
                  <p className="content__text">{i.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseBenefits;
