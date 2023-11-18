import React from "react";
import { AiOutlineCalendar, AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

function TourSnapshot({ duration, groupSize, Calendar, guide }) {
  return (
    <div className="mt-5 border-b  pb-10 ">
      <p className="text-[23px]  text-colorDark font-semibold  ">
        Riassunto del tour.
      </p>
      <ul className="grid grid-cols-2 gap-5 lg:grid-cols-4 mt-4">
        <li className=" flex gap-2 ">
          <div className=" mt-2">
            <MdOutlineWatchLater className="text-3xl text-bsBlue" />
          </div>
          <div className="flex flex-col text-sm text-colorDark">
            Durata del Tour <span>{duration}</span>
          </div>
        </li>
        <li className=" flex gap-2 ">
          <div className=" mt-2">
            <AiOutlineUsergroupAdd className="text-3xl text-bsBlue" />
          </div>
          <div className="flex flex-col text-sm text-colorDark">
            <span>Il Tipo del Tour:</span>
            <span>{guide ? guide : "Piccolo Gruppo"}</span>
          </div>
        </li>
        <li className=" flex gap-2 ">
          <div className=" mt-2">
            <AiOutlineCalendar className="text-3xl text-bsBlue" />
          </div>
          <div className="flex flex-col text-sm text-colorDark">
            <span>Giorni di Partenza</span>
            <span>{Calendar}</span>
          </div>
        </li>
        <li className=" flex gap-2 ">
          <div className=" mt-2">
            <FaRegUser className="text-3xl text-bsBlue" />
          </div>
          <div className="flex flex-col text-sm text-colorDark">
            <span>Guida</span>
            <span>Guida professionale in italiano</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default TourSnapshot;
