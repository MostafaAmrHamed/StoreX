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
export type cartReducerAction = AddToCart | RemoveFromCart;
export type productsReducerAction = GetProducts;
