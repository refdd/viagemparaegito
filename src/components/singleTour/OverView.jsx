import React from "react";
import PriceIncluded from "./PriceIncluded";
import PriceExcluded from "./PriceExcluded";

function OverView({ body, inclusion, exclusion }) {
  return (
    <div className="mt-8 border-b pb-7">
      <h2 className="text-[23px]  text-colorDark font-semibold  ">
        Descrizione
      </h2>
      <div className=" pt-5">
        <div
          dangerouslySetInnerHTML={{
            __html: body ? body : "",
          }}
          className="text-base text-colorLight textEditor"
        ></div>
      </div>
      {/* price includes  */}
      <div className="flex flex-col gap-4 pt-4 md:flex-row">
        <div className="p-3 bg-gray-50 rounded shadow-md md:flex-1">
          <h2 className="text-[22px] text-mainColor font-medium  capitalize">
            La quota comprende:
          </h2>
          <PriceIncluded includes={inclusion} />
        </div>

        <div className="p-3 bg-gray-50 rounded shadow-md md:flex-1">
          <h2 className="text-[22px] text-mainColor font-medium  capitalize">
            La quota non comprende
          </h2>
          <PriceExcluded unincludes={exclusion} />
        </div>
      </div>
    </div>
  );
}

export default OverView;
