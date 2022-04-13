import { ModalAction } from "../actions/ModalAction";
import { EModalActionTypes } from "../actionTypes/ModalActionTypes";

interface IModalStateDefault {
  isConsult: boolean;
  isShipment: boolean;
  isPayment: boolean;
  isOrder: boolean;
}

const stateDefault: IModalStateDefault = {
  isConsult: false,
  isShipment: false,
  isPayment: false,
  isOrder: false,
};

export const ModalReducer = (state = stateDefault, action: ModalAction) => {
  switch (action.type) {
    case EModalActionTypes.OPEN_CONSULT_MODAL: {
      let newState = { ...state };
      newState.isConsult = true;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.OPEN_SHIPMENT_MODAL: {
      let newState = { ...state };
      newState.isShipment = true;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.OPEN_PAYMENT_MODAL: {
      let newState = { ...state };
      newState.isPayment = true;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.OPEN_ORDER_MODAL: {
      let newState = { ...state };
      newState.isOrder = true;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.CLOSE_CONSULT_MODAL: {
      let newState = { ...state };
      newState.isConsult = false;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.CLOSE_SHIPMENT_MODAL: {
      let newState = { ...state };
      newState.isShipment = false;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.CLOSE_PAYMENT_MODAL: {
      let newState = { ...state };
      newState.isPayment = false;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.CLOSE_ORDER_MODAL: {
      let newState = { ...state };
      newState.isOrder = false;
      state = newState;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
