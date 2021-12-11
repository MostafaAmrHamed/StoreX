import { cart as cartType } from "../../types";
import { cartReducerAction } from "../action";
import ActionTypes from "../actionTypes";
const initalState: cartType[] = [];

const calTotalPrice = (amount: number, price: number) => {
  return amount * price;
};

const checkDuplicateItem = (cart: cartType[], cartItem: cartType) => {
  if (cart.length == 0) {
    cart = JSON.parse(localStorage.getItem("cartItem"));
  }
  const exist = cart.filter((item) => {
    return item.id == cartItem.id;
  });

  if (exist[0]) {
    const newCart = cart.filter((item) => {
      return item.id != cartItem.id;
    });
    return [
      ...newCart,
      {
        id: cartItem.id,
        title: cartItem.title,
        image: cartItem.image,
        price: cartItem.price,
        amount: cartItem.amount + exist[0].amount,
        totalPrice: calTotalPrice(
          cartItem.amount + exist[0].amount,
          cartItem.price
        ),
      },
    ];
  } else {
    cartItem.totalPrice = calTotalPrice(cartItem.amount, cartItem.price);
    return [...cart, cartItem];
  }
};
export const cart = (state = initalState, action: cartReducerAction) => {
  switch (action.type) {
    case ActionTypes.ADDTOCART:
      const cartState = checkDuplicateItem(state, action.payload);
      localStorage.setItem("cartItem", JSON.stringify(cartState));
      return cartState;

    case ActionTypes.REMOVEFROMCART:
      const items = JSON.parse(localStorage.getItem("cartItem"));
      const newCart = items.filter((item) => {
        return item.id != action.payload;
      });
      localStorage.setItem("cartItem", JSON.stringify(newCart));
      return (state = newCart);

    default:
      return state;
  }
};
