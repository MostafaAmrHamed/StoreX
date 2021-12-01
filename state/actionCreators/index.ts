import { Dispatch } from "redux";
import { product } from "../reducers/productsReducer";
import ActionTypes from "../actionTypes";
import { productsReducerAction } from "../action";
export const addProduct = (products: product[]) => {
  return (dispatch: Dispatch<productsReducerAction>) => {
    dispatch({
      type: ActionTypes.GETPRODUCTS,
      payload: products,
    });
  };
};
