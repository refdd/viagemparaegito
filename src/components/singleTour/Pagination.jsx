import Link from "next/link";
import React from "react";

function Pagination({ listSlug, slug, pageWithHeader }) {
  return (
    <div className={`bg-[#f5f5f5] py-4 ${pageWithHeader ? " mt-2" : "mt-24 "}`}>
      <div className="container mx-auto px-4">
        <ul className="flex items-center flex-wrap gap-3 text-base capitalize text-colorLight font-medium ">
          <li>
            <Link href={`/`}>
              <span>home</span>
            </Link>
          </li>
          <li>
            <span>{">"}</span>
          </li>
          <li>
            <Link href={`/${listSlug.slug}`}>
              <span>{listSlug.title}</span>
            </Link>
          </li>
          <li>
            <span>{">"}</span>
          </li>
          <li>
            <span className="text-colorDark">{slug}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
