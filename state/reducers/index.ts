import { products } from "./productsReducer";
import { cart } from "./cartReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({ products, cart });

export type State = ReturnType<typeof reducers>;
export default reducers;
