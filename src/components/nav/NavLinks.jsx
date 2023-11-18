import Link from "next/link";
import React from "react";

function NavLinks({ menuData }) {
  return (
    <div className="">
      <div className=" flex items-center  justify-between ">
        <ul className="flex items-center flex-1 gap-20">
          <li className="flex justify-center items-center">
            <Link href={`/`}>
              <span className="text-white text-base font-medium  capitalize  transition-all hover:text-[#0a58ca]">
                Home
              </span>
            </Link>
          </li>
          {menuData?.map((menu) => (
            <li key={menu?.id} className="flex justify-center items-center">
              <Link href={`/${menu?.slug}`}>
                <span className="text-white text-base font-medium  capitalize  transition-all hover:text-[#0a58ca]">
                  {menu?.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {/* button inquery */}
        <Link href={`/personalizza-il-tuo-viaggio`}>
          <div className="h-[50px] bg-colorWhite px-8 flex justify-center items-center rounded cursor-pointer ">
            <button className="text-colorDark font-normal text-sm ">
              Personalizza il tuo viaggio
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavLinks;
