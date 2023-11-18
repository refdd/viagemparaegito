import React from "react";
import CustomizForm from "./CustomizForm";
import bg from "../../../public/assets/images/bgForm.webp";

function CustomizeLayout() {
  return (
    <div className=" mb-6">
      <div
        style={{ backgroundImage: `url(${bg.src})` }}
        className=" relative overflow-hidden   w-full bg-no-repeat  bg-cover bg-top  py-20 mt-10"
      >
        <div className="container mx-auto px-4 md:w-[50%]">
          <CustomizForm />
        </div>
      </div>
    </div>
  );
}

export default CustomizeLayout;
