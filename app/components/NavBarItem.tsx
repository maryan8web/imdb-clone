"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  title: string;
  param: string;
}

const NavBarItem = ({ title, param }: Props) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        className={`m-4 hover:text-amber-600 font-semibold p-2 ${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavBarItem;
