import React from "react";
import bg from "../../../public/assets/images/bgForm.webp";
import ContactUsForm from "./ContactUsForm";

function ContactUsLayout({ contactUsDesc }) {
  return (
    <div className=" mb-6">
      <div
        style={{ backgroundImage: `url(${bg.src})` }}
        className=" relative overflow-hidden   w-full bg-no-repeat  bg-cover bg-top  py-20 mt-10"
      >
        <div className="container mx-auto px-4 md:px-8 ">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className=" px-5 py-7 bg-white opacity-[.8] rounded-md shadow-lg h-fit">
              <div
                dangerouslySetInnerHTML={{
                  __html: contactUsDesc ? contactUsDesc : "",
                }}
                className=" text-lg font-medium text-colorDark textEditor"
              ></div>
            </div>
            <div className="flex items-start  md:justify-end ">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsLayout;
