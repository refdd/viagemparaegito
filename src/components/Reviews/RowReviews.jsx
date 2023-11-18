import React from "react";
import HeaderSection from "../header/HeaderSection";
import ReviewsSlider from "./ReviewsSlider";
import { getData } from "../../../utils/featchApi";

async function RowReviews() {
  const reviews = await getData("/reviews?tenant_id=18&language_id=11");
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 lg:py-28 bg-colorLight2">
      <HeaderSection
        title={"Quanto è eccellente l'Agenzia Vacanza in Egitto? "}
        desc={
          "Vacanza in Egitto è fiera di essere la migliore agenzia di viaggi in Egitto, come testimoniano le nostre molte recensioni positive."
        }
      />
      <ReviewsSlider reviews={reviews.rows} />
    </div>
  );
}

export default RowReviews;
