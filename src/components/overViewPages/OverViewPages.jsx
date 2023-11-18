import React from "react";

function OverViewPages({ title, desc }) {
  return (
    <div className="container mx-auto px-4  mt-10">
      <div className="grid grid-cols-1 gap-7 ">
        <div className=" ">
          <div className="flex flex-col my-10 space-y-3 justify-center items-center md:my-14">
            <p className="text-2xl font-semibold text-mainColor  capitalize md:text-3xl  text-center">
              {title}
            </p>
          </div>
          <div className="flex flex-col space-y-9">
            <div
              dangerouslySetInnerHTML={{
                __html: desc ? desc : "",
              }}
              className="textEditor"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverViewPages;
