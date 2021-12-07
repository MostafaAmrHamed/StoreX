import React from "react";
import { productProps } from "../types";
import Button from "./ButtonComponent";

const Product: React.FC<productProps> = ({ product }) => {
  return (
    <div>
      <Button color="blue" text="Back to Products Page" link="" />
      <div className="flex flex-col items-center md:flex-row mt-5 gap-10">
        <div className="w-[250px] md:w-[450px]  pr-5">
          <img src={product.image} className="w-full" />
        </div>
        <div>
          <h1 className="text-xl md:text-3xl pb-5 text-red-600">
            {product.title}
          </h1>
          <p className="lg:w-1/2 leading-8">{product.description}</p>
          <div className="flex justify-around md:justify-start md:gap-10 text-xl py-5">
            <h1>Price: ${product.price}</h1>
            <p>Rate: {product.rating.rate}</p>
          </div>
          <Button
            color="red"
            text="Add To Cart"
            link={`product/${product.id}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
