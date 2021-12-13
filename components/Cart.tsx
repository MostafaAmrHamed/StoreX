import React from "react";
import Button from "./ButtonComponent";
import Link from "next/link";
import { cartProps } from "../types";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

const Cart: React.FC<cartProps> = ({ cart }) => {
  const dispatch = useDispatch();
  const { removeFromCart } = bindActionCreators(actionCreators, dispatch);
  return (
    <div className="grid md:grid-cols-5 border-b-4 border-gray-300 text-center pb-5 items-center mt-5 mb-5">
      <Link href={`/product/${cart.id}`}>
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={cart.image} width="70px" />
          <p className="hover:underline">{cart.title}</p>
        </div>
      </Link>
      <p> ${cart.price} </p>
      <p> {cart.amount} </p>
      <p> ${cart.totalPrice} </p>
      <div className="flex justify-center mt-5 md:mt-0">
        <Button
          color="red"
          text="Remove"
          link="#"
          handle={() => {
            removeFromCart(cart.id);
          }}
        />
      </div>
    </div>
  );
};

export default Cart;
