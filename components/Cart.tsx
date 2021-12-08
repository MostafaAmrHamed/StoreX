import React from "react";
import Button from "./ButtonComponent";
const Cart = () => {
  return (
    <div className="flex flex-col m-auto w-[1440px] mt-5">
      <Button color="blue" text="Return to Product Page" link="" />
      <div className="grid grid-cols-4 border-b-4 border-red-400 text-center mt-5">
        <p> Product Name</p>
        <p> Price</p>
        <p> Amount</p>
        <p> Total Price</p>
      </div>
    </div>
  );
};

export default Cart;
