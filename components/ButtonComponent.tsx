import React from "react";
import Link from "next/link";
import Button from "@material-tailwind/react/Button";
import { button } from "../types";

const ButtonComponent: React.FC<button> = ({ color, text, link, handle }) => {
  return (
    <div>
      <Link href={`${link}`}>
        <Button
          color={color}
          ripple="light"
          onClick={handle}
          className="rounded px-3 py-1"
        >
          {text}
        </Button>
      </Link>
    </div>
  );
};
export default ButtonComponent;
