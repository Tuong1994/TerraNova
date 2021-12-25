import { MenuReducer } from './reducers/MenuReducer';
import { combineReducers, createStore, applyMiddleware } from "redux";
import { UserReducer } from "./reducers/UserReducer";
import { ModalReducer } from "./reducers/ModalReducer";
import { PaginationReducer } from "./reducers/PaginationReducer";
import { ProductReducer } from "./reducers/ProductReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";
import { ToastReducer } from "./reducers/ToastReducer";
import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  ProductReducer,
  UserReducer,
  PaginationReducer,
  LoadingReducer,
  ModalReducer,
  ToastReducer,
  MenuReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export type ReducerState = ReturnType<typeof rootReducer>;
