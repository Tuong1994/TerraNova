import { combineReducers, createStore, applyMiddleware } from "redux";
import { OrderReducer } from './reducers/OrderReducer';
import { UserReducer } from "./reducers/UserReducer";
import { ModalReducer } from "./reducers/ModalReducer";
import { PaginationReducer } from "./reducers/PaginationReducer";
import { ProductReducer } from "./reducers/ProductReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";
import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  ProductReducer,
  UserReducer,
  PaginationReducer,
  LoadingReducer,
  ModalReducer,
  OrderReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export type ReducerState = ReturnType<typeof rootReducer>;
