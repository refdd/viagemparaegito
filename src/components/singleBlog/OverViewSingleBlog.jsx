import Image from "next/image";
import React from "react";
import CardOverView from "./CardOverView";

function OverViewSingleBlog({ image, items, body }) {
  const modifiedImageUrl = image.replace(
    "https://s3.eu-central-1.amazonaws.com/other.projects.storage/",
    "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp/"
  );
  return (
    <div className="md:col-span-3">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-1 ">
        <div className="">
          <div className="relative w-full h-[200px] md:h-[400px] md:col-span-2 ">
            <Image
              src={modifiedImageUrl}
              fill
              loading="lazy"
              alt="single blog imag"
              className="rounded-md shadow-md"
            />
          </div>
        </div>
        {/* desc */}
        <div
          dangerouslySetInnerHTML={{
            __html: body ? body : "",
          }}
          className="col-span-1 textEditor"
        ></div>
        {/* title */}

        <div className="grid grid-cols-1 gap-4">
          {items?.map((item, id) => (
            <CardOverView
              key={id}
              imgSrc={item?.image?.image_url}
              description={item?.body}
            />
          ))}
        </div>
        {/* <ShareBlog blogSlug={Slug} /> */}
      </div>
    </div>
  );
}

export default OverViewSingleBlog;
