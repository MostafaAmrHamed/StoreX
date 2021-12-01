import ActionTypes from "../actionTypes";
import { product } from "../reducers/productsReducer";

type GetProducts = {
  type: ActionTypes.GETPRODUCTS;
  payload: product[];
};

export type productsReducerAction = GetProducts;
