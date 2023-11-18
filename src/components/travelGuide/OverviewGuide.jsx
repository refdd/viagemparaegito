import React from "react";
import CardOverView from "../singleBlog/CardOverView";

function OverviewGuide({ items, body }) {
  return (
    <div className="md:col-span-4">
      <div className=" w-full overflow-hidden">
        <div
          dangerouslySetInnerHTML={{
            __html: body ? body : "",
          }}
          className=" w-full textEditor"
        ></div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {items?.map((item, id) => (
          <CardOverView
            key={id}
            imgSrc={item?.image?.image_url}
            description={item?.body}
          />
        ))}
      </div>
    </div>
  );
}

export default OverviewGuide;
