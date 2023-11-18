import Image from "next/image";
import React from "react";

function CardChooseUs({ imgsrc, title, desc }) {
  return (
    <div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <div className="">
          <Image src={imgsrc} alt="icon" width={100} height={100} />
        </div>
        <p className="text-lg font-medium text-colorDark text-center">
          {title}
        </p>
        <p className="text-sm text-colorLight text-center ">{desc}</p>
      </div>
    </div>
  );
}

export default CardChooseUs;
