import ActionTypes from "../actionTypes/index";
import { productsReducerAction } from "../action";
export type product = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
  };
};
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
