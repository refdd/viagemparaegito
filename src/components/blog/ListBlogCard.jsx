import Image from "next/image";
import Link from "next/link";
import React from "react";

function ListBlogCard({ image, duration, title, desc, slug }) {
  const modifiedImageUrl = image?.image_url.replace(
    "https://s3.eu-central-1.amazonaws.com/other.projects.storage/",
    "https://res.cloudinary.com/ddjuftfy2/image/upload/c_fill,w_500,h_500,f_webp/"
  );
  return (
    <Link href={`blog/${slug}`}>
      <div className="border rounded-md shadow-lg  md:py-2 ">
        <div className="grid grid-cols-1 gap-3 p-2 md:grid-cols-5">
          <div className="relative w-full h-[200px]  md:h-[180px] col-span-2 ">
            <Image
              src={modifiedImageUrl}
              alt={image?.image_alt ? image.image_alt : "blog"}
              title={image?.image_title ? image.image_title : "blog"}
              fill
              loading="lazy"
              className=" rounded-md"
            />
          </div>
          <div className="col-span-1  md:col-span-3">
            <div className="flex flex-col gap-3">
              {/* <p className="text-[15px] text-[#697488]  capitalize">
                {duration}
              </p> */}
              <h2 className="text-[22px] text-colorDark  font-semibold capitalize">
                {title}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: desc ? desc : "",
                }}
                className="text-[#697488] text-[15px]  capitalize textEditor"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ListBlogCard;
