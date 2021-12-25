import React from "react";
import Logo from "../../../components/Logo/Logo";
import ConsultationForm from "./ConsultationForm";

const Consultation: React.FunctionComponent<{}> = (props) => {
  return (
    <div className="home__consultation">
      <ConsultationForm />
      <Logo className="consultation__logo" />
    </div>
  );
};

export default Consultation;
