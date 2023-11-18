import Image from "next/image";
import React from "react";

function HeaderPages({ imagsrc, title, desc }) {
  return (
    <div className="mt-20">
      <div className="relative w-full h-[400px]">
        <Image
          alt="tourImage"
          src={imagsrc}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          priority
          quality={60}
          //   placeholder="blur"
          // blurDataURL={modifiedImageUrl}
          className=" object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000026]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="flex flex-col gap-2 px-5">
            <h1 className="text-center text-white text-2xl md:text-[40px] capitalize ">
              {title}
            </h1>
            <div
              dangerouslySetInnerHTML={{ __html: desc ? desc : "" }}
              className="text-center text-white text-base font-Jost font-medium textEditor"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderPages;
