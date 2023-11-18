import React from "react";
import { getData } from "../../../utils/featchApi";
import HeaderPages from "@/components/header/HeaderPages";
import Pagination from "@/components/singleTour/Pagination";
import FormInqueri from "@/components/form/FormInqueri";
import ListTravelGuide from "@/components/travelGuide/ListTravelGuide";
export async function generateMetadata({ params, searchParams }) {
  const pages = await getData(
    `/pages/consigli-di-viaggio?tenant_id=18&language_id=11`
  );
  return {
    title: pages?.row?.meta?.meta_title,
    description: pages?.row?.meta?.meta_description,
  };
}
async function TravelGuide() {
  const pages = await getData(
    `/pages/consigli-di-viaggio?tenant_id=18&language_id=11`
  );
  const wikis = await getData(
    `/wikis?tenant_id=18&language_id=11&status=active&paginate=1000`
  );
  return (
    <>
      <HeaderPages
        imagsrc={pages.row?.image?.image_url}
        title={pages.row?.title}
        desc={pages.row?.body}
      />
      <Pagination
        listSlug={{ title: "Travel Guide", slug: "consigli-di-viaggio" }}
        slug={""}
        pageWithHeader={true}
      />
      <div className="container mx-auto px-4 mt-8">
        <div className=" grid grid-cols-1 gap-5  md:grid-cols-3">
          <div className="col-span-2">
            {/* <ListBlogContainer articles={articles.rows} /> */}
            <ListTravelGuide wikis={wikis.rows} />
          </div>
          <div className=" col-span-1 flex flex-col gap-5">
            {/* <ReactPost articles={reactPost.rows} /> */}
            <FormInqueri />
          </div>
        </div>
      </div>
    </>
  );
}

export default TravelGuide;
