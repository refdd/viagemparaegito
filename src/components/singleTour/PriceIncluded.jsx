import React from "react";
function PriceIncluded({ includes }) {
  return (
    <div className="flex flex-col space-y-3 py-4 pl-6">
      <div
        dangerouslySetInnerHTML={{
          __html: includes ? includes : "",
        }}
        className=" includedSection mt-3 flex flex-col gap-4 text-colorLight text-base textEditor"
      ></div>
    </div>
  );
}

export default PriceIncluded;
