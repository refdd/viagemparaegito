"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MenuIcon from "./MenuIcon";
import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import NavLinks from "./NavLinks";
const ListMenuBar = dynamic(() => import("./ListMenuBar"));

function ListNav({ dataManu, logo }) {
  const [menuBar, setMenuBar] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handelMenubar = () => {
    setMenuBar(!menuBar);
  };
  const handleCloseMenu = () => {
    setMenuBar(false);
  };
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const pathname = usePathname();
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  return (
    <div className={` `}>
      <div
        className={`fixed px-4 z-50 top-0 left-0 ${
          navbar
            ? "bg-[#13357b]"
            : pathname == "/"
            ? "bg-transparent"
            : "bg-[#13357b]"
        }  w-full md:h-[90px] transition-all`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 py-2 items-center">
          {/* logo */}
          <div className=" ">
            <Link href={`/`}>
              <div className="relative w-full h-[40px] md:w-[250px] md:h-[70px]">
                <Image
                  alt="logo_light"
                  src={logo}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={true}
                  quality={60}
                  // placeholder="blur"
                  // blurDataURL={logo}
                  className="object-contain bg-white rounded-md "
                />
              </div>
            </Link>
          </div>
          <div className=" lg:hidden">
            <MenuIcon handelMenubar={handelMenubar} />
          </div>
          <div className=" lg:col-span-3 hidden lg:block">
            <NavLinks menuData={dataManu} />
          </div>
        </div>
        <ListMenuBar
          menuBar={menuBar}
          dataManu={dataManu}
          handleCloseMenu={handleCloseMenu}
        />
      </div>
    </div>
  );
}

export default ListNav;
