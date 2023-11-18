import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function PriceExcluded({ unincludes }) {
  return (
    <ul className="flex flex-col space-y-3 py-4 pl-6">
      <div
        dangerouslySetInnerHTML={{
          __html: unincludes ? unincludes : "",
        }}
        className=" excludedSection mt-3 flex flex-col gap-4 text-colorLight text-base textEditor"
      ></div>
    </ul>
  );
}

export default PriceExcluded;
