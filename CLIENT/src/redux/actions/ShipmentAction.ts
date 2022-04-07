import { EShipmentActionTypes } from "../actionTypes/ShipmentActionTypes";

interface ADD_SHIPMENT {
    type: EShipmentActionTypes.ADD_SHIPMENT,
    payload?: any;
}

interface REMOVE_SHIPMENT {
    type: EShipmentActionTypes.REMOVE_SHIPMENT,
    payload?: any;
}

export type ShipmentAction = ADD_SHIPMENT | REMOVE_SHIPMENT;