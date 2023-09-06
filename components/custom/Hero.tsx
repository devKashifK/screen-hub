"use client";
import { getVideos } from "@/app/(services)/contentData";
import React, { Suspense, useEffect, useState } from "react";
import VideoTiles from "./VideoTiles";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import BlurredImage from "./BlurredImage";
import { Description, Title } from "./Typo";
import { Button } from "../ui/button";
import Link from "next/link";
import { getYear } from "../helpers/date";

export default function Hero({ trailer, upcoming }: any) {
  const [id, setId] = useState<number>(upcoming.results[0].id);
  const [data, setData] = useState();
  const handleClick = (id: number) => {
    setId(id);
  };
  useEffect(() => {
    const fetchData = async () => {
      const results = await getVideos(id);
      setData(results.results);
    };

    fetchData();
  }, [id]);
  return (
    <div className="w-full h-[480px] flex gap-4">
      <div className="w-[60%] h-full">
        <VideoSlider data={data} />
      </div>
      <div className="w-[40%] h-full px-2 bg-black">
        <UpNext upcoming={upcoming} handleClick={handleClick} />
      </div>
    </div>
  );
}

function VideoSlider({ data }: any) {
  return (
    <Swiper
      navigation={{
        prevEl: ".custom-prev-button",
        nextEl: ".custom-next-button",
      }}
      slidesPerView={1}
      spaceBetween={30}
      autoplay={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Autoplay]}
      className="mySwiper w-full h-full flex gap-4 relative"
    >
      {data?.map((video: any) => (
        <Suspense
          key={video.id}
          fallback={<div className="bg-red-500 w-56 h-56">red</div>}
        >
          <SwiperSlide key={video.id} className="flex flex-col ">
            <div className="w-full h-[88%]">
              <VideoTiles id={video.key} />
            </div>
            <div className="flex gap-4 items-center py-1">
              <span className="icon-[material-symbols--slow-motion-video-rounded] text-[45px] group-hover:text-title text-title"></span>
              <div>
                <Title className="text-white font-bold text-md">
                  {video.name}
                </Title>
                <Description className="dark:text-white">
                  {getYear(video.published_at)}
                </Description>
              </div>
            </div>
          </SwiperSlide>
        </Suspense>
      ))}
      <div className="custom-prev-button absolute border border-hoverColor -left-3 top-36 z-10 cursor-pointer bg-black opacity-40 flex justify-center items-center w-14 h-16 rounded-md group">
        <span className="icon-[ic--outline-keyboard-arrow-left] text-white group-hover:text-title text-4xl"></span>
      </div>
      <div className="custom-next-button absolute border border-hoverColor -right-3 top-36 z-10 cursor-pointer bg-black opacity-40 flex justify-center items-center w-14 h-16 rounded-md group">
        <span className="icon-[ic--outline-keyboard-arrow-right] text-white group-hover:text-title text-4xl"></span>
      </div>
    </Swiper>
  );
}

function UpNext({ upcoming, handleClick }: any) {
  return (
    <div className="h-full">
      <div className="flex flex-col gap-4 h-[95%]  overflow-y-auto hide-scroll ">
        {upcoming.results.map((item: any) => (
          <div key={item.id} className="flex gap-4 bg-hoverColor p-2">
            <div className="w-20 h-28 relative flex-shrink-0">
              <BlurredImage poster={item.poster_path} />
            </div>
            <div>
              <Title>{item.original_title}</Title>
              <Description className="text-xs">
                {item.overview.substring(0, 130)}...
              </Description>
              <Button
                onClick={() => handleClick(item.id)}
                className="px-2 py-1 text-xs bg-hoverColor text-white h-6 hover:bg-black group flex gap-1"
              >
                <span className="icon-[material-symbols--slow-motion-video-rounded] text-lg group-hover:text-title"></span>
                Watch Related Videos
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="h-[4%] mt-4">
        <Link
          href={"/discover/movie"}
          className="text-white px-2 py-1 rounded-md border-hoverColor border "
        >
          Discover More
        </Link>
      </div>
    </div>
  );
}
