import React from "react";
import HeaderSection from "../header/HeaderSection";
import AccordionFAQ from "./AccordionFAQ";
import SeeMoreButton from "../buttons/SeeMoreButton";
import { getData } from "../../../utils/featchApi";

async function FaqSection() {
  const faq = await getData(
    "/faqs?tenant_id=18&language_id=11&viewInHome=1&status=active&paginate=5"
  );

  return (
    <div className="container mx-auto px-4 pt-16 ">
      <HeaderSection title={"Domande più frequenti"} desc={""} />
      <AccordionFAQ faqData={faq?.rows} />
      {/* <SeeMoreButton slug={"/faq"} /> */}
    </div>
  );
}

export default FaqSection;
