"use client";
import React, { useEffect, useState } from "react";
import Itinerary from "./Itinerary";

function ItineraryCruisesDays({ itineraries }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [items, setitems] = useState();

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  useEffect(() => {
    setitems(itineraries[activeIndex]?.items);
  }, [itineraries, activeIndex]);
  // if (!items) return;
  return (
    <div>
      <div className=" mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {itineraries?.map((q, index) => (
            <div key={index} className="">
              <button
                className={`flex  w-full items-center justify-between text-left 
                  gap-2  border border-[#70735d]  py-5 px-3 rounded-lg ${
                    activeIndex === index ? "bg-bsBlue" : "bg-white"
                  }  `}
                onClick={() => handleClick(index)}
              >
                <div className=" flex items-center gap-2">
                  <h2
                    className={` ${
                      activeIndex === index ? "text-white" : "text-[#3d3d3d]"
                    } text-[15px] md:text-base
                   font-bold  capitalize`}
                  >
                    {q.title}
                  </h2>
                </div>
              </button>
            </div>
          ))}
          <div className="md:col-span-2">
            {items && <Itinerary itinerariesDays={items} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItineraryCruisesDays;
