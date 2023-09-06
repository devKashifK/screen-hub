import Navbar from "@/app/(navbar)/Navbar";
import {
  getAllTrailer,
  getPerson,
  getPersonAllImage,
  getPersonCombineCredits,
  getPersonTV,
} from "@/app/(services)/person";
import AllImages from "@/app/title/[id]/AllImages";

import { Options } from "@/app/title/[id]/Options";

import React, { Suspense } from "react";
import Tv from "./Tv";
import AccordionTable from "@/components/custom/Table";
import { Heading } from "@/components/custom/Heading";
import { Attribute } from "@/components/custom/Typo";
import { MovieCard } from "@/components/custom/Card";

import dynamic from "next/dynamic";
import Sidebar from "@/app/(sidebar)/Sidebar";
import NowPlaying from "@/components/custom/NowPlaying";
import PopularTvSeries from "@/components/custom/Popular";
import TrendingPerson from "@/components/custom/TrendingPerson";
import Link from "next/link";
import Footer from "@/app/Footer";
const Videos = dynamic(() => import("./Videos"), { suspense: true });

export default async function page({ params }: { params: any }) {
  const person = await getPerson(params.id);
  const images = await getPersonAllImage(params.id);

  const tv = await getPersonTV(params.id);
  const credits = await getPersonCombineCredits(params.id);
  const trailers = await getAllTrailer(params.id);

  function organizeDataByMediaType(dataArray: any) {
    const organizedData: any = [];

    dataArray.forEach((data: any) => {
      const category = data.media_type === "movie" ? "Movie" : "TV";
      const existingCategory = organizedData.find(
        (item: any) => item.category === category
      );

      if (existingCategory) {
        existingCategory.data.push({ ...data, category: data.media_type });
      } else {
        organizedData.push({
          category,
          data: [{ ...data, category: data.media_type }],
        });
      }
    });

    return organizedData;
  }

  const peopleData = organizeDataByMediaType(credits.cast);

  return (
    <div className="dark:bg-black bg-white relative">
      <Navbar />
      <div className="mx-auto flex flex-col gap-12 mb-5">
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${person.profile_path})`,
          }}
          className="relative bg-cover"
        >
          <div className="absolute w-full h-full backdrop-filter backdrop-blur-3xl backdrop-saturate-100 transform translate-x-0 translate-y-0 translate-z-0 will-change-transform"></div>
          <div className="flex justify-between gap-0  relative z-10 px-4 pt-12">
            <div className="w-max">
              <h4 className="text-5xl text-white">{person.name}</h4>
              <div className="flex items-center gap-1 ">
                <Attribute className="text-white">
                  {person.known_for_department}
                </Attribute>
              </div>
            </div>
          </div>
          <div className="flex gap-1 h-max relative z-10 px-4 py-2 ">
            <div className="w-64">
              <Suspense>
                <MovieCard
                  poster={person.profile_path}
                  action={false}
                  watchListButton={false}
                  className="border-none rounded-none"
                />
              </Suspense>
            </div>
            <div className="flex-1 w-[40%]">
              <Suspense
                fallback={<div className="bg-red-500 w-56 h-56">loading</div>}
              >
                <Videos data={trailers} />
              </Suspense>
            </div>
            <div className="w-64 flex flex-col gap-1">
              <Link
                href={`/video/${params.id}`}
                className="rounded-sm w-full h-1/2 bg-black text-white bg-opacity-20 flex flex-col gap-2 justify-center items-center"
              >
                <span className="icon-[bx--bxs-videos] text-4xl"></span>
                {trailers.length} VIDEOS
              </Link>
              <div className="rounded-sm w-full h-1/2 bg-black text-white bg-opacity-20 flex flex-col gap-2 justify-center items-center">
                <span className="icon-[ph--images-square-fill] text-4xl"></span>
                {images.length} PHOTOS
              </div>
            </div>
          </div>
          <div className="relative z-50 w-[80%] py-2 px-4">
            {person.biography
              .substring(0, 719)
              .split("\n")
              .map((line: any, index: number) => (
                <span key={index} className="text-white">
                  {line}
                  <br />
                </span>
              ))}
            ...
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="px-4 flex flex-col gap-10 w-[68%]">
          <Suspense>
            <AllImages
              images={images.map((item) => item.file_path)}
              id={params.id}
            />
          </Suspense>
          <div className="flex flex-col gap-4">
            <Heading className="text-black">TV Presence</Heading>
            <Tv data={tv.cast} key={tv.id} />
          </div>
          <div className="flex flex-col gap-4">
            <Heading className="text-black">Know For</Heading>
            <AccordionTable data={peopleData} />
          </div>
        </div>
        <div className="w-[32%] flex flex-col justify-start items-start">
          <Sidebar
            title="Explore"
            components={[
              <NowPlaying key={1} />,
              <PopularTvSeries key={2} />,
              <TrendingPerson key={3} />,
            ]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
