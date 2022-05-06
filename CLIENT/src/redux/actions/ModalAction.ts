import { EModalActionTypes } from "../actionTypes/ModalActionTypes";

interface OPEN_CONSULT_MODAL {
  type: EModalActionTypes.OPEN_CONSULT_MODAL;
}

interface OPEN_SHIPMENT_MODAL {
  type: EModalActionTypes.OPEN_SHIPMENT_MODAL;
}
interface OPEN_PAYMENT_MODAL {
  type: EModalActionTypes.OPEN_PAYMENT_MODAL;
}

interface OPEN_ORDER_MODAL {
  type: EModalActionTypes.OPEN_ORDER_MODAL;
}

interface OPEN_REGISTER_MODAL {
  type: EModalActionTypes.OPEN_REGISTER_MODAL;
}

interface OPEN_PASSWORD_MODAL {
  type: EModalActionTypes.OPEN_PASSWORD_MODAL;
}

interface CLOSE_CONSULT_MODAL {
  type: EModalActionTypes.CLOSE_CONSULT_MODAL;
}

interface CLOSE_SHIPMENT_MODAL {
  type: EModalActionTypes.CLOSE_SHIPMENT_MODAL;
}

interface CLOSE_PAYMENT_MODAL {
  type: EModalActionTypes.CLOSE_PAYMENT_MODAL;
}

interface CLOSE_ORDER_MODAL {
  type: EModalActionTypes.CLOSE_ORDER_MODAL;
}

interface CLOSE_REGISTER_MODAL {
  type: EModalActionTypes.CLOSE_REGISTER_MODAL;
}

interface CLOSE_PASSWORD_MODAL {
  type: EModalActionTypes.CLOSE_PASSWORD_MODAL
}

export type ModalAction =
  | OPEN_CONSULT_MODAL
  | OPEN_SHIPMENT_MODAL
  | OPEN_PAYMENT_MODAL
  | OPEN_ORDER_MODAL
  | OPEN_REGISTER_MODAL
  | OPEN_PASSWORD_MODAL
  | CLOSE_CONSULT_MODAL
  | CLOSE_SHIPMENT_MODAL
  | CLOSE_PAYMENT_MODAL
  | CLOSE_ORDER_MODAL
  | CLOSE_REGISTER_MODAL
  | CLOSE_PASSWORD_MODAL;
