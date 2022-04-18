import React from "react";
import { ILangs } from "../../../interfaces/lang";

interface CoursePartnersProps {
  langs: ILangs;
}

const CoursePartners: React.FunctionComponent<CoursePartnersProps> = (
  props
) => {
  const { langs } = props;

  const partnersList = [
    {
      id: 1,
      logo: "../img/course/partners_logo/unicorn.png",
    },
    {
      id: 2,
      logo: "../img/course/partners_logo/nash-tech.png",
    },
    {
      id: 3,
      logo: "../img/course/partners_logo/hiip.png",
    },
    {
      id: 4,
      logo: "../img/course/partners_logo/fpt.png",
    },
    {
      id: 5,
      logo: "../img/course/partners_logo/eyeq.png",
    },
    {
      id: 6,
      logo: "../img/course/partners_logo/elca.png",
    },
    {
      id: 7,
      logo: "../img/course/partners_logo/dxc.png",
    },
  ];

  return (
    <div className="course-home__partners">
      <h3 className="partners__title">{langs?.course.home.partners.title}</h3>
      <p className="partners__content">{langs?.course.home.partners.content}</p>
      <div className="partners__list">
        {partnersList.map((i) => {
          return (
            <div className="list__logo" key={i.id}>
              <div className="logo__img">
                <img src={i.logo} alt="logo" className="img" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoursePartners;
