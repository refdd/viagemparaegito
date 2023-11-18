import React from "react";

function HeaderSection({ title, desc }) {
  return (
    <div className="flex flex-col ">
      <p className="text-[26px] md:text-3xl font-semibold  ">{title}</p>
      <p className="text-base md:text-lg text-colorLight ">{desc}</p>
    </div>
  );
}

export default HeaderSection;
