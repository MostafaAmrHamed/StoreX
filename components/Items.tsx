import React from "react";
import { itemProps } from "../types";
import Item from "./Item";

const Items: React.FC<itemProps> = ({ items }) => {
  return (
    <div className="grid gap-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item, index) => {
        return (
          <Item
            key={index}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
          />
        );
      })}
    </div>
  );
};

export default Items;
