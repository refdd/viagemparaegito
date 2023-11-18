import Image from "next/image";
import React from "react";

function CardOverView({ imgSrc, description }) {
  return (
    <div className="grid grid-cols-1 ">
      <div className="">
        <div
          dangerouslySetInnerHTML={{
            __html: description ? description : "",
          }}
          className="text-[#000] text-base textEditor "
        ></div>
      </div>
      <div className="">
        <div className="relative w-full h-[330px] ">
          <Image
            alt="tourImage"
            src={imgSrc}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={60}
            // placeholder="blur"
            // blurDataURL={imgSrc}
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default CardOverView;
