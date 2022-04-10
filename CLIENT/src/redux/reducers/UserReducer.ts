import { ACCESSTOKEN, ACCOUNT } from "./../../configs/setting";
import { UserAction } from "../actions/UserAction";
import { EUserActionTypes } from "../actionTypes/UserActionTypes";
import { IUser } from "../../models/User";

interface IUserStateDefault {
  consultationDetail: IUser;
  user?: IUser | null;
}

let userAccount: IUser = {};
if (localStorage.getItem(ACCOUNT)) {
  let userInfo = localStorage.getItem(ACCOUNT);
  userAccount = JSON.parse(userInfo || "");
}

const stateDefault: IUserStateDefault = {
  consultationDetail: {},
  user: userAccount,
};

export const UserReducer = (state = stateDefault, action: UserAction) => {
  switch (action.type) {
    case EUserActionTypes.SIGN_IN: {
      let newState = { ...state };
      newState.user = action.payload;
      state = newState;
      return { ...state };
    }
    case EUserActionTypes.LOG_OUT: {
      localStorage.removeItem(ACCESSTOKEN);
      localStorage.removeItem(ACCOUNT);
      state.user = null;
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
