"use client";
import { Heading } from "@/components/custom/Heading";
import React, { Suspense } from "react";
import VideoTiles from "@/components/custom/VideoTiles";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation } from "swiper/modules";

export default function AllVideos({
  videos,
  slides = 2,
}: {
  videos: any;
  slides?: number;
}) {
  return (
    <div className="flex flex-col gap-5">
      <Heading>
        <div className="flex justify-center items-center gap-3">
          Videos
          <span className="text-sm text-[#909090]">
            {videos.results.length}
          </span>
        </div>
      </Heading>
      <div className="flex gap-4">
        <Swiper
          navigation={{
            prevEl: ".custom-prev-button",
            nextEl: ".custom-next-button",
          }}
          slidesPerView={slides}
          spaceBetween={30}
          autoplay={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper w-full h-[256px] flex gap-4 relative"
        >
          {videos.results.map((video: any) => (
            <Suspense
              key={video.id}
              fallback={<div className="bg-red-500 w-56 h-56">red</div>}
            >
              <SwiperSlide key={video.id}>
                <VideoTiles id={video.key} />
              </SwiperSlide>
            </Suspense>
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
