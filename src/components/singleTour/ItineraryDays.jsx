"use client";
import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

function ItineraryDays({ daysItinerary }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandAll = () => {
    setIsExpanded(!isExpanded);
    setActiveIndex(isExpanded ? null : 0); // Close all items if expanding, else open the first item.
  };

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-5 px-4 ">
      <div className="">
        <button
          className="mb-4 text-blue-500 underline"
          onClick={handleExpandAll}
        >
          {isExpanded ? "Chiudi tutte le schede" : "Apri Tutte le tabe"}
        </button>
        {daysItinerary.map((q, index) => (
          <div key={index} className="border mb-4 rounded shadow-lg py-5 px-1">
            <button
              className="flex items-center gap-2 md:gap-5 w-full"
              onClick={() => handleClick(index)}
            >
              <div className="">
                <div className="flex flex-col items-center justify-center h-[60px] w-[60px] rounded-full bg-bsBlue">
                  <span className="text-[16px] text-white font-medium">
                    G {index + 1}
                  </span>
                  <FaAngleUp className="text-[16px] text-white" />
                </div>
              </div>
              <div className="">
                <h3 className="text-[16px] text-left font-semibold capitalize text-colorDark">
                  ({q.title})
                </h3>
              </div>
            </button>
            {(isExpanded || activeIndex === index) && (
              <div className="flex flex-col space-y-3 min-h-0">
                <div className="mt-4 text-base text-gray-500 capitalize">
                  <div
                    dangerouslySetInnerHTML={{ __html: q.body ? q.body : "" }}
                    className="textEditor"
                  ></div>
                </div>
                <div className="flex flex-col space-y-3"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItineraryDays;
