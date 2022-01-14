import React, { useState, useEffect } from "react";
import Toggler from "./NavbarComponents/Toggler";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import { useSelector } from "react-redux";

export default function NavbarComponent() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [cartLength, setCartLength] = useState(0);
  const dispatch = useDispatch();
  const { filterChange } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state: State) => state.cart);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartItem"));
    if (cart) setCartLength(cart.length);
  }, [state]);
  return (
    <header className="text-lg select-none bg-red-700 text-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center w-full py-4 px-2">
          <div
            id="image__container"
            className="w-60 md:w-36 lg:w-60 cursor-pointer"
          >
            <Link href="/">
              <a>
                <img
                  src="/StoreX.png"
                  alt="StoreX logo"
                  className="w-full h-full object-contain"
                />
              </a>
            </Link>
          </div>
          <div>
            <Toggler openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
            <nav className="hidden md:!block">
              <ul className="flex gap-4 items-center">
                <li className="hover:scale-110 transition duration-500 ease-in-out">
                  <Link href="/" passHref>
                    <a onClick={() => filterChange("all")}>
                      <h2> All </h2>
                    </a>
                  </Link>
                </li>
                <li
                  onClick={() => filterChange("men's clothing")}
                  className="hover:scale-110 transition duration-500 ease-in-out"
                >
                  <Link href="/" passHref>
                    <a>
                      <h2> Men's clothing </h2>
                    </a>
                  </Link>
                </li>
                <li className="hover:scale-110 transition duration-500 ease-in-out">
                  <Link href="/" passHref>
                    <a onClick={() => filterChange("women's clothing")}>
                      <h2> Women's clothing </h2>
                    </a>
                  </Link>
                </li>
                <li className="hover:scale-110 transition duration-500 ease-in-out">
                  <Link href="/" passHref>
                    <a onClick={() => filterChange("jewelery")}>
                      <h2> Jewelery </h2>
                    </a>
                  </Link>
                </li>
                <li className="hover:scale-110 transition duration-500 ease-in-out">
                  <Link href="/" passHref>
                    <a onClick={() => filterChange("electronics")}>
                      <h2> Electronics </h2>
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hidden md:!block hover:scale-110 transition duration-500 ease-in-out">
            <Link href="/cart">
              <div className="flex flex-col relative">
                <p className=" absolute right-[-5px] top-[-10px] bg-gray-800 w-6 h-6 flex items-center justify-center rounded-full">
                  {cartLength}
                </p>
                <ShoppingCartIcon fontSize="large" />
              </div>
            </Link>
          </div>
        </div>

        <nav
          className={` ${
            openNavbar ? "block" : "hidden"
          } transform md:!hidden pt-5 mb-4`}
        >
          <ul className="flex flex-col items-center gap-4 w-full pb-5">
            <li>
              <Link href="/" passHref>
                <a onClick={() => filterChange("all")}>
                  <h2> All </h2>
                </a>
              </Link>
            </li>
            <li onClick={() => filterChange("men's clothing")}>
              <Link href="/" passHref>
                <a>
                  <h2> Men's clothing </h2>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a onClick={() => filterChange("women's clothing")}>
                  <h2> Women's clothing </h2>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a onClick={() => filterChange("jewelery")}>
                  <h2> Jewelery </h2>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a onClick={() => filterChange("electronics")}>
                  <h2> Electronics </h2>
                </a>
              </Link>
            </li>
            <Link href="/cart">
              <div className="flex flex-col relative">
                <p className="absolute right-[-5px] top-[-10px] bg-gray-800 w-6 h-6 flex items-center justify-center rounded-full">
                  {cartLength}
                </p>
                <ShoppingCartIcon fontSize="large" />
              </div>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
