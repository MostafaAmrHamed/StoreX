import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { product } from "../state/reducers/productsReducer";
import { useDispatch } from "react-redux";
import { actionCreators, store } from "../state";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import Link from "next/link";
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> Home </h1>
      <Link href="/product/1">
        <a> Products </a>
      </Link>
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
