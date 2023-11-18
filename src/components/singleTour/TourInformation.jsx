import React from "react";
import InfoTour from "./InfoTour";

function TourInformation({ TripInformation }) {
  return (
    <div className="mt-7 border-b pb-6 mb-5">
      {/* <p className="text-[23px]  text-colorDark font-semibold  capitalize">
        Info sull Viaggio{" "}
      </p> */}
      <InfoTour allTripInformation={TripInformation} />
    </div>
  );
}

export default TourInformation;
