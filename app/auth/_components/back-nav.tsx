'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const BackNav = () => {
  const navigate = useRouter();

  return (
    <div className="absolute left-4 top-4">
      <button
        role="link"
        className="flex items-center gap-2"
        onClick={() => navigate.back()}
      >
        <BsArrowLeft />
        Kembali
      </button>
    </div>
  );
};

export default BackNav;
