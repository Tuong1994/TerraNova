import { EModalActionTypes } from "../actionTypes/ModalActionTypes";

interface OPEN_MODAL {
    type: EModalActionTypes.OPEN_MODAL,
}

interface CLOSE_MODAL {
    type: EModalActionTypes.CLOSE_MODAL,
}

export type ModalAction = OPEN_MODAL | CLOSE_MODAL
