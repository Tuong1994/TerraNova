import React from "react";
import { ILangs } from "../../interfaces/lang";

interface WarrantyConditionProps {
  langs: ILangs;
}

const WarrantyCondition: React.FunctionComponent<WarrantyConditionProps> = (
  props
) => {
  const { langs } = props;

  return (
    <div className="warranty__condition">
      <h3 className="condition__title">{langs?.warranty.condition.title}</h3>

      <div className="condition__group">
        <h3 className="group__title">
          {langs?.warranty.condition.enough.title}
        </h3>
        <ul className="group__list">
          <li className="list__inner">
            {langs?.warranty.condition.enough.list_1}
          </li>
          <li className="list__inner">
            {langs?.warranty.condition.enough.list_2}
          </li>
          <li className="list__inner">
            {langs?.warranty.condition.enough.list_3}
          </li>
          <li className="list__inner">
            {langs?.warranty.condition.enough.list_4}
          </li>
          <li className="list__inner">
            {langs?.warranty.condition.enough.list_5}
          </li>
        </ul>
      </div>

      <div className="condition__group">
        <h3 className="group__title">
          {langs?.warranty.condition.notEnough.title}
        </h3>
        <ul className="group__list">
          <li className="list__inner">
            {langs?.warranty.condition.notEnough.list_1}
          </li>
          <li className="list__inner">
            {langs?.warranty.condition.notEnough.list_2}
          </li>
          <li className="list__inner">
            {langs?.warranty.condition.notEnough.list_3}
          </li>
          <li className="list__inner">
            {langs?.warranty.condition.notEnough.list_4}
          </li>
          <li className="list__inner">
            {langs?.warranty.condition.notEnough.list_5}
          </li>
          <li className="list__inner">
            {langs?.warranty.condition.notEnough.list_6}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WarrantyCondition;
