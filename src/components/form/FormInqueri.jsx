import React from "react";
import Form from "./Form";

function FormInqueri({ startPeice }) {
  return (
    <div
      className="border rounded-md py-4 px-5 shadow-xl bg-white bg-opacity-[0.6] sticky top-24"
      id="inquerForm"
    >
      {startPeice && (
        <div className="flex items-center justify-center gap-1 text-colorLight text-sm">
          <span className="text-lg font-medium">Da</span>
          <span className="text-[20px] font-semibold text-bsBlue  uppercase">
            € {startPeice}
          </span>
        </div>
      )}
      <p className="text-lg font-semibold text-colorDark">
        Personalizza il tuo Viaggio
      </p>
      <Form />
    </div>
  );
}

export default FormInqueri;
