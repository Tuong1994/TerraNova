import React from "react";
import Logo from "../../../components/Logo";
import ConsultationForm from "./ConsultationForm";

const Consultation: React.FunctionComponent<{}> = (props) => {
  return (
    <div className="home__consultation">
      <ConsultationForm />
      <div className="consultation__logo">
        <Logo className="logo__inner" />
        <ul className="logo__content">
          <li className="content__list">Build your own PC</li>
          <li className="content__list">Gain knownledge for yourself</li>
          <li className="content__list">Enjoy movies with your family</li>
        </ul>
      </div>
    </div>
  );
};

export default Consultation;
