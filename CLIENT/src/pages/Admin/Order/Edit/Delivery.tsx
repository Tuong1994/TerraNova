import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import * as content from "../../../../configs/shipment";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";
import { EShipmentType } from "../../../../models/Order";
import { useDispatch } from "react-redux";
import { EModalActionTypes } from "../../../../redux/actionTypes/ModalActionTypes";
import { IShipment } from "../../../../models/Shipment";
import { EShipmentActionTypes } from "../../../../redux/actionTypes/ShipmentActionTypes";
import utils from "../../../../utils";

interface DeliveryFieldsProps {
  lang: string;
  langs: ILangs;
  options: IOptionsLang;
  isReset: boolean;
  shipment: IShipment;
  shipmentType: number;
  setShipmentType: React.Dispatch<React.SetStateAction<number>>;
  setIsReset: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeliveryFields: React.FunctionComponent<DeliveryFieldsProps> = (
  props
) => {
  const {
    lang,
    langs,
    options,
    isReset,
    shipment,
    shipmentType,
    setShipmentType,
    setIsReset,
  } = props;

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (shipmentType === EShipmentType.delivery) {
      dispatch({
        type: EModalActionTypes.OPEN_ADD_SHIPMENT_MODAL,
      });
    } else if (shipmentType === EShipmentType.noShipment) {
      dispatch({
        type: EShipmentActionTypes.REMOVE_SHIPMENT,
      });
    }
  }, [shipmentType]);

  return (
    <Card.Wrapper className="item__inner item__delivery">
      <h3 className="inner__title">{langs?.admin.order.subTitle_4}</h3>
      <Field
        name="shipmentType"
        placeholder=" "
        isReset={isReset}
        label={langs?.form.shipmentType}
        component={FormControl.Select}
        option={options?.shipmentType}
        groupClassName="inner__control"
        onChange={(value: any) => {
          setShipmentType(value);
        }}
      />

      {utils.checkObjectEmpty(shipment) && (
        <Card.Wrapper className="inner__detail">
          <div
            className="detail__close"
            onClick={() => {
              dispatch({
                type: EShipmentActionTypes.REMOVE_SHIPMENT,
              });
              setIsReset(true);
            }}
          >
            <i className="fa fa-times"></i>
          </div>

          <h4 className="detail__title">
            {langs?.productCarts.modal.receiver}
          </h4>
          <ul className="detail__list">
            <li className="list__inner">
              <p>{langs?.form.name} : </p>
              <p>{shipment.userName}</p>
            </li>
            <li className="list__inner">
              <p>{langs?.form.phone} : </p>
              <p>{shipment.phone}</p>
            </li>
            <li className="list__inner">
              <p>{langs?.form.email} : </p>
              <p>{shipment.email}</p>
            </li>
          </ul>

          <h4 className="detail__title">{langs?.productCarts.modal.address}</h4>
          <ul className="detail__list">
            <li className="list__inner">
              <p>{langs?.form.address} : </p>
              <p>{shipment.address}</p>
            </li>
            <li className="list__inner">
              <p>{langs?.form.district} : </p>
              <p>{content.renderDistrict(lang, shipment.district)}</p>
            </li>
            <li className="list__inner">
              <p>{langs?.form.ward} : </p>
              <p>{content.renderWard(lang, shipment.ward)}</p>
            </li>
            <li className="list__inner">
              <p>{langs?.form.province} : </p>
              <p>{content.renderProvince(lang, shipment.province)}</p>
            </li>
          </ul>
        </Card.Wrapper>
      )}
    </Card.Wrapper>
  );
};

export default DeliveryFields;
