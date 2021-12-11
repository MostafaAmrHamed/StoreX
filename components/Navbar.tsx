import React, { useState, useEffect } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";
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
    setCartLength(JSON.parse(localStorage.getItem("cartItem")).length);
  }, [state]);
  return (
    <Navbar className="!bg-red-500" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand>
            <Link href="/">
              <img src="/StoreX.png" width={200} className="cursor-pointer" />
            </Link>
          </NavbarBrand>
          <NavbarToggler
            color="white"
            onClick={() => setOpenNavbar(!openNavbar)}
            ripple="light"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav className="flex w-full justify-center">
            <NavLink ripple="light">
              <Link href="/">
                <button
                  onClick={() => {
                    filterChange("all");
                  }}
                  className="focus:outline-none text-base"
                >
                  All
                </button>
              </Link>
            </NavLink>
            <NavLink ripple="light">
              <Link href="/">
                <button
                  onClick={() => {
                    filterChange("men's clothing");
                  }}
                  className="focus:outline-none text-base"
                >
                  Men's Clothing
                </button>
              </Link>
            </NavLink>
            <NavLink ripple="light">
              <Link href="/">
                <button
                  onClick={() => {
                    filterChange("women's clothing");
                  }}
                  className="focus:outline-none text-base"
                >
                  Women's clothing
                </button>
              </Link>
            </NavLink>
            <NavLink ripple="light">
              <Link href="/">
                <button
                  onClick={() => {
                    filterChange("jewelery");
                  }}
                  className="focus:outline-none text-base"
                >
                  Jewelery
                </button>
              </Link>
            </NavLink>
            <NavLink ripple="light">
              <Link href="/">
                <button
                  onClick={() => {
                    filterChange("electronics");
                  }}
                  className="focus:outline-none text-base"
                >
                  Electronics
                </button>
              </Link>
            </NavLink>
          </Nav>
          <Nav>
            <NavLink href="/cart" ripple="light">
              <div className="flex flex-col relative">
                <p className="absolute right-[-5px] top-[-10px] bg-blue-500 px-2 py-1 rounded-full">
                  {cartLength}
                </p>
                <ShoppingCartIcon fontSize="large" />
              </div>
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
