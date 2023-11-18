import ListBlogContainer from "@/components/blog/ListBlogContainer";
import ReactPost from "@/components/blog/RecentPosts";
import FormInqueri from "@/components/form/FormInqueri";
import React from "react";
import Pagination from "@/components/singleTour/Pagination";
import { getData } from "../../../utils/featchApi";
import HeaderPages from "@/components/header/HeaderPages";
export async function generateMetadata({ params, searchParams }) {
  const pages = await getData(`/pages/blog?tenant_id=18&language_id=11`);
  return {
    title: pages?.row?.meta?.meta_title,
    description: pages?.row?.meta?.meta_description,
  };
}
async function ListBlog() {
  const pages = await getData(`/pages/blog?tenant_id=18&language_id=11`);
  const articles = await getData(
    `/articles?tenant_id=18&language_id=11&status=active&paginate=1000`
  );
  const reactPost = await getData(
    `/articles?tenant_id=18&language_id=11&status=active&paginate=4`
  );

  return (
    <div>
      <HeaderPages
        imagsrc={pages.row?.image?.image_url}
        title={pages.row?.title}
        // desc={pages.row?.body}
      />

      <Pagination
        listSlug={{ title: "blog", slug: "blog" }}
        slug={""}
        pageWithHeader={true}
      />
      <div className="container mx-auto px-4 mt-8">
        <div className=" grid grid-cols-1 gap-5  md:grid-cols-3">
          <div className="col-span-2">
            <ListBlogContainer articles={articles.rows} />
          </div>
          <div className=" col-span-1 flex flex-col gap-5">
            <ReactPost articles={reactPost.rows} />
            <FormInqueri />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListBlog;
