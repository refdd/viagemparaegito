import Link from "next/link";
import React from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";
import Image from "next/image";

function Footer({ LogoFooter, footer, socials }) {
  return (
    <div className=" bg-lightBlue">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 pt-6 pb-4 md:pt-11">
          <div className=" md:col-span-2">
            <div className=" flex flex-col space-y-16 py-7">
              {/*  */}
              <div className=" flex flex-col space-y-7">
                {/* logo footer */}
                <div className="relative  w-full h-[53px]   md:h-[100px]  md:w-[300px]  p-73 rounded ">
                  <Image
                    src={LogoFooter}
                    fill
                    loading="lazy"
                    alt="footer loge "
                    className="bg-white rounded-md  px-5 "
                    sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                  />
                </div>
                <div className=" flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-10">
                  {/* coll and support */}
                  <div className="flex flex-col space-y-1">
                    <span className="text-lg text-white font-medium text-left  md:w-[472px]">
                      {footer[0]?.body1}
                    </span>
                    {/* <p className=" text-white text-base ">{footer[0]?.body1}</p> */}
                  </div>
                </div>
              </div>

              {/*  */}
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
              {/*  */}
              <div className="mt-36">
                <p className="text-white text-[16px]  font-bold capitalize border-white">
                  {footer[0]?.body2}
                </p>
                <ul className="flex flex-col space-y-3 pt-2 text-white text-[16px]  capitalize">
                  {footer[0]?.links?.map((link) => (
                    <li
                      key={link?.link_id}
                      className=" hover:text-gray-800 transition-all"
                    >
                      <Link href={`/${link?.link_slug}`}>
                        <span>{link?.link_title}</span>
                      </Link>
                    </li>
                  ))}
                  {/* <li className=" hover:text-gray-800 transition-all">
                    <Link href={"/about"}>
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li className=" hover:text-gray-800 transition-all">
                    <Link href={"/Privacy-Policy"}>
                      <span>Politica sulla Privacy del cliente</span>
                    </Link>
                  </li>
                  <li className=" hover:text-gray-800 transition-all">
                    <Link href={"/terms"}>
                      <span>Termini e condizioni</span>
                    </Link>
                  </li>
                  <li className=" hover:text-gray-800 transition-all">
                    <Link href={"/faq"}>
                      <span>FAQs</span>
                    </Link>
                  </li>
                  <li className=" hover:text-gray-800 transition-all">
                    <Link href={"/contact-us"}>
                      <span>contact us</span>
                    </Link>
                  </li> */}
                </ul>
              </div>

              {/* support */}
              <div className=" mt-36">
                <p className="text-white text-[16px]  font-bold capitalize border-white">
                  {footer[0].body3}
                </p>
                <ul className="flex flex-col space-y-7 pt-2 text-white text-[16px]  capitalize">
                  <Link href={`mailto:${footer[0].body4}`}>
                    <li className=" hover:text-gray-800 text-white transition-all flex items-center gap-3">
                      <BsFillEnvelopeFill className="text-lg text-white" />
                      <span> {footer[0].body4}</span>
                    </li>
                  </Link>
                </ul>
                <div className="flex flex-col space-y-3 mt-6">
                  {!socials.length == 0 && (
                    <p className="text-white text-[16px]  font-medium capitalize">
                      social media
                    </p>
                  )}

                  <div className="flex items-center gap-5 text-white text-lg">
                    {socials?.map((social) => (
                      <li key={social?.id} className="flex items-center gap-2">
                        <Link href={`${social?.provider_url}`}>
                          <p className="text-[16px] text-[#fff] font-semibold  capitalize ">
                            {social?.provider}
                          </p>
                        </Link>
                      </li>
                    ))}
                    {/* <Link target="_blank" href={"/"}>
                      <BsFacebook />
                    </Link>
                    <Link target="_blank" href={"/"}>
                      <BsTwitter />
                    </Link>
                    <Link target="_blank" href={"/"}>
                      <BsInstagram />
                    </Link>
                    <Link target="_blank" href={"/"}>
                      <BsLinkedin />
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
