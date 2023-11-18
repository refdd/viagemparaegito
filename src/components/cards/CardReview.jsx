import Image from "next/image";
import React from "react";

function CardReview({ title, description, imageAuther, name, place }) {
  const modifiedImageUrl = imageAuther.replace(
    "https://s3.eu-central-1.amazonaws.com/other.projects.storage/",
    "https://res.cloudinary.com/ddjuftfy2/image/upload/c_fill,w_100,h_100,f_webp/"
  );
  return (
    <div className="bg-colorWhite rounded pt-10 px-10 pb-8">
      <div className="flex flex-col gap-4">
        {/* title */}
        <div className="">
          <p className=" text-lightBlue font-medium text-base">{title}</p>
        </div>
        {/* desc */}
        <div className="">
          <p className="text-colorDark font-medium text-base">{description}</p>
        </div>
        {/* author */}
        <div className="flex items-center gap-8 border-t pt-4">
          <div className="relative h-20 w-20 ">
            <Image
              loading="lazy"
              className=" rounded-full object-fill shadow-md"
              fill
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
              src={modifiedImageUrl}
              alt="review"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-[15px] font-medium text-[#051036]  capitalize">
              {name}
            </span>
            <span className="text-[#697488] text-sm  capitalize">{place}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardReview;
