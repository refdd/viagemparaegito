import Image from "next/image";
import Link from "next/link";
import React from "react";

function CardBlog({ imgSrc, slugType, title, description, slug }) {
  const modifiedImageUrl = imgSrc?.image_url.replace(
    "https://s3.eu-central-1.amazonaws.com/other.projects.storage/",
    "https://res.cloudinary.com/ddjuftfy2/image/upload/c_fill,w_500,h_500,f_webp/"
  );
  return (
    <div className="flex flex-col space-y-4">
      {/* image */}
      <Link href={`/${slugType}/${slug}`}>
        <div className=" group relative w-full h-[200px] md:h-[190px] overflow-hidden rounded-lg  shadow-lg shadow-[#445cdc40] ">
          <Image
            alt={imgSrc?.image_alt ? imgSrc.image_alt : "blog card"}
            title={imgSrc?.image_title ? imgSrc.image_title : "blog card"}
            src={modifiedImageUrl}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={60}
            // placeholder="blur"
            // blurDataURL={modifiedImageUrl}
            className="rounded object-cover group-hover:scale-105 transition-all duration-800"
          />
        </div>
      </Link>
      <div className="flex flex-col space-y-1">
        <Link href={`/${slugType}/${slug}`}>
          <p className="text-[#051036] text-lg font-medium  capitalize cursor-pointer">
            {title}
          </p>
        </Link>
        <div className="">
          <div
            dangerouslySetInnerHTML={{
              __html: description ? description : "",
            }}
            className="text-gray-500 text-sm md:text-lg  capitalize font-normal"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default CardBlog;
