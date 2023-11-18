import React from "react";
import { getData } from "../../../utils/featchApi";
import HeaderPages from "@/components/header/HeaderPages";
import OverviewThankYou from "@/components/ThankYou/OverviewThankYou";
import FaqSection from "@/components/faq/FaqSection";
export async function generateMetadata({ params, searchParams }) {
  const pages = await getData(
    `/pages/richiestaricevuta?tenant_id=18&language_id=11`
  );
  return {
    title: pages?.row?.meta?.meta_title,
    description: pages?.row?.meta?.meta_description,
  };
}
async function ThankYou() {
  const pages = await getData(
    `/pages/richiestaricevuta?tenant_id=18&language_id=11`
  );
  return (
    <div>
      <HeaderPages
        imagsrc={pages.row?.image?.image_url}
        title={pages.row?.title}
        // desc={about_page.row?.body}
      />
      <OverviewThankYou body={pages.row?.body} title={pages.row?.title} />
      <FaqSection />
    </div>
  );
}

export default ThankYou;
