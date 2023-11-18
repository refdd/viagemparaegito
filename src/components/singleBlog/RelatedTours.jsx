import React from "react";
import CardTour from "../cards/CardTour";
import image1 from "../../../public/assets/images/2.webp";

function RelatedTours({ tours, slugType }) {
  return (
    <div>
      {/* <HeaderSections titel={"Related Tours"} /> */}
      <div className=" ">
        <p className="text-2xl font-semibold text-colorDark  capitalize md:text-3xl  text-center">
          Tour Relativi
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-5">
        {tours?.map((tour) => (
          <CardTour
            key={tour.id}
            imgSrc={tour?.image}
            title={tour?.title?.substring(0, 30)}
            duration={tour?.duration}
            desc={tour?.short_body}
            tourType={tour?.tour_type}
            slug={tour?.slug}
            startPrice={tour?.start_price}
            slugType={tour?.destination?.slug}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedTours;
