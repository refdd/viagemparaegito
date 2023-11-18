import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsStarFill } from "react-icons/bs";

function CardHotel({ image, title, stars, link }) {
  const starsElement = Array.from({ length: stars }, (_, i) => (
    <BsStarFill key={i} className="text-yellow-500" />
  ));
  return (
    <div className="flex flex-col gap-2 ">
      <div className="relative w-full h-[180px]">
        <Image
          src={image?.image_url}
          alt={image?.image_alt ? image.image_alt : "card tour"}
          title={image?.image_title ? image.image_title : "card tour"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          quality={60}
          // placeholder="blur"
          // blurDataURL={modifiedImageUrl}
          className="rounded object-cover "
        />
      </div>
      <div className="">
        <Link href={`${link}`}>
          <p className="text-[#051036] text-lg font-medium  capitalize cursor-pointer">
            {title}
          </p>
        </Link>
      </div>
      <div className="flex items-center gap-1">{starsElement}</div>
    </div>
  );
}

export default CardHotel;
