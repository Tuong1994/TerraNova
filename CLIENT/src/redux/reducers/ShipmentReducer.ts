import { IShipment } from "../../models/Shipment";
import { ShipmentAction } from "../actions/ShipmentAction";
import { EShipmentActionTypes } from "../actionTypes/ShipmentActionTypes";

interface IStateDefault {
  shipment: IShipment;
}

const stateDefault: IStateDefault = {
  shipment: {},
};

export const ShipmentReducer = (
  state = stateDefault,
  action: ShipmentAction
) => {
  switch (action.type) {
    case EShipmentActionTypes.ADD_SHIPMENT: {
      let newState = { ...state };
      newState.shipment = action.payload;
      state = newState;
      return { ...state };
    }
    case EShipmentActionTypes.REMOVE_SHIPMENT: {
        let newState = { ...state };
        newState.shipment = {};
        state = newState;
        return { ...state };
      }
    default:
      return { ...state };
  }
};
