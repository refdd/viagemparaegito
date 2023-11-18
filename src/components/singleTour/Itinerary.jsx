import React from "react";
import ItineraryDays from "./ItineraryDays";
function Itinerary({ itinerariesDays }) {
  return (
    <div id="Itinerary" className=" mt-5">
      <div className="flex justify-between items-center">
        <h2 className="text-[23px]  text-colorDark font-semibold  capitalize">
          Itinerario
        </h2>
        <span>
          Giorno : <span>({itinerariesDays.length})</span>
        </span>
      </div>
      <ItineraryDays daysItinerary={itinerariesDays} />
    </div>
  );
}

export default Itinerary;
