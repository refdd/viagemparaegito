import React from "react";
import imageHeader from "../../../public/assets/images/bg.webp";
import Image from "next/image";
import MainSearch from "../search/MainSearch";
import { getData } from "../../../utils/featchApi";
async function MainHeader() {
  const sliders = await getData(
    "/sliders?tenant_id=18&language_id=11&status=active"
  );
  const { image, title, body } = sliders.rows[0];
  const modifiedImageUrl = image?.image_url.replace(
    "https://s3.eu-central-1.amazonaws.com/other.projects.storage/",
    "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp/"
  );
  return (
    <div className="">
      <div className="relative  w-full pt-40 pb-48 md:h-[80vh] md:pt-[235px]">
        <Image
          alt="tourImage"
          src={modifiedImageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          priority
          quality={60}
          // placeholder="blur"
          // blurDataURL={modifiedImageUrl}
          className=" object-cover"
        />
        {/* layout */}
        <div
          className="absolute top-0 left-0 h-full w-full "
          style={{
            background:
              "linear-gradient(270deg, rgba(5, 16, 54, 0.5) 0%, #051036 72.43%)",
            opacity: 0.85,
          }}
        ></div>
        {/* content */}
        <MainSearch title={title} body={body} />
      </div>
    </div>
  );
}

export default MainHeader;
