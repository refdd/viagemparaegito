import React from "react";
import HeaderSection from "../header/HeaderSection";
import BlogSlider from "../blog/BlogSlider";
import { getData } from "../../../utils/featchApi";

async function ReadAlso({ title, desc }) {
  const articles = await getData(
    "/articles?tenant_id=18&language_id=11&status=active&paginate=7"
  );
  return (
    <div className="container mx-auto px-4 pt-16 ">
      <HeaderSection title={"Leggi Anche"} />
      <BlogSlider data={articles.rows} slugType={"blog"} />
    </div>
  );
}

export default ReadAlso;
