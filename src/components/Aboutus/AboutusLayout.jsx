import Image from "next/image";
import React from "react";
function AboutusLayout({ image, body }) {
  return (
    <div className="container mx-auto px-4 mb-7">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* content */}
        <div className="flex flex-col gap-6 md:justify-center md:gap-7">
          {/* <div className="flex flex-col gap-3">
            <p className="text-3xl font-semibold text-colorDark ">
              About GoTrip.com
            </p>
            <p className="text-base text-colorLight ">
              These popular destinations have a lot to offer
            </p>
          </div>
          <div className=" leading-7 md:leading-9">
            London is a shining example of a metropolis at the highest peak of
            modernity and boasts an economy and cultural diversity that’s the
            envy of other global superpowers.
          </div>
          <div className=" leading-7 md:leading-9">
            Take the opportunity to acquaint yourself with its fascinating
            history chronicled by institutions like the British Museum as well
            as see how far it has come by simply riding the Tube and passing by
            celebrated landmarks like Buckingham Palace, Westminster Abbey, and
            marvels like Big Ben, the London Eye, and the Tower Bridge.
          </div> */}
          <div
            dangerouslySetInnerHTML={{
              __html: body ? body : "",
            }}
            className="text-base leading-9 font-medium text-colorDark textEditor"
          ></div>
        </div>
        <div className="">
          <div className="relative w-full h-[300px] lg:h-[600px]">
            <Image
              alt="abutus"
              src={image}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              quality={60}
              // placeholder="blur"
              // blurDataURL={image}
              className="rounded object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutusLayout;
