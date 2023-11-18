import Image from "next/image";
import Link from "next/link";
import React from "react";

function RecentPostsCard({ imgSrc, title, duration, slug }) {
  const modifiedImageUrl = imgSrc.replace(
    "https://s3.eu-central-1.amazonaws.com/other.projects.storage/",
    "https://res.cloudinary.com/ddjuftfy2/image/upload/c_fill,w_100,h_80,f_webp/"
  );
  return (
    <Link href={`/blog/${slug}`}>
      <div className="flex items-center gap-3 ">
        <div className="">
          <Image
            src={modifiedImageUrl}
            loading={"lazy"}
            width={100}
            height={80}
            alt="reated post"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-[15px] font-medium text-textPurple capitalize ">
            {title}
          </p>
          <span className="text-[13px] text-[#051036]  capitalize">
            {duration}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default RecentPostsCard;
