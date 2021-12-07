import React from "react";
import Button from "./ButtonComponent";
import { item } from "../types";

const Item: React.FC<item> = ({ id, title, rating, image, price }) => {
  return (
    <div className="flex items-center flex-col gap-2 border-2 border-red-700 rounded-md p-2 hover:shadow-xl hover:scale-105 transition duration-500 ease-in-out">
      <div className=" flex justify-center w-60 h-full">
        <img src={image} className="pb-2 w-full object-contain" />
      </div>
      <p className="w-60 pb-5 text-center">{title}</p>
      <div className="flex w-full justify-between text-lg font-semibold">
        <p>Rate: {rating.rate}</p>
        <p>Price: ${price}</p>
      </div>
      <Button color="red" text="View Product" link={`product/${id}`} />
    </div>
  );
};

export default Item;
