import React from "react";
import { BsStarFill } from "react-icons/bs";

function SingleHeader({ title, price, starsReating }) {
  const stars = Array.from({ length: 4 }, (_, i) => (
    <BsStarFill className="text-xs text-yellow-500" key={i} />
  ));

  return (
    <div className="container mx-auto px-4 mt-8">
      <div className=" flex flex-col gap-2 lg:flex-row lg:justify-between ">
        <h1 className="text-3xl font-semibold text-colorDark flex items-center gap-2">
          {title}
        </h1>
        {/* price */}
        <div className="  flex items-center gap-1 text-lg  font-medium ">
          <span className=" group-hover:text-bsBlue text-lg transition-all text-[#051036]">
            Da
          </span>
          <span className="text-bsBlue text-3xl">€ {price}</span>
          <small className="text-[12px]">Persona</small>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-4">
        <div className="flex flex-wrap gap-5">
          {/* review and star */}
          <div className="flex items-center gap-3">
            <div className=" flex items-center gap-1">{stars}</div>
            <span className="text-colorLight text-sm">3014 recensioni</span>
          </div>
          {/*  */}
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default SingleHeader;
