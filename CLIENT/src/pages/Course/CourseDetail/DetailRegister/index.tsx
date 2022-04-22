import React from "react";
import { ILangs } from "../../../../interfaces/lang";
import { ICourse } from "../../../../models/Course";
import RegisterForm from "./RegisterForm";
import RegisterSchedule from "./RegisterSchedule";

interface DetailRegisterProps {
  langs: ILangs;
  courseDetail: ICourse;
}

const DetailRegister: React.FunctionComponent<DetailRegisterProps> = (
  props
) => {
  const { langs, courseDetail } = props;

  return (
    <div className="course-detail__register">
      <div className="register__title">
        {langs?.course.detail.register.mainTitle}
      </div>

      <div className="register__line"></div>

      <div className="register__content">
        <RegisterSchedule langs={langs} course={courseDetail} />
        <RegisterForm langs={langs} course={courseDetail} />
      </div>
    </div>
  );
};

export default DetailRegister;
