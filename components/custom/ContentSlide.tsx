"use client";
import React from "react";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { MovieCard } from "./Card";
import "swiper/swiper-bundle.css";

export default function ContentSlide({
  data,
  width = "w-full",
  slides = 4,
}: {
  data: any;
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
        allowTouchMove={true}
        direction="horizontal"
        spaceBetween={25}
        modules={[Navigation]}
        className="mySwiper w-full  flex gap-2 relative"
      >
        {data.map((movie: any, index: number) => (
          <SwiperSlide
            key={index}
            className="w-full  flex justify-center items-center"
          >
            <MovieCard
              id={movie.id}
              poster={movie.poster_path}
              key={movie.id}
              title={movie.title ? movie.title : movie.name}
              rating={movie.vote_average}
              video={movie.video}
              adult={movie.adult}
            />
          </SwiperSlide>
        ))}
        {data.length > 6 ? (
          <>
            <div className="custom-prev-button absolute -left-3 top-28 z-10 cursor-pointer bg-black bg-opacity-70 opacity-90 flex justify-center items-center w-14 h-16 rounded-md group">
              <span className="icon-[ic--outline-keyboard-arrow-left] text-white group-hover:text-title text-4xl"></span>
            </div>
            <div className="custom-next-button absolute -right-3 top-28 z-10 cursor-pointer bg-black bg-opacity-70 opacity-90 flex justify-center items-center w-14 h-16 rounded-md group">
              <span className="icon-[ic--outline-keyboard-arrow-right] text-white group-hover:text-title text-4xl"></span>
            </div>
          </>
        ) : null}
      </Swiper>
    </>
  );
}
