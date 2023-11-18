import React from "react";
import { useFormContext } from "react-hook-form";

function TextArea() {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col gap-2">
      <textarea
        id="message"
        rows="3"
        className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
        placeholder="cosa vuoi fare in Egitto? Solo Cairo , Cairo Crociera sul Nilo , Cairo Crociera sul nilo e Mar Rosso"
        {...register("advice", { required: true })}
      ></textarea>
    </div>
  );
}

export default TextArea;
