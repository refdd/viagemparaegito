import React from "react";
import { BsCheck } from "react-icons/bs";

function OverviewThankYou({ title, body }) {
  return (
    <div className=" container mx-auto  mt-10">
      <div className="relative flex gap-3 items-start pl-9 border-l border-l-[#ccc]">
        <div className=" flex flex-col gap-4">
          <div className="text-[22px] text-[#3d3d3d] capitalize ">
            {title} !
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: body ? body : "",
            }}
            className="text-base text-[#3d3d3d] capitalize textEditor"
          ></div>
        </div>
        <div className="absolute top-0 -left-5 w-10 h-10 rounded-full bg-bsBlue flex justify-center items-center ">
          <BsCheck className="text-4xl text-white" />
        </div>
      </div>
    </div>
  );
}

export default OverviewThankYou;
