"use client";
import VideoTiles from "@/components/custom/VideoTiles";
import React, { Suspense } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
8;
export default function Videos({ data }: { data: any }) {
  return (
    <>
      {data.length > 0 ? (
        <Swiper
          navigation={{
            prevEl: ".custom-prev-button",
            nextEl: ".custom-next-button",
          }}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper w-full h-full flex gap-4 relative"
        >
          {data.map((video: any, index: number) => (
            <SwiperSlide key={index}>
              <VideoTiles id={video.key} />
            </SwiperSlide>
          ))}

          <div className="custom-prev-button absolute -left-3 top-36 z-10 cursor-pointer bg-white opacity-90 flex justify-center items-center w-14 h-16 rounded-md group">
            <span className="icon-[ic--outline-keyboard-arrow-left] text-black group-hover:text-title text-4xl"></span>
          </div>
          <div className="custom-next-button absolute -right-3 top-36 z-10 cursor-pointer bg-white opacity-90 flex justify-center items-center w-14 h-16 rounded-md group">
            <span className="icon-[ic--outline-keyboard-arrow-right] text-black group-hover:text-title text-4xl"></span>
          </div>
        </Swiper>
      ) : (
        <VideoTiles id={data.key} />
      )}
    </>
  );
}
