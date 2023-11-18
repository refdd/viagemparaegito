import React from "react";
import HeaderSection from "../header/HeaderSection";
import TourSlider from "./TourSlider";
import SeeMoreButton from "../buttons/SeeMoreButton";

function RowTours({ title, desc, tours, slugType, seeMoreSlug }) {
  return (
    <div className="container mx-auto px-4 mt-16">
      <HeaderSection title={title} desc={desc} />
      <TourSlider tours={tours} slugType={slugType} />
      <SeeMoreButton slug={seeMoreSlug} />
    </div>
  );
}

export default RowTours;
