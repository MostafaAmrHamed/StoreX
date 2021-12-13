import React, { useEffect, useState } from "react";
import Head from "next/head";
import Cart from "../components/Cart";
import Button from "../components/ButtonComponent";
import { useSelector } from "react-redux";
import { State } from "../state";
const cart = () => {
  const data = useSelector((state: State) => state.cart);
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("cartItem")));
  }, [data]);
  useEffect(() => {
    if (!localStorage.getItem("cartItem"))
      localStorage.setItem("cartItem", "[]");
  }, []);
  return (
    <div className=" xl:m-auto xl:w-[1440px]">
      <Head>
        {items.length === 0 ? (
          <title>Cart</title>
        ) : (
          <title>Cart({items.length})</title>
        )}
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      <div className="flex flex-col mt-5">
        <Button color="blue" text="Back to Products Page" link="/" />
        <div className="hidden md:!block">
          <div className="md:grid md:grid-cols-5 md:border-b-4 border-red-400 text-center mt-5">
            <p> Product Name </p>
            <p> Price </p>
            <p> Amount </p>
            <p> Total Price </p>
          </div>
        </div>
      </div>
      <div>
        {items.length === 0 ? (
          <h1 className="text-2xl font-bold text-center mt-5">
            There are no products in cart
          </h1>
        ) : (
          <div>
            {items.map((item, index) => {
              return <Cart cart={item} key={index} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default cart;
