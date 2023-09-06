"use client";
import BlurredImage from "@/components/custom/BlurredImage";
import React, { Suspense, useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function ImageViewer({ images, slug }: { images: any; slug: string }) {
  const [initialSlides, setInitialSlides] = useState(0);

  useEffect(() => {
    const foundIndex = images.findIndex(
      (item: any) => item.file_path === `/${slug}`
    );
    if (foundIndex !== -1) {
      setInitialSlides(foundIndex);
    }
  }, [images, slug]);

  return (
    <Swiper
      key={initialSlides}
      spaceBetween={30}
      modules={[Navigation, Pagination]}
      className="mySwiper relative h-full"
      initialSlide={initialSlides}
      centeredSlides={true}
      loop={true}
      navigation={{
        prevEl: ".custom-prev-button",
        nextEl: ".custom-next-button",
      }}
    >
      {images.map((item: any, index: number) => (
        <SwiperSlide key={index} className="w-[80%] relative h-full mx-auto">
          <Suspense
            fallback={<div className="bg-red-500 w-56 h-56">loading</div>}
          >
            <BlurredImage poster={item.file_path} className="object-contain " />
          </Suspense>
        </SwiperSlide>
      ))}

      <div className="custom-prev-button absolute -left-0 top-[30%]  transform -translate-x-[30%]  z-10 cursor-pointer bg-white opacity-90 flex justify-center items-center w-14 h-16 rounded-md group">
        <span className="icon-[ic--outline-keyboard-arrow-left] text-black group-hover:text-title text-4xl"></span>
      </div>
      <div className="custom-next-button absolute -right-7  top-[30%]  transform -translate-x-[30%]  z-10 cursor-pointer bg-white opacity-90 flex justify-center items-center w-14 h-16 rounded-md group">
        <span className="icon-[ic--outline-keyboard-arrow-right] text-black group-hover:text-title text-4xl"></span>
      </div>
    </Swiper>
  );
}
