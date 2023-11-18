"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CardTour from "../cards/CardTour";
function TourSlider({ tours, slugType }) {
  return (
    <div className="mt-7">
      <Swiper
        slidesPerView={3}
        spaceBetween={32}
        className="myTourSlides"
        breakpoints={{
          280: {
            slidesPerView: 1.3,
            spaceBetween: 10,
          },
          568: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {tours?.map((tour) => (
          <SwiperSlide key={tour?.id}>
            <CardTour
              imgSrc={tour?.image}
              title={tour?.title}
              duration={tour?.duration}
              desc={tour?.short_body}
              tourType={tour?.tour_type}
              slug={tour?.slug}
              startPrice={tour?.start_price}
              slugType={slugType ? slugType : tour?.destination?.slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TourSlider;
