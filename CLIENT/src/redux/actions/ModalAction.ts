import { EModalActionTypes } from "../actionTypes/ModalActionTypes";

interface OPEN_CONSULT_MODAL {
    type: EModalActionTypes.OPEN_CONSULT_MODAL,
}

interface OPEN_SHIPMENT_MODAL {
    type: EModalActionTypes.OPEN_SHIPMENT_MODAL,
}
interface CLOSE_MODAL {
    type: EModalActionTypes.CLOSE_MODAL,
}


export type ModalAction = OPEN_CONSULT_MODAL | OPEN_SHIPMENT_MODAL | CLOSE_MODAL
