import React from "react";
import { getItem } from "../../../../utils/featchApi";
import HeaderPages from "@/components/header/HeaderPages";
import OverviewGuide from "@/components/travelGuide/OverviewGuide";
import RelatedTours from "@/components/singleBlog/RelatedTours";
export async function generateMetadata({ params: { slug }, searchParams }) {
  const pages = await getItem(
    `/wikis/${slug}?tenant_id=18&language_id=11&status=active`
  );
  return {
    title: pages?.row?.meta?.meta_title,
    description: pages?.row?.meta?.meta_description,
  };
}
async function SingleTravelGuide({ params: { slug } }) {
  const pages = await getItem(
    `/wikis/${slug}?tenant_id=18&language_id=11&status=active`
  );
  const { items, packages, body } = pages.row;
  console.log(items);
  return (
    <div>
      <HeaderPages
        imagsrc={pages.row?.image?.image_url}
        title={pages.row?.title}
        // desc={about_page.row?.body}
      />
      <div className="container  mx-auto px-4 mt-10 ">
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-6">
          <OverviewGuide items={items} body={body} />
          <div className="md:col-span-2">
            <RelatedTours tours={packages} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleTravelGuide;
