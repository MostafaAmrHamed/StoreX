import ActionTypes from "../actionTypes";
import { filterReducerAction } from "../action";
export const filter = (state = "all", action: filterReducerAction) => {
  switch (action.type) {
    case ActionTypes.FILTERCHANGE:
      return (state = action.payload);

    default:
      return state;
  }
};
