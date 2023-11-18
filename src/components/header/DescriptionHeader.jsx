"use client";
import React, { useState } from "react";

function DescriptionHeader({ desc }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  if (!desc) return null;
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col  md:flex-row md:items-center py-3">
        <div
          dangerouslySetInnerHTML={{
            __html: desc
              ? showFullDescription
                ? desc
                : desc.slice(0, 170)
              : "",
          }}
          className="flex-grow text-colorDark text-base font-medium textEditor "
        ></div>
        {!showFullDescription && (
          <span
            onClick={toggleDescription}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Scopri di più
          </span>
        )}
      </div>
    </div>
  );
}

export default DescriptionHeader;
