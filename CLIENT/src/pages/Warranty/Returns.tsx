import React from "react";
import { ILangs } from "../../interfaces/lang";

interface WarrantyReturnsProps {
  langs: ILangs;
}

const WarrantyReturns: React.FunctionComponent<WarrantyReturnsProps> = (
  props
) => {
  const { langs } = props;

  return (
    <div className="warranty__returns">
      <h3 className="returns__title">{langs?.warranty.returns.title}</h3>
      <p className="returns__content">{langs?.warranty.returns.content}</p>

      <div className="returns__group">
        <h3 className="group__title">
          {langs?.warranty.returns.fullRefund.title}
        </h3>
        <ul className="group__list">
          <li className="list__inner">
            {langs?.warranty.returns.fullRefund.list_1}
          </li>
          <li className="list__inner">
            {langs?.warranty.returns.fullRefund.list_2}
          </li>
        </ul>
      </div>

      <div className="returns__group">
        <h3 className="group__title">{langs?.warranty.returns.charge.title}</h3>
        <ul className="group__list">
          <li className="list__inner">
            {langs?.warranty.returns.charge.list_1}
          </li>
          <li className="list__inner">
            {langs?.warranty.returns.charge.list_2}
          </li>
          <li className="list__inner">
            {langs?.warranty.returns.charge.list_3}
          </li>
          <li className="list__inner">
            {langs?.warranty.returns.charge.list_4}
          </li>
          <li className="list__inner">
            {langs?.warranty.returns.charge.list_5}
          </li>
        </ul>
      </div>

      <p className="returns__note">{langs?.warranty.returns.note}</p>
    </div>
  );
};

export default WarrantyReturns;
