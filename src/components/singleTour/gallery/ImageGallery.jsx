import Image from "next/image";
import React from "react";

function ImageGallery({ imgSrc }) {
  const modifiedImageUrl = imgSrc?.image_url?.replace(
    "https://s3.eu-central-1.amazonaws.com/other.projects.storage/",
    "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp/"
  );
  return (
    <div className="relative w-full h-[200px] md:h-[500px] ">
      <Image
        src={modifiedImageUrl}
        alt={imgSrc?.image_alt ? imgSrc.image_alt : "imgaeGallery"}
        title={imgSrc?.image_title ? imgSrc.image_title : "imgaeGallery"}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
        priority
        quality={60}
        // placeholder="blur"
        // blurDataURL={modifiedImageUrl}
        className="rounded object-cover"
      />
    </div>
  );
}

export default ImageGallery;
