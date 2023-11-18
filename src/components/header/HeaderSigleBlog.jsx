import React from "react";

function HeaderSigleBlog({ title, dutations }) {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 py-8 md:py-10">
      <h1 className="text-[26px] text-mainColor  capitalize font-semibold text-center">
        {title}
      </h1>
      <p className="text-[16px] text-[#697488]   text-center ">{dutations}</p>
    </div>
  );
}

export default HeaderSigleBlog;
