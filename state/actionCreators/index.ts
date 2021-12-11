import { Dispatch } from "redux";
import { product, cart } from "../../types";
import ActionTypes from "../actionTypes";
import {
  productsReducerAction,
  cartReducerAction,
  filterReducerAction,
} from "../action";
export const addProduct = (products: product[]) => {
  return (dispatch: Dispatch<productsReducerAction>) => {
    dispatch({
      type: ActionTypes.GETPRODUCTS,
      payload: products,
    });
  };
};
export const addToCart = (cart: cart) => {
  return (dispatch: Dispatch<cartReducerAction>) => {
    dispatch({
      type: ActionTypes.ADDTOCART,
      payload: cart,
    });
  };
};
export const removeFromCart = (id: number) => {
  return (dispatch: Dispatch<cartReducerAction>) => {
    dispatch({
      type: ActionTypes.REMOVEFROMCART,
      payload: id,
    });
  };
};
export const filterChange = (filter: string) => {
  return (dispatch: Dispatch<filterReducerAction>) => {
    dispatch({
      type: ActionTypes.FILTERCHANGE,
      payload: filter,
    });
  };
};
