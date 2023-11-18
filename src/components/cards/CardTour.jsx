import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUsersCog } from "react-icons/fa";

function CardTour({
  imgSrc,
  duration,
  title,
  desc,
  tourType,
  startPrice,
  slug,
  slugType,
}) {
  const modifiedImageUrl = imgSrc?.image_url.replace(
    "https://s3.eu-central-1.amazonaws.com/other.projects.storage/",
    "https://res.cloudinary.com/ddjuftfy2/image/upload/c_fill,w_500,h_500,f_webp/"
  );
  return (
    <div className="group">
      <div className="flex flex-col gap-2">
        <Link href={`/${slugType}/${slug}`}>
          <div className="relative w-full h-[160px] md:h-[180px] overflow-hidden  rounded">
            <Image
              alt={imgSrc?.image_alt ? imgSrc.image_alt : "card tour"}
              title={imgSrc?.image_title ? imgSrc.image_title : "card tour"}
              src={modifiedImageUrl}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              quality={60}
              // placeholder="blur"
              // blurDataURL={modifiedImageUrl}
              className="rounded object-cover group-hover:scale-105 transition-all duration-800 ease-in-out"
            />
            <div className="absolute bottom-2 right-2 rounded bg-colorWhite py-1 px-3 z-10  ">
              <p className="text-colorDark  capitalize">{duration}</p>
            </div>
          </div>
        </Link>
        {/* content */}
        <div className="flex flex-col ">
          {/* titel */}
          <div className="">
            <Link href={`/${slugType}/${slug}`}>
              <span className="text-colorDark font-medium text-lg capitalize ">
                {" "}
                {title}
              </span>
            </Link>
          </div>
          {/* desc */}
          <div className="mt-1">
            <div
              dangerouslySetInnerHTML={{
                __html: desc ? desc : "",
              }}
              className="text-sm text-colorLight  textEditor"
            ></div>
          </div>
          {/* type */}
          <div className=" flex items-center gap-2 my-2">
            <span className="h-[30px] w-[30px] bg-bsBlue font-semibold  text-white rounded flex justify-center items-center">
              <FaUsersCog />
            </span>
            <span className="text-[#051036] font-medium  text-sm ">
              Il Tipo del Tour{" "}
            </span>
            <span className="text-[#697488] text-sm  font-medium ">
              {tourType}
            </span>
          </div>
          {/* price */}
          <div className="  flex items-center gap-1 text-lg  font-medium ">
            <span className=" group-hover:text-bsBlue text-lg transition-all text-[#051036]">
              Da
            </span>
            <span className="text-bsBlue">€ {startPrice}</span>{" "}
            <small className="text-[11px] md:text-xs">Persona</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTour;
