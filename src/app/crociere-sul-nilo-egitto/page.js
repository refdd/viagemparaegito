import HeaderPages from "@/components/header/HeaderPages";
import ListTourContainer from "@/components/listTour/ListTourContainer";
import React, { Suspense } from "react";
import Pagination from "@/components/singleTour/Pagination";
import { getData } from "../../../utils/featchApi";
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
  const pages = await getData(
    "/pages/crociere-sul-nilo-egitto?tenant_id=18&language_id=11"
  );
  return {
    title: pages?.row?.meta?.meta_title,
    description: pages?.row?.meta?.meta_description,
  };
}
async function ListTour() {
  const pages = await getData(
    "/pages/crociere-sul-nilo-egitto?tenant_id=18&language_id=11"
  );
  const cruises = await getData("/cruises?tenant_id=18&language_id=11");
  return (
    <>
      <HeaderPages
        imagsrc={pages.row?.image?.image_url}
        title={pages.row?.title}
        // desc={pages.row?.body}
      />
      <Pagination
        listSlug={{
          title: "crociere sul nilo egitto",
          slug: "crociere-sul-nilo-egitto",
        }}
        slug={""}
        pageWithHeader={true}
      />
      <DescriptionHeader desc={pages.row?.body} />
      <div className="container mx-auto px-4 mt-8">
        <div className=" grid grid-cols-1 gap-4 lg:grid-cols-3 ">
          <div className=" lg:col-span-2">
            <ListTourContainer
              tours={cruises.rows}
              typeSlug={"crociere-sul-nilo-egitto"}
            />
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
