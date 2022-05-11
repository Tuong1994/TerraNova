import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";
import { EShipmentType } from "../../../../models/Order";
import { useDispatch } from "react-redux";
import { EModalActionTypes } from "../../../../redux/actionTypes/ModalActionTypes";

interface DeliveryFieldsProps {
  langs: ILangs;
  options: IOptionsLang;
  isReset: boolean;
  shipmentType: number;
  setShipmentType: React.Dispatch<React.SetStateAction<number>>;
}

const DeliveryFields: React.FunctionComponent<DeliveryFieldsProps> = (
  props
) => {
  const { langs, options, isReset, shipmentType, setShipmentType } = props;

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (shipmentType === EShipmentType.delivery) {
      dispatch({
        type: EModalActionTypes.OPEN_ADD_SHIPMENT_MODAL,
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
    </Card.Wrapper>
  );
};

export default DeliveryFields;
