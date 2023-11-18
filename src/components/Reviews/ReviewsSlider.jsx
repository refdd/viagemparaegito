"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import CardReview from "../cards/CardReview";

function ReviewsSlider({ reviews }) {
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
        {reviews?.map((review) => (
          <SwiperSlide key={review?.id}>
            <CardReview
              title={review?.title}
              description={review?.body?.substring(0, 95)}
              imageAuther={review?.image?.image_url}
              name={review?.name}
              place={review?.place}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ReviewsSlider;
