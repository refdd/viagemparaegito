import React from "react";
import PricesInSeasonS from "./PricesInSeasonS";
import HotelAccommodation from "./HotelAccommodation";

function PriceAndAccommodation({ accommodations, prices }) {
  return (
    <div className="mt-5">
      {accommodations ? (
        <>
          <p className="text-center text-xl text-gray-900  capitalize my-3 font-semibold md:text-left">
            Sistemazione
          </p>
          {accommodations?.map((accommodation) => (
            <div
              key={accommodation?.id}
              className="grid grid-cols-1 gap-5 bg-white shadow-md p-4 rounded-md  "
            >
              <div className="lg:col-span-2">
                <HotelAccommodation hotels={accommodation?.hotels} />
              </div>
              <div className="lg:col-span-2">
                <PricesInSeasonS prices={accommodation?.prices} />
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <PricesInSeasonS prices={prices} />
        </>
      )}
    </div>
  );
}

export default PriceAndAccommodation;
