import React from "react";
import CardBlog from "../cards/CardBlog";

function ListTravelGuide({ wikis }) {
  return (
    <div className="container mx-auto px-4  col-span-1 md:col-span-2">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-10">
        {wikis?.map((item) => (
          <CardBlog
            key={item.id}
            slugType={"consigli-di-viaggio"}
            imgSrc={item?.image}
            description={item?.short_body}
            title={item?.title}
            slug={item?.slug}
          />
        ))}
      </div>
    </div>
  );
}

export default ListTravelGuide;
