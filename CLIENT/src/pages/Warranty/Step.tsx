import React from "react";
import { ILangs } from "../../interfaces/lang";

interface WarrantyStepProps {
  langs: ILangs;
}

const WarrantyStep: React.FunctionComponent<WarrantyStepProps> = (props) => {
  const { langs } = props;

  return (
    <div className="warranty__step">
      <h3 className="step__title">{langs?.warranty.step.title}</h3>
      <p className="step__note">{langs?.warranty.step.note}</p>

      <div className="step__group">
        <h3 className="group__title">{langs?.warranty.step.step_1.title}</h3>
        <p className="group__content">{langs?.warranty.step.step_1.content}</p>
        <ul className="group__list">
          <li className="list__inner">{langs?.warranty.step.step_1.list_1}</li>
          <li className="list__inner">{langs?.warranty.step.step_1.list_2}</li>
          <li className="list__inner">{langs?.warranty.step.step_1.list_3}</li>
        </ul>
      </div>

      <div className="step__group">
        <h3 className="group__title">{langs?.warranty.step.step_2.title}</h3>
        <p className="group__content">{langs?.warranty.step.step_2.content}</p>
        <ul className="group__list">
          <li className="list__inner">{langs?.warranty.step.step_2.address_1}</li>
          <li className="list__inner">{langs?.warranty.step.step_2.address_2}</li>
        </ul>
        <p className="group__note">{langs?.warranty.step.step_2.note}</p>
      </div>

      <div className="step__group">
        <h3 className="group__title">{langs?.warranty.step.step_3.title}</h3>
        <p className="group__note">{langs?.warranty.step.step_3.content}</p>
      </div>
    </div>
  );
};

export default WarrantyStep;
