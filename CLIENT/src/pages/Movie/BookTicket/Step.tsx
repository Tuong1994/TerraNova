import React from "react";
import { ILangs } from "../../../interfaces/lang";

interface StepProps {
  langs: ILangs;
  stepOne: boolean;
  stepTwo: boolean;
  stepThree: boolean;
}

const Step: React.FunctionComponent<StepProps> = (props) => {
  const { langs, stepOne, stepTwo, stepThree } = props;

  return (
    <div className="book-ticket__step">
      <div className={`step__item ${stepOne && "step__item--active"}`}>
        <p>{langs?.movie.bookTicket.step.step_1}</p>
      </div>
      <div className={`step__item ${stepTwo && "step__item--active"}`}>
        <p>{langs?.movie.bookTicket.step.step_2}</p>
        <div className="item__line">
          <div className="line__inner"></div>
        </div>
      </div>
      <div className={`step__item ${stepThree && "step__item--active"}`}>
        <p>{langs?.movie.bookTicket.step.step_3}</p>
        <div className="item__line">
          <div className="line__inner"></div>
        </div>
      </div>
    </div>
  );
};

export default Step;
