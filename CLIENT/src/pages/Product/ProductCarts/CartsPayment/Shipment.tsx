import React from "react";
import * as Card from "../../../../components/Card";
import * as content from "../../../../configs/shipment";
import { useSelector } from "react-redux";
import { IShipment } from "../../../../models/Shipment";
import { ReducerState } from "../../../../redux/store";
import utils from "../../../../utils";

interface ShipmentProps {
  shipment: IShipment;
}

const Shipment: React.FunctionComponent<ShipmentProps> = (props) => {
  const { shipment } = props;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  return (
    <Card.Wrapper className="info__card">
      <h3 className="card__title">{langs?.productCarts.modal.shipmentTitle}</h3>
      <Card.Body className="card__content">
        <h5 className="content__title">{langs?.productCarts.modal.receiver}</h5>
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

        <h5 className="content__title">{langs?.productCarts.modal.address}</h5>
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
              <strong>{content.renderWard(lang, parseInt(shipment?.ward || ""))}</strong>
            </div>
          </li>
          <li className="inner__list">
            <div className="list__item">
              <p>{langs?.form.district} : </p>
              <strong>{content.renderDistrict(lang, parseInt(shipment?.district || ""))}</strong>
            </div>
          </li>
          <li className="inner__list">
            <div className="list__item">
              <p>{langs?.form.province} : </p>
              <strong>{content.renderProvince(lang, parseInt(shipment?.province || ""))}</strong>
            </div>
          </li>
        </ul>
      </Card.Body>
    </Card.Wrapper>
  );
};

export default Shipment;
