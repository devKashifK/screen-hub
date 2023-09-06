"use client";
import { Heading } from "@/components/custom/Heading";
import React from "react";

import CastDetail from "@/components/custom/CastDetail";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";

export default function Cast({ detail }: { detail: any }) {
  return (
    <div className="flex flex-col gap-5">
      <Heading className="text-black">Top Cast</Heading>
      <div className="flex gap-4">
        <Swiper
          navigation={{
            prevEl: ".custom-prev-button",
            nextEl: ".custom-next-button",
          }}
          slidesPerView={3}
          spaceBetween={30}
          autoplay={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper w-full h-full flex gap-4 relative"
        >
          {detail.credits.cast.map((cast: any) => (
            <SwiperSlide key={cast.id} className="w-full h-full">
              <CastDetail
                name={cast.original_name}
                image={cast.profile_path}
                id={cast.id}
                characterName={cast.character}
              />
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
    </div>
  );
}
