import React from "react";
import CardListTour from "./CardListTour";

function ListTourContainer({ tours, typeSlug }) {
  return (
    <div className=" pt-7 border-t ">
      <div className={"grid grid-cols-1 gap-5 md:gap-7"}>
        {tours?.map((tour) => (
          <CardListTour
            key={tour?.id}
            imgSrc={tour?.image}
            title={tour?.title}
            description={tour?.short_body}
            starsReating={tour?.stars}
            duration={tour?.duration}
            slug={tour?.slug}
            price={tour?.start_price}
            tour_type={tour?.tour_type}
            typeSlug={typeSlug}
          />
        ))}
      </div>
    </div>
  );
}

export default ListTourContainer;
