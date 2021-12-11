import ActionTypes from "../actionTypes";
import { product, cart } from "../../types";

type GetProducts = {
  type: ActionTypes.GETPRODUCTS;
  payload: product[];
};
type AddToCart = {
  type: ActionTypes.ADDTOCART;
  payload: cart;
};
type RemoveFromCart = {
  type: ActionTypes.REMOVEFROMCART;
  payload: number;
};
type FilterChange = {
  type: ActionTypes.FILTERCHANGE;
  payload: string;
};
export type cartReducerAction = AddToCart | RemoveFromCart;
export type productsReducerAction = GetProducts;
export type filterReducerAction = FilterChange;
