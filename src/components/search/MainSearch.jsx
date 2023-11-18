import React from "react";

function MainSearch({ title, body }) {
  return (
    <div className="container mx-auto px-4">
      <div className="relative flex flex-col justify-center items-center gap-4 ">
        <h1 className="text-white text-3xl md:text-6xl font-semibold font-serifs">
          {title}
        </h1>
        <div
          dangerouslySetInnerHTML={{
            __html: body ? body : "",
          }}
          className="text-white text-base capitalize textEditor"
        ></div>
      </div>
    </div>
  );
}

export default MainSearch;
