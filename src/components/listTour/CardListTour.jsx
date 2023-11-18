import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight, BsStarFill } from "react-icons/bs";

function CardListTour({
  imgSrc,
  title,
  description,
  starsReating,
  duration,
  slug,
  price,
  tour_type,
  typeSlug,
}) {
  // const modifiedImageUrl = imgSrc.replace(
  //   "https://s3.eu-central-1.amazonaws.com/other.projects.storage/",
  //   "https://res.cloudinary.com/ddjuftfy2/image/upload/c_fill,w_500,h_500,f_webp/"
  // );

  const stars = Array.from({ length: starsReating }, (_, i) => (
    <BsStarFill key={i} />
  ));
  return (
    <div>
      <div className={"   group  pb-3  p-2 rounded-md shadow-lg"}>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {/* image card */}
          <div className="">
            <Link href={`/${typeSlug}/${slug}`}>
              <div className="  relative w-full h-[200px] md:h-[200px] rounded overflow-hidden">
                <Image
                  src={imgSrc?.image_url}
                  alt={imgSrc?.image_alt ? imgSrc.image_alt : "card tour"}
                  title={imgSrc?.image_title ? imgSrc.image_title : "card tour"}
                  fill
                  sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             33vw"
                  loading="lazy"
                  className="rounded group-hover:scale-105 transition-all object-cover"
                />
                <div className="absolute bottom-2 right-2 rounded bg-colorWhite py-1 px-3 z-10  ">
                  <p className="text-colorDark  capitalize">{duration}</p>
                </div>
              </div>
            </Link>
          </div>
          {/* content */}
          <div className=" md:col-span-2">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {/*  */}
              <div className="md:col-span-2">
                <div className=" flex flex-col gap-4">
                  <Link href={`/${typeSlug}/${slug}`}>
                    <h2 className="text-lg font-medium capitalize text-colorDark">
                      {title}
                    </h2>
                  </Link>
                  {/* desc */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: description ? description : "",
                    }}
                    className=" text-gray-500 text-sm  capitalize font-normal md:text-[16px] textEditor"
                  ></div>
                  {/* rating*/}
                  <div className={" flex items-center gap-2 "}>
                    <span className="text-[#051036] font-medium  text-sm ">
                      Eccezionale
                    </span>
                    <span className="text-[#697488] text-sm  font-medium ">
                      {price - 73} recensioni
                    </span>
                    <div className="flex items-start gap-1 justify-center text-yellow-400">
                      {stars}
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="">
                {/* price */}
                <div
                  className={
                    " mt-2 flex items-center gap-1 text-lg  font-medium  md:flex-col "
                  }
                >
                  <span className=" group-hover:text-bsBlue text-[18px] transition-all text-[#051036]">
                    Da
                  </span>
                  <span className="text-bsBlue">€ {Math.floor(price)}</span>
                  <small className="text-[11px] md:text-xs">Persona</small>
                </div>
                {/* button */}
                <div className="flex items-center justify-center py-3 gap-3 bg-bsBlue rounded transition-all hover:md:bg-[#051036]">
                  <Link href={`/${typeSlug}/${slug}`}>
                    <button className="text-[15px] text-white  font-medium capitalize">
                      Scopri i dettagli
                    </button>
                  </Link>
                  <BsArrowUpRight className="text-white text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardListTour;
