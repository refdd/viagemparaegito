import SingleHeader from "@/components/header/SingleHeader";
import OverView from "@/components/singleTour/OverView";
import Pagination from "@/components/singleTour/Pagination";
import TourSnapshot from "@/components/singleTour/TourSnapshot";
import SingleTourGallery from "@/components/singleTour/gallery/SingleTourGallery";
import React, { Suspense } from "react";
import { getItem } from "../../../../utils/featchApi";
import ItineraryCruises from "@/components/singleTour/ItineraryCruises";
import dynamic from "next/dynamic";
const PriceAndAccommodation = dynamic(() =>
  import("@/components/singleTour/priceAndAccommodation/PriceAndAccommodation")
);
const TourInformation = dynamic(() =>
  import("@/components/singleTour/TourInformation")
);
const RowTours = dynamic(() => import("@/components/tours/RowTours"));
const FormInqueri = dynamic(() => import("@/components/form/FormInqueri"));
const BottonInquire = dynamic(() =>
  import("@/components/buttons/BottonInquire")
);
export async function generateMetadata({ params, searchParams }) {
  const pages = await getItem(
    `/cruises/${params.slug}?tenant_id=18&language_id=11`
  );
  return {
    title: pages?.row?.meta?.meta_title,
    description: pages?.row?.meta?.meta_description,
  };
}
async function SingleTour({ params: { slug } }) {
  const singleTour = await getItem(
    `/cruises/${slug}?tenant_id=18&language_id=11`
  );
  const {
    title,
    start_price,
    stars,
    galleries,
    duration,
    tour_type,
    body,
    inclusion,
    exclusion,
    itineraries,
    accommodations,
    price_note,
    related_packages,
    run_dates,
    prices,
  } = singleTour.row;
  return (
    <>
      <Pagination
        listSlug={{
          title: "crociere-sul-nilo-egitto",
          slug: "crociere-sul-nilo-egitto",
        }}
        slug={"Great Northern Hotel, a Tribute Portfolio Hotel, London"}
      />
      <SingleHeader title={title} price={start_price} starsReating={stars} />
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SingleTourGallery galleries={galleries} />
            <TourSnapshot
              duration={duration}
              guide={tour_type}
              Calendar={run_dates}
            />
            <OverView body={body} inclusion={inclusion} exclusion={exclusion} />
            <ItineraryCruises itineraries={itineraries} />
          </div>
          <div className="">
            <Suspense fallback={<>...</>}>
              <FormInqueri startPeice={start_price} />
            </Suspense>
          </div>
        </div>
        <Suspense fallback={<>...</>}>
          <PriceAndAccommodation
            accommodations={accommodations}
            prices={prices}
          />
          <TourInformation TripInformation={price_note} />
        </Suspense>
      </div>
      <Suspense fallback={<>...</>}>
        <BottonInquire />
      </Suspense>
    </>
  );
}

export default SingleTour;
