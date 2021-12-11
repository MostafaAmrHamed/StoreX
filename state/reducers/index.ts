import { products } from "./productsReducer";
import { cart } from "./cartReducer";
import { filter } from "./filterReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({ products, cart, filter });

export type State = ReturnType<typeof reducers>;
export default reducers;
