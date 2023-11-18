"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import logoImage from "../../../public/assets/images/logo-light.svg";
import MenuIcon from "./MenuIcon";
import Link from "next/link";
import dynamic from "next/dynamic";
import NavLinks from "./NavLinks";
const ListMenuBar = dynamic(() => import("./ListMenuBar"));

function NavBar({ dataManu, logo }) {
  const [navbar, setNavbar] = useState(false);
  const [menuBar, setMenuBar] = useState(false);

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

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className={` `}>
      <div
        className={`fixed px-4 z-50 top-0 left-0 w-full md:h-[90px] ${
          navbar ? "bg-dark-nav is-sticky" : ""
        } transition-all bg-transparent`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3  py-2  items-center">
          {/* logo */}
          <div className=" ">
            <Link href={`/`}>
              <div className="relative w-full h-[40px]">
                <Image
                  alt="logo_light"
                  src={logo}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={true}
                  quality={60}
                  // placeholder="blur"
                  // blurDataURL={logoImage}
                  className="object-contain "
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

export default NavBar;
