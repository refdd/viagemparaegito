import CardHotel from "@/components/cards/CardHotel";
import React from "react";

function HotelAccommodation({ hotels }) {
  return (
    <div>
      <p className="text-[#17233e] text-2xl  capitalize font-bold my-2">
        Alberghi
      </p>
      <div className="grid grid-cols-1 gap-3 mt-5 md:grid-cols-3">
        {hotels?.map((hotel) => (
          <CardHotel
            key={hotel?.id}
            image={hotel?.image}
            title={hotel?.title}
            stars={hotel?.stars}
            link={hotel?.link}
          />
        ))}
      </div>
    </div>
  );
}

export default HotelAccommodation;
