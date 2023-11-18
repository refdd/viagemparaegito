import HeaderSigleBlog from "@/components/header/HeaderSigleBlog";
import OverViewSingleBlog from "@/components/singleBlog/OverViewSingleBlog";
import Pagination from "@/components/singleTour/Pagination";
import React from "react";
import RelatedTours from "@/components/singleBlog/RelatedTours";
import ReadAlso from "@/components/singleBlog/ReadAlso";
import { getItem } from "../../../../utils/featchApi";
export async function generateMetadata({ params: { slug }, searchParams }) {
  const pages = await getItem(`/articles/${slug}?tenant_id=18&language_id=11`);
  return {
    title: pages?.row?.meta?.meta_title,
    description: pages?.row?.meta?.meta_description,
  };
}
async function page({ params: { slug } }) {
  const SingelBlogData = await getItem(
    `/articles/${slug}?tenant_id=18&language_id=11`
  );

  const { image, title, items, packages, body } = SingelBlogData.row;
  return (
    <div>
      <Pagination listSlug={{ title: "blog", slug: "blog" }} slug={title} />
      <HeaderSigleBlog title={title} dutations={""} />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 ">
          <OverViewSingleBlog
            image={image.image_url}
            items={items}
            body={body}
          />
          <div>
            <RelatedTours tours={packages} slugType={""} />
          </div>
        </div>
      </div>
      <ReadAlso />
    </div>
  );
}

export default page;
