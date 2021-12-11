import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Items from "../components/Items";
import { product } from "../types";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state";
import { bindActionCreators } from "redux";
import { useEffect } from "react";

export default function Home({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const dispatch = useDispatch();
  const { addProduct } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    addProduct(data);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>StoreX</title>
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      <Items items={data} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data: product[] = await res.json();
  return {
    props: { data },
  };
};
