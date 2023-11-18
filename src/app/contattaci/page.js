import React from "react";
import Image1 from "../../../public/assets/images/bg.webp";
import HeaderPages from "@/components/header/HeaderPages";
import HeaderSection from "@/components/header/HeaderSection";
import ContactUsLayout from "@/components/ContactUs/ContactUsLayout";
import { getData } from "../../../utils/featchApi";
export async function generateMetadata({ params, searchParams }) {
  const pages = await getData("/pages/contattaci?tenant_id=18&language_id=11");
  return {
    title: pages?.row?.meta?.meta_title,
    description: pages?.row?.meta?.meta_description,
  };
}
async function ContactUs() {
  const pages = await getData("/pages/contattaci?tenant_id=18&language_id=11");
  return (
    <div>
      <HeaderPages
        imagsrc={
          pages.row?.image?.image_url ? pages.row?.image?.image_url : Image1
        }
        title={pages.row?.title ? pages.row?.title : "Contact us"}
        // desc={about_page.row?.body}
      />
      <div className="container mx-auto px-4 mt-10">
        <HeaderSection title={"Contattaci"} desc={""} />
      </div>
      <ContactUsLayout contactUsDesc={pages.row?.body} />
    </div>
  );
}

export default ContactUs;
