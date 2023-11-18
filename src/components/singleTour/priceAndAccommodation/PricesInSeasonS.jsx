import React from "react";

function PricesInSeasonS({ prices }) {
  return (
    <div>
      <p className="text-[#17233e] text-2xl  capitalize font-bold my-2">
        Prezzi
      </p>
      <div className=" flex flex-col gap-5 md:flex-row md:py-4 md:gap-7 ">
        {prices?.map((price) => (
          <div key={price.id} className="flex flex-col  gap-2 md:flex-1  ">
            <h4 className="text-[#17233e] text-xl font-bold font-Poppins capitalize ">
              {price.name}
            </h4>
            {price?.items.map((item, index) => (
              <p
                key={index}
                className={"text-[#777] font-Poppins capitalize text-lg"}
              >
                <span className="font-semibold text-bsBlue">
                  € {item.price_value}
                </span>{" "}
                {item.body}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricesInSeasonS;
