import { products } from "./productsReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({ products });

export type State = ReturnType<typeof reducers>;
export default reducers;
