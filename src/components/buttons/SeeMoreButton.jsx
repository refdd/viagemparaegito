import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

function SeeMoreButton({ slug }) {
  return (
    <div className="mb-5 mt-3">
      <Link href={`/${slug}`}>
        <div className=" group flex items-center mx-auto  gap-2 w-fit rounded transition-all hover:md:bg-lightBlue bg-bsBlue h-16 px-5 md:px-10 cursor-pointer  ">
          <button className=" font-medium  text-[15px] text-white md:font-semibold md:text-lg">
            Scopri di più
          </button>
          <BsArrowUpRight className=" text-lg  text-white " />
        </div>
      </Link>
    </div>
  );
}

export default SeeMoreButton;
