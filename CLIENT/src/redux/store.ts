import { SideBarReducer } from "./reducers/SideBarReducer";
import { ToastReducer } from "./reducers/ToastReducer";
import { LangReducer } from "./reducers/LangReducer";
import { OrderReducer } from "./reducers/OrderReducer";
import { CartsReducer } from "./reducers/CartsReducer";
import { UserReducer } from "./reducers/UserReducer";
import { ModalReducer } from "./reducers/ModalReducer";
import { PaginationReducer } from "./reducers/PaginationReducer";
import { ProductReducer } from "./reducers/ProductReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";
import { ShipmentReducer } from "./reducers/ShipmentReducer";
import { CourseReducer } from "./reducers/CourseReducer";
import { CourseOrderReducer } from "./reducers/CourseOrderReducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  ProductReducer,
  UserReducer,
  PaginationReducer,
  LoadingReducer,
  ModalReducer,
  OrderReducer,
  CartsReducer,
  LangReducer,
  ToastReducer,
  SideBarReducer,
  ShipmentReducer,
  CourseReducer,
  CourseOrderReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export type ReducerState = ReturnType<typeof rootReducer>;
