import React from "react";
import RecentPostsCard from "../cards/RecentPostsCard";
function ReactPost({ articles }) {
  return (
    <div className=" px-3">
      <p className="font-medium text-lg text-mainColor capitalize ">
        Ultimi Articoli{" "}
      </p>
      <div className="grid grid-cols-1 gap-7">
        {articles?.map((article) => (
          <RecentPostsCard
            key={article?.id}
            imgSrc={article?.image?.image_url}
            title={article?.title}
            slug={article?.slug}
            duration={"April 06, 2022"}
          />
        ))}
      </div>
    </div>
  );
}

export default ReactPost;
