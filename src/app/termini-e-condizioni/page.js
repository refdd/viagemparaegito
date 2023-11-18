import HeaderPages from "@/components/header/HeaderPages";
import OverViewPages from "@/components/overViewPages/OverViewPages";
import React from "react";
import Image1 from "../../../public/assets/images/bg.webp";
import { getData } from "../../../utils/featchApi";
export async function generateMetadata({ params, searchParams }) {
  const pages = await getData(
    `/pages/termini-e-condizioni?tenant_id=18&language_id=11`
  );
  return {
    title: pages?.row?.meta?.meta_title,
    description: pages?.row?.meta?.meta_description,
  };
}
async function Terms() {
  const pages = await getData(
    `/pages/termini-e-condizioni?tenant_id=18&language_id=11`
  );
  return (
    <div>
      <HeaderPages
        imagsrc={pages.row?.image?.image_url}
        title={pages.row?.title}
        // desc={about_page.row?.body}
      />
      <OverViewPages title={pages.row?.title} desc={pages.row?.body} />
    </div>
  );
}

export default Terms;
