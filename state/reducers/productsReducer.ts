import ActionTypes from "../actionTypes/index";
import { productsReducerAction } from "../action";
import { product } from "../../types";

const initalState: product[] = [];

export const products = (
  state = initalState,
  action: productsReducerAction
) => {
  switch (action.type) {
    case ActionTypes.GETPRODUCTS:
      return (state = action.payload);

    default:
      return state;
  }
};
