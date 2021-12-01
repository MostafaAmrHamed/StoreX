import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import { product } from "../state/reducers/productsReducer";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <h1> Navbar </h1>
      {children}
      <h1> Footer </h1>
    </div>
  );
};

export default Layout;

// export async function getStaticProps() {
//   const res = await fetch(`https://fakestoreapi.com/products`);
//   const data: product[] = await res.json();

//   return {
//     props: { data },
//   };
// }
