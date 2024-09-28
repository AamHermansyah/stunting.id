import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const BackNav = () => {
  return (
    <div>
      <Link href="/" className="flex gap-2">
        <BsArrowLeft fontSize={24} className="my-auto" />
        <h1 className="text-4xl text-primary font-semibold tracking-widest">
          Stunting.id
        </h1>
      </Link>
    </div>
  );
};

export default BackNav;
