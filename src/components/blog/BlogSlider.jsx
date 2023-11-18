"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CardBlog from "../cards/CardBlog";
function BlogSlider({ data, slugType }) {
  return (
    <div className="mt-8">
      <Swiper
        slidesPerView={3}
        spaceBetween={32}
        className="reviewSlider"
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {data?.map((item) => (
          <SwiperSlide key={item?.id}>
            <CardBlog
              slugType={slugType}
              imgSrc={item?.image}
              description={item?.short_body}
              title={item?.title}
              slug={item?.slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BlogSlider;
