import React from "react";
import HeaderSection from "../header/HeaderSection";
import BlogSlider from "./BlogSlider";
import SeeMoreButton from "../buttons/SeeMoreButton";

function RowBlog({ title, desc, data, slugType }) {
  return (
    <div className="container mx-auto px-4 pt-16 ">
      <HeaderSection title={title} desc={desc} />
      <BlogSlider data={data} slugType={slugType} />
      <SeeMoreButton slug={slugType} />
    </div>
  );
}

export default RowBlog;
