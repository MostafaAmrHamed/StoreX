import React from "react";
import { ParsedUrlQuery } from "querystring";
import { product } from "../../types";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Product from "../../components/Product";
interface IdQuery extends ParsedUrlQuery {
  id: string;
}

const product = ({
  productData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="mx-5 md:ml-10">
      <Product product={productData} />
    </div>
  );
};

export default product;
export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { id } = ctx.params as IdQuery;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const productData: product = await response.json();

  return {
    props: {
      productData,
    },
    revalidate: false,
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(`https://fakestoreapi.com/products/`);
  const productsData: product[] = await response.json();

  const paths = productsData.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
