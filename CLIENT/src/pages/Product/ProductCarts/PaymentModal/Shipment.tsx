import React from "react";
import * as Card from "../../../../components/Card";
import { ILangs } from "../../../../interfaces/lang";
import { IShipment } from "../../../../models/Shipment";

interface ShipmentProps {
  langs: ILangs;
  shipment: IShipment;
  renderWard(): React.ReactNode;
  renderDistrict(): React.ReactNode;
  renderProvince(): React.ReactNode;
}

const Shipment: React.FunctionComponent<ShipmentProps> = (props) => {
  const { langs, shipment, renderWard, renderDistrict, renderProvince } = props;

  return (
    <Card.Wrapper className="body__item">
      <Card.Body>
        <h5 className="item__title">{langs?.productCarts.modal.shipment}</h5>

        <div className="item__content">
          <h5 className="content__title">
            {langs?.productCarts.modal.receiver}
          </h5>
          <ul className="content__inner">
            <li className="inner__list">
              <div className="list__item">
                <p>{langs?.form.name} : </p>
                <strong>{shipment?.userName}</strong>
              </div>
            </li>
            <li className="inner__list">
              <div className="list__item">
                <p>{langs?.form.phone} : </p>
                <strong>{shipment?.phone}</strong>
              </div>
            </li>
            <li className="inner__list">
              <div className="list__item">
                <p>{langs?.form.email} : </p>
                <strong>{shipment?.email}</strong>
              </div>
            </li>
          </ul>
        </div>

        <div className="item__content">
          <h5 className="content__title">
            {langs?.productCarts.modal.address}
          </h5>
          <ul className="content__inner">
            <li className="inner__list">
              <div className="list__item">
                <p>{langs?.form.address} : </p>
                <strong>{shipment?.address}</strong>
              </div>
            </li>
            <li className="inner__list">
              <div className="list__item">
                <p>{langs?.form.ward} : </p>
                <strong>{renderWard()}</strong>
              </div>
            </li>
            <li className="inner__list">
              <div className="list__item">
                <p>{langs?.form.district} : </p>
                <strong>{renderDistrict()}</strong>
              </div>
            </li>
            <li className="inner__list">
              <div className="list__item">
                <p>{langs?.form.province} : </p>
                <strong>{renderProvince()}</strong>
              </div>
            </li>
          </ul>
        </div>
      </Card.Body>
    </Card.Wrapper>
  );
};

export default Shipment;
