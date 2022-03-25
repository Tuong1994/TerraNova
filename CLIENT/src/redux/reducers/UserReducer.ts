import { ACCESSTOKEN, ACCOUNT } from "./../../configs/setting";
import { UserAction } from "../actions/UserAction";
import { EUserActionTypes } from "../actionTypes/UserActionTypes";
import { IUser } from "../../models/User";

interface IUserStateDefault {
  consultationDetail: {
    name?: string;
    email?: string;
    phone?: string;
  };
  account?: IUser | null;
}

let userAccount: any = {};
if (localStorage.getItem(ACCOUNT)) {
  let userInfo = localStorage.getItem(ACCOUNT);
  userAccount = JSON.parse(userInfo || "");
}

const stateDefault: IUserStateDefault = {
  consultationDetail: {},
  account: userAccount,
};

export const UserReducer = (state = stateDefault, action: UserAction) => {
  switch (action.type) {
    case EUserActionTypes.SIGN_IN: {
      let newState = { ...state };
      newState.account = action.payload;
      state = newState;
      return { ...state };
    }
    case EUserActionTypes.LOG_OUT: {
      localStorage.removeItem(ACCESSTOKEN);
      localStorage.removeItem(ACCOUNT);
      state.account = null;
      return { ...state };
    }
    case EUserActionTypes.CONSULTATION: {
      let newState = { ...state };
      newState.consultationDetail = action.payload;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
