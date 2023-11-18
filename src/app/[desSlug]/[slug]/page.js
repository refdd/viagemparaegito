import React, { Suspense } from "react";
import { getItem } from "../../../../utils/featchApi";
import Pagination from "@/components/singleTour/Pagination";
import SingleHeader from "@/components/header/SingleHeader";
import SingleTourGallery from "@/components/singleTour/gallery/SingleTourGallery";
import TourSnapshot from "@/components/singleTour/TourSnapshot";
import OverView from "@/components/singleTour/OverView";
import Itinerary from "@/components/singleTour/Itinerary";
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
    `/packages/${params.slug}?tenant_id=18&language_id=11`
  );
  return {
    title: pages?.row?.meta?.meta_title,
    description: pages?.row?.meta?.meta_description,
  };
}
async function Singletour({ params: { slug, desSlug } }) {
  const singleTour = await getItem(
    `/packages/${slug}?tenant_id=18&language_id=11`
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
    related_packages,
    run_dates,
    price_note,
  } = singleTour.row;
  return (
    <>
      <Pagination listSlug={{ title: desSlug, slug: desSlug }} slug={title} />
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
            <Itinerary itinerariesDays={itineraries} />
          </div>
          <div className="">
            <Suspense fallback={<>...</>}>
              <FormInqueri startPeice={start_price} />
            </Suspense>
          </div>
        </div>
        <Suspense fallback={<>...</>}>
          <PriceAndAccommodation accommodations={accommodations} />
          <TourInformation TripInformation={price_note} />
        </Suspense>
      </div>
      <Suspense fallback={<>...</>}>
        <RowTours
          slugType={""}
          tours={related_packages}
          title={"Tour Relativi"}
          desc={""}
        />
        <BottonInquire />
      </Suspense>
    </>
  );
}

export default Singletour;
