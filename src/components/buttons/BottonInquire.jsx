"use client";
import React, { useEffect, useState } from "react";

function BottonInquire({}) {
  const [showBottom, setshowBottom] = useState(true);

  const scrollToInquerForm = () => {
    // Scroll to the inquerForm div
    const inquerForm = document.getElementById("inquerForm");
    if (inquerForm) {
      window.scrollTo({
        top: inquerForm.offsetTop,
        behavior: "smooth", // Add smooth scrolling effect
      });
      setTimeout(() => {
        setshowBottom(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Logic to handle scrolling
      setshowBottom(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        showBottom
          ? "md:hidden fixed bottom-0 container mx-auto z-50  "
          : " hidden"
      }
    >
      <div className=" flex justify-center items-center py-4 bg-bsBlue rounded-t-lg   ">
        <button
          className="twark text-2xl text-white font-sans capitalize bg-colorDark py-1 px-8 rounded-lg font-medium"
          onClick={scrollToInquerForm}
        >
          Richiesta Preventivo{" "}
        </button>
      </div>
    </div>
  );
}

export default BottonInquire;
