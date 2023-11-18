"use client";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

function InfoTour({ allTripInformation }) {
  const [showInfo, setShowInfo] = useState(true);
  const handleClick = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div className=" mt-6 flex flex-col gap-6 lg:w-[60%]">
      <div className="   ">
        <button
          className="flex items-center gap-4 cursor-pointer "
          onClick={() => handleClick()}
        >
          <p className="text-[22px] text-[#13357b] font-medium  capitalize">
            Info sull Viaggio{" "}
          </p>
          <FaAngleDown
            className={`text-lg text-lightBlue transition-transform  
          `}
          />
        </button>
        {showInfo && (
          <div className="border rounded-md p-4 shadow-lg mt-4">
            <div
              dangerouslySetInnerHTML={{
                __html: allTripInformation ? allTripInformation : "",
              }}
              className="mt-4 text-base text-gray-500 textEditor"
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InfoTour;
