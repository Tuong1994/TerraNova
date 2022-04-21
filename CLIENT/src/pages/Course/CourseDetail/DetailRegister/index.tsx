import React from "react";
import { ILangs } from "../../../../interfaces/lang";
import RegisterForm from "./RegisterForm";
import RegisterSchedule from "./RegisterSchedule";

interface DetailRegisterProps {
  langs: ILangs;
}

const DetailRegister: React.FunctionComponent<DetailRegisterProps> = (
  props
) => {
  const { langs } = props;

  return (
    <div className="course-detail__register">
      <div className="register__title">
        {langs?.course.detail.register.mainTitle}
      </div>

      <div className="register__line"></div>

      <div className="register__content">
        <RegisterSchedule langs={langs} />
        <RegisterForm langs={langs} />
      </div>
    </div>
  );
};

export default DetailRegister;
