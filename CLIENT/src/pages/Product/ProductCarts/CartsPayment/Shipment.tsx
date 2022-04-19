import React from "react";
import * as Card from "../../../../components/Card";
import * as content from "../../../../configs/shipment";
import { useSelector } from "react-redux";
import { IShipment } from "../../../../models/Shipment";
import { ReducerState } from "../../../../redux/store";
import { ELangs } from "../../../../interfaces/lang";
import utils from "../../../../utils";

interface ShipmentProps {
  shipment: IShipment;
}

const Shipment: React.FunctionComponent<ShipmentProps> = (props) => {
  const { shipment } = props;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  const renderWard = () => {
    if (lang === ELangs.ENG) {
      return content.renderWardEng(parseInt(shipment?.ward || ""));
    } else if (lang === ELangs.VN) {
      return content.renderWardVn(parseInt(shipment?.ward || ""));
    } else if (lang === ELangs.CH) {
      return content.renderWardCh(parseInt(shipment?.ward || ""));
    }
  };

  const renderDistrict = () => {
    if (lang === ELangs.ENG) {
      return content.renderDistrictEng(parseInt(shipment?.district || ""));
    } else if (lang === ELangs.VN) {
      return content.renderDistrictVn(parseInt(shipment?.district || ""));
    } else if (lang === ELangs.CH) {
      return content.renderDistrictCh(parseInt(shipment?.district || ""));
    }
  };

  const renderProvince = () => {
    if (lang === ELangs.ENG) {
      return content.renderProvinceEng(parseInt(shipment?.province || ""));
    } else if (lang === ELangs.VN) {
      return content.renderProvinceVn(parseInt(shipment?.province || ""));
    } else if (lang === ELangs.CH) {
      return content.renderProvinceCh(parseInt(shipment?.province || ""));
    }
  }

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
      </Card.Body>
    </Card.Wrapper>
  );
};

export default Shipment;
