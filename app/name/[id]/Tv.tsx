"use client";
import { Heading } from "@/components/custom/Heading";
import React from "react";
import ImageCard from "@/components/custom/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { MovieCard } from "@/components/custom/Card";

export default function Tv({ data }: { data?: any }) {
  return (
    <div className="flex flex-col gap-5">
      <Swiper
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper w-full h-56 flex gap-4 relative"
      >
        {data.map((data: any, index: number) => (
          <SwiperSlide key={index} className="w-full h-full">
            <MovieCard poster={data.poster_path} action={false} />
          </SwiperSlide>
        ))}
        <div className="custom-prev-button absolute -left-3 top-24 z-10 cursor-pointer bg-white opacity-90 flex justify-center items-center w-14 h-16 rounded-md group">
          <span className="icon-[ic--outline-keyboard-arrow-left] text-black group-hover:text-title text-4xl"></span>
        </div>
        <div className="custom-next-button absolute -right-3 top-24 z-10 cursor-pointer bg-white opacity-90 flex justify-center items-center w-14 h-16 rounded-md group">
          <span className="icon-[ic--outline-keyboard-arrow-right] text-black group-hover:text-title text-4xl"></span>
        </div>
      </Swiper>
    </div>
  );
}
