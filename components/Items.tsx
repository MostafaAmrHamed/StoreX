import React, { useEffect } from "react";
import { itemProps, item } from "../types";
import Item from "./Item";
import { useSelector } from "react-redux";
import { State } from "../state";

const Items: React.FC<itemProps> = ({ items }) => {
  const filter = useSelector((state: State) => state.filter);
  let dataFilter: item[];
  if (filter === "all") {
    dataFilter = items;
  } else {
    dataFilter = items.filter((item) => item.category === filter);
  }
  return (
    <div className="grid gap-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {dataFilter.map((item, index) => {
        return (
          <Item
            key={index}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
            category={item.category}
          />
        );
      })}
    </div>
  );
};

export default Items;
