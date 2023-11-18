"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ImageGallery from "./ImageGallery";

function SingleTourGallery({ galleries }) {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="gallerySingelTour"
    >
      {galleries?.map((gallery, index) => (
        <SwiperSlide key={index}>
          <ImageGallery imgSrc={gallery} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SingleTourGallery;
