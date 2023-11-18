import React, { Suspense } from "react";
import MainHeader from "@/components/header/MainHeader";
import RowTours from "@/components/tours/RowTours";
import { getData } from "../../utils/featchApi";
import dynamic from "next/dynamic";
const RowBlog = dynamic(() => import("@/components/blog/RowBlog"));
const RowReviews = dynamic(() => import("@/components/Reviews/RowReviews"));
const WhyChooseUs = dynamic(() =>
  import("@/components/whyChooseUs/WhyChooseUs")
);
const FaqSection = dynamic(() => import("@/components/faq/FaqSection"));

export async function generateMetadata({ params, searchParams }) {
  const pages = await getData("/pages/home-page?tenant_id=18&language_id=11");
  return {
    title: pages?.row?.meta?.meta_title,
    description: pages?.row?.meta?.meta_description,
  };
}
export default async function Home() {
  const packages = await getData(
    "/packages/?tenant_id=18&language_id=11&&viewInHome=1&status=active"
  );
  const cruises = await getData("/cruises?tenant_id=18&language_id=11");

  const Wikis = await getData(
    "/wikis?tenant_id=18&language_id=11&status=active&paginate=5"
  );
  const articles = await getData(
    "/articles?tenant_id=18&language_id=11&status=active&paginate=7"
  );

  return (
    <>
      <MainHeader />
      <RowTours
        slugType={""}
        tours={packages.rows}
        title={"Vacanza in Egitto"}
        desc={
          "La tua vacanza in Egitto di sogni con l'opprtunità di scegliere il pacchetto che si adatta al tuo budget"
        }
        seeMoreSlug={"viaggiare-in-egitto"}
      />
      <RowTours
        slugType={"crociere-sul-nilo-egitto"}
        seeMoreSlug={"crociere-sul-nilo-egitto"}
        tours={cruises.rows}
        title={"Crociere Sul Nilo"}
        desc={
          "La Tua vacanza in Egitto di sogni con l'opprtunità di scegliere il pacchetto che si adatta al tuo budget"
        }
      />
      <Suspense fallback={<>...</>}>
        <WhyChooseUs />
        <RowReviews />

        <RowBlog
          slugType={"blog"}
          data={articles.rows}
          title={"Blog sull'Egitto"}
          desc={"Luoghi da scoprire, Attività da fare"}
        />

        <RowBlog
          slugType={"consigli-di-viaggio"}
          data={Wikis.rows}
          title={"Articoli & Gli ultimi Notizie"}
          desc={
            "Esplora una vasta gamma di contenuti che trattano una varietà di argomenti sull'Egitto."
          }
        />
        <FaqSection />
      </Suspense>
    </>
  );
}
