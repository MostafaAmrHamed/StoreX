import React, { useState } from "react";
import Button from "./ButtonComponent";
import { productProps, cart } from "../types";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

const Product: React.FC<productProps> = ({ product }) => {
  const dispatch = useDispatch();
  const { addToCart } = bindActionCreators(actionCreators, dispatch);
  const [amount, setAmount] = useState(1);
  const handleCart = () => {
    addToCart(cartItem);
  };
  const cartItem: cart = {
    id: product.id,
    title: product.title,
    image: product.image,
    price: product.price,
    amount: amount,
    totalPrice: 0,
  };
  return (
    <div className="flex flex-col m-auto md:w-[1440px] mt-5">
      <Button color="blue" text="Back to Products Page" link="/" />
      <div className="flex flex-col items-center md:flex-row mt-5 gap-10">
        <div className="w-[250px] md:w-[450px]  pr-5">
          <img src={product.image} className="w-full" />
        </div>
        <div>
          <h1 className="text-xl md:text-3xl pb-5 text-red-600">
            {product.title}
          </h1>
          <p className="lg:w-1/2 leading-8">{product.description}</p>
          <div className="flex justify-between md:justify-start md:gap-10 text-xl py-5">
            <h1>Price: ${product.price}</h1>
            <p>Rate: {product.rating.rate}</p>
          </div>
          <div className="flex justify-evenly text-2xl md:w-[200px]">
            <p
              className="font-bold cursor-pointer"
              onClick={() => setAmount(amount > 1 ? amount - 1 : 1)}
            >
              -
            </p>
            <p>{amount}</p>
            <p className="cursor-pointer" onClick={() => setAmount(amount + 1)}>
              +
            </p>
          </div>
          <div className="flex justify-center md:justify-start mt-5">
            <Button
              color="red"
              text="Add To Cart"
              link={`/cart`}
              handle={handleCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
