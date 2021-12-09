import React, { useEffect, useState } from "react";
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

  return (
    <div className=" xl:m-auto xl:w-[1440px]">
      <div className="flex flex-col mt-5">
        <Button color="blue" text="Return to Product Page" link="/" />
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
            There is no product in cart
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
