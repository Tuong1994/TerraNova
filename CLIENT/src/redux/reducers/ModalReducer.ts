import { ModalAction } from "../actions/ModalAction";
import { EModalActionTypes } from "../actionTypes/ModalActionTypes";

interface IModalStateDefault {
  isConsult: boolean;
  isShipment: boolean;
  isPayment: boolean;
  isOrder: boolean;
  isRegister: boolean;
  isPassword: boolean;
  isProductList: boolean;
  isAddProduct: boolean;
  isAddShipment: boolean;
  isRate: boolean;
  isTrailer: boolean;
  isBookingTicket: boolean;
  isTimeOut: boolean;
}

const stateDefault: IModalStateDefault = {
  isConsult: false,
  isShipment: false,
  isPayment: false,
  isOrder: false,
  isRegister: false,
  isPassword: false,
  isProductList: false,
  isAddProduct: false,
  isAddShipment: false,
  isRate: false,
  isTrailer: false,
  isBookingTicket: false,
  isTimeOut: false,
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
    case EModalActionTypes.OPEN_REGISTER_MODAL: {
      let newState = { ...state };
      newState.isRegister = true;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.OPEN_PASSWORD_MODAL: {
      let newState = { ...state };
      newState.isPassword = true;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.OPEN_PRODUCT_LIST_MODAL: {
      let newState = { ...state };
      newState.isProductList = true;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.OPEN_ADD_PRODUCT_MODAL: {
      let newState = { ...state };
      newState.isAddProduct = true;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.OPEN_ADD_SHIPMENT_MODAL: {
      let newState = { ...state };
      newState.isAddShipment = true;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.OPEN_RATING_MODAL: {
      let newState = { ...state };
      newState.isRate = true;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.OPEN_TRAILER_MODAL: {
      let newState = { ...state };
      newState.isTrailer = true;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.OPEN_BOOKING_TICKET_MODAL: {
      let newState = { ...state };
      newState.isBookingTicket = true;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.OPEN_TIMEOUT_MODAL: {
      let newState = { ...state };
      newState.isTimeOut = true;
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
    case EModalActionTypes.CLOSE_REGISTER_MODAL: {
      let newState = { ...state };
      newState.isRegister = false;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.CLOSE_PASSWORD_MODAL: {
      let newState = { ...state };
      newState.isPassword = false;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.CLOSE_PRODUCT_LIST_MODAL: {
      let newState = { ...state };
      newState.isProductList = false;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.CLOSE_ADD_PRODUCT_MODAL: {
      let newState = { ...state };
      newState.isAddProduct = false;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.CLOSE_ADD_SHIPMENT_MODAL: {
      let newState = { ...state };
      newState.isAddShipment = false;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.CLOSE_RATING_MODAL: {
      let newState = { ...state };
      newState.isRate = false;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.CLOSE_TRAILER_MODAL: {
      let newState = { ...state };
      newState.isTrailer = false;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.CLOSE_BOOKING_TICKET_MODAL: {
      let newState = { ...state };
      newState.isBookingTicket = false;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.CLOSE_TIMEOUT_MODAL: {
      let newState = { ...state };
      newState.isTimeOut = false;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
