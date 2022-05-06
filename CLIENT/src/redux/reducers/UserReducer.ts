import { ACCESSTOKEN, ACCOUNT } from "./../../configs/setting";
import { UserAction } from "../actions/UserAction";
import { EUserActionTypes } from "../actionTypes/UserActionTypes";
import { IUser } from "../../models/User";

let userAccount: IUser = {};
if (localStorage.getItem(ACCOUNT)) {
  let userInfo = localStorage.getItem(ACCOUNT);
  userAccount = JSON.parse(userInfo || "");
}
interface IUserStateDefault {
  user: IUser | null;
  userAdmin: IUser | null;
  userList: {
    total: number;
    page: number;
    limits: number;
    users: IUser[];
  };
  consultationDetail: IUser;
}

const stateDefault: IUserStateDefault = {
  user: userAccount,
  userAdmin: {},
  userList: {
    total: 0,
    page: 0,
    limits: 0,
    users: [],
  },
  consultationDetail: {},
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
    case EUserActionTypes.GET_USER_LIST: {
      let newState = { ...state };
      newState.userList = action.payload;
      state = newState;
      return { ...state };
    }
    case EUserActionTypes.GET_USER_DETAIL: {
      let newState = { ...state };
      newState.user = action.payload;
      state = newState;
      return { ...state };
    }
    case EUserActionTypes.GET_USER_ADMIN_DETAIL: {
      let newState = { ...state };
      newState.userAdmin = action.payload;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
