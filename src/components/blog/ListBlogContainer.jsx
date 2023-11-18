import React from "react";
import ListBlogCard from "./ListBlogCard";
function ListBlogContainer({ articles }) {
  return (
    <div className="container mx-auto px-4  col-span-1 md:col-span-2">
      <div className="grid grid-cols-1 gap-4 md:gap-10">
        {articles?.map((post) => (
          <ListBlogCard
            key={post.id}
            image={post?.image}
            duration={"April 06, 2022"}
            title={post?.title}
            desc={post?.short_body}
            slug={post?.slug}
          />
        ))}
      </div>
    </div>
  );
}

export default ListBlogContainer;
