import HeaderPages from "@/components/header/HeaderPages";
import React from "react";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";
import AboutusLayout from "@/components/Aboutus/AboutusLayout";
import { getData } from "../../../utils/featchApi";
export async function generateMetadata({ params, searchParams }) {
  const pages = await getData(`/pages/chi-siamo?tenant_id=18&language_id=11`);
  return {
    title: pages?.row?.meta?.meta_title,
    description: pages?.row?.meta?.meta_description,
  };
}
async function AboutUs() {
  const about_page = await getData(
    `/pages/chi-siamo?tenant_id=18&language_id=11`
  );

  return (
    <div className="">
      <HeaderPages
        imagsrc={about_page.row?.image?.image_url}
        title={about_page.row?.title}
        // desc={about_page.row?.body}
      />
      <WhyChooseUs />
      <AboutusLayout
        image={about_page.row?.image?.image_url}
        body={about_page.row?.body}
      />
    </div>
  );
}

export default AboutUs;
