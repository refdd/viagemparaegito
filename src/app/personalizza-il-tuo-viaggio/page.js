import React from "react";
import Image1 from "../../../public/assets/images/bg.webp";
import HeaderPages from "@/components/header/HeaderPages";
import CustomizeLayout from "@/components/CustomizeTrip/CustomizeLayout";
import HeaderSection from "@/components/header/HeaderSection";
import { getData } from "../../../utils/featchApi";
export async function generateMetadata({ params, searchParams }) {
  const pages = await getData(
    `/pages/personalizza-il-tuo-viaggio?tenant_id=18&language_id=11`
  );
  return {
    title: pages?.row?.meta?.meta_title,
    description: pages?.row?.meta?.meta_description,
  };
}
async function CustomizeYourTrip() {
  const pages = await getData(
    `/pages/personalizza-il-tuo-viaggio?tenant_id=18&language_id=11`
  );
  return (
    <div>
      <HeaderPages
        imagsrc={pages.row?.image?.image_url}
        title={pages.row?.title}
        // desc={about_page.row?.body}
      />
      <div className="container mx-auto px-4 mt-10">
        <HeaderSection
          title={"Personalizza Il Tuo Viaggio"}
          desc={"Pianifica la Tua Vacanza in Egitto come desideri"}
        />
      </div>
      <CustomizeLayout />
    </div>
  );
}

export default CustomizeYourTrip;
