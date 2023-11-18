import ListTourContainer from "@/components/listTour/ListTourContainer";
import React, { Suspense } from "react";
import { getData } from "../../../utils/featchApi";
import HeaderPages from "@/components/header/HeaderPages";
import Pagination from "@/components/singleTour/Pagination";
import DescriptionHeader from "@/components/header/DescriptionHeader";
import dynamic from "next/dynamic";
const FormInqueri = dynamic(() => import("@/components/form/FormInqueri"));
const WhyChooseUs = dynamic(() =>
  import("@/components/whyChooseUs/WhyChooseUs")
);
const BottonInquire = dynamic(() =>
  import("@/components/buttons/BottonInquire")
);
const FaqSection = dynamic(() => import("@/components/faq/FaqSection"));
export async function generateMetadata({ params, searchParams }) {
  const pages = await getData("/destinations?tenant_id=18&language_id=11");
  return {
    title: pages?.rows[0]?.meta?.meta_title,
    description: pages?.rows[0]?.meta?.meta_description,
  };
}
async function ListTour({ params: { desSlug } }) {
  const pages = await getData(
    `/destinations/${desSlug}?tenant_id=18&language_id=11`
  );
  return (
    <>
      <HeaderPages
        imagsrc={pages.row?.image?.image_url}
        title={pages.row?.title}
      />
      <Pagination
        listSlug={{ title: "Viaggi Egitto", slug: desSlug }}
        slug={""}
        pageWithHeader={true}
      />
      <DescriptionHeader desc={pages.row?.body} />

      <div className="container mx-auto px-4 mt-8">
        <div className=" grid grid-cols-1 gap-4 lg:grid-cols-3 ">
          <div className=" lg:col-span-2">
            <ListTourContainer tours={pages?.row.packages} typeSlug={desSlug} />
          </div>
          <div className="">
            <Suspense fallback={<>...</>}>
              <FormInqueri />
            </Suspense>
          </div>
        </div>
      </div>
      <Suspense fallback={<>...</>}>
        <WhyChooseUs />
        <FaqSection />

        <BottonInquire />
      </Suspense>
    </>
  );
}

export default ListTour;
