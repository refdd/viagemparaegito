import HeaderPages from "@/components/header/HeaderPages";
import React from "react";
import Image1 from "../../../public/assets/images/bg.webp";
import OverViewPages from "@/components/overViewPages/OverViewPages";
import { getData } from "../../../utils/featchApi";
export async function generateMetadata({ params, searchParams }) {
  const pages = await getData(
    `/pages/privacy-policy?tenant_id=18&language_id=11`
  );
  return {
    title: pages?.row?.meta?.meta_title,
    description: pages?.row?.meta?.meta_description,
  };
}
async function PrivacyPolicy() {
  const privacy_page = await getData(
    `/pages/privacy-policy?tenant_id=18&language_id=11`
  );
  return (
    <div>
      <HeaderPages
        imagsrc={privacy_page.row?.image?.image_url}
        title={privacy_page.row?.title}
        // desc={about_page.row?.body}
      />
      <OverViewPages
        title={privacy_page.row?.title}
        desc={privacy_page.row?.body}
      />
    </div>
  );
}

export default PrivacyPolicy;
