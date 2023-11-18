import HeaderPages from "@/components/header/HeaderPages";
import React from "react";
import { getData } from "../../../utils/featchApi";
import FaqSection from "@/components/faq/FaqSection";
export async function generateMetadata({ params, searchParams }) {
  const pages = await getData(`/pages/faq?tenant_id=18&language_id=11`);
  return {
    title: pages?.row?.meta?.meta_title,
    description: pages?.row?.meta?.meta_description,
  };
}
async function FaQ() {
  const pages = await getData(`/pages/faq?tenant_id=18&language_id=11`);
  return (
    <div>
      <HeaderPages
        imagsrc={pages.row?.image?.image_url}
        title={pages.row?.title}
        // desc={about_page.row?.body}
      />
      <FaqSection />
    </div>
  );
}

export default FaQ;
