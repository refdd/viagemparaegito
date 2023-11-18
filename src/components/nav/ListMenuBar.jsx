import Link from "next/link";
import React from "react";

function ListMenuBar({ menuBar, dataManu, handleCloseMenu }) {
  return (
    <ul
      className={` ${
        menuBar ? "flex" : "hidden"
      }  lg:hidden flex-col p-6 bg-white border-y overflow-y-auto h-screen pb-40 `}
    >
      <li className=" text-lg text-[#051036]  font-semibold  py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
        <Link legacyBehavior href={"/"}>
          Home
        </Link>
      </li>
      {dataManu?.map((menu) => (
        <li
          onClick={handleCloseMenu}
          key={menu?.id}
          className=" text-lg text-[#051036]  font-semibold  py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer"
        >
          <Link href={`/${menu?.slug}`}>{menu?.title}</Link>
        </li>
      ))}

      <li className=" text-lg text-[#051036]  font-semibold  py-4  hover:text-[#3554d1] md:hover:bg-[#3554d10d] px-2 cursor-pointer">
        <Link href={"/personalizza-il-tuo-viaggio"}>
          <span className="py-1 px-1 rounded-lg flex items-center justify-center bg-bsBlue text-white">
            Personalizza il tuo viaggio
          </span>
        </Link>
      </li>
    </ul>
  );
}

export default ListMenuBar;
