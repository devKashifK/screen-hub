"use client";
import ImageCard from "@/components/custom/image";
import React from "react";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";

export default function Images({
  images,
  id,
  width = "w-full",
  slides = 4,
}: {
  images: any;
  id: any;
  width?: string;
  slides?: number;
}) {
  return (
    <>
      <Swiper
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        slidesPerView={slides}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper w-full h-full flex flex-row  gap-4 relative "
      >
        <div className="w-full h-full flex">
          {images.map((image: any, index: number) => (
            <SwiperSlide
              key={index}
              className="w-full h-full flex justify-center items-center"
            >
              <ImageCard image={image} id={id} width={width} />
            </SwiperSlide>
          ))}
        </div>
        {images.length > 6 ? (
          <>
            <div className="custom-prev-button absolute -left-3 top-16 z-10 cursor-pointer bg-black bg-opacity-70 opacity-90 flex justify-center items-center w-14 h-16 rounded-md group">
              <span className="icon-[ic--outline-keyboard-arrow-left] text-white group-hover:text-title text-4xl"></span>
            </div>
            <div className="custom-next-button absolute -right-3 top-16 z-10 cursor-pointer bg-black bg-opacity-70 opacity-90 flex justify-center items-center w-14 h-16 rounded-md group">
              <span className="icon-[ic--outline-keyboard-arrow-right] text-white group-hover:text-title text-4xl"></span>
            </div>
          </>
        ) : null}
      </Swiper>
    </>
  );
}
