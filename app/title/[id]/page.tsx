import {
  getDetails,
  getImages,
  getReview,
  getVideos,
} from "@/app/(services)/contentData";
import React, { Suspense } from "react";
import VideoTiles from "../../../components/custom/VideoTiles";
import { MovieCard } from "@/components/custom/Card";
import Cast from "./Cast";
import AllImages from "./AllImages";
import AllVideos from "./AllVideos";
import Details from "./Details";
import Navbar from "@/app/(navbar)/Navbar";
import { ContentRating, Options } from "./Options";
import { Dot } from "@/components/custom/Dot";
import Realted from "./Realted";
import UserReview from "./UserReview";
import Latest from "./Latest";
import { Attribute } from "@/components/custom/Typo";
import Videos from "@/app/name/[id]/Videos";
import Sidebar from "@/app/(sidebar)/Sidebar";
import NowPlaying from "@/components/custom/NowPlaying";
import PopularTvSeries from "@/components/custom/Popular";
import TrendingPerson from "@/components/custom/TrendingPerson";
import Link from "next/link";
import Footer from "@/app/Footer";

export default async function page({ params }: { params: any }) {
  const videos = await getVideos(params.id);
  const detail = await getDetails(params.id);
  const images = await getImages(params.id);
  const review = await getReview(params.id);

  const director = detail.credits.crew.find(
    (item: any) => item.job === "Director"
  );
  const writer = detail.credits.crew.filter(
    (item: any) => item.job === "Screenplay" || item.job === "Writer"
  );

  const totalMinutes = detail.runtime;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const dateString = detail.release_date;
  const date = new Date(dateString);
  const year = date.getFullYear();

  const getAllImagePaths = (...arrays: any) => {
    const imagePaths: any = [];
    arrays.forEach((array: any) => {
      array.forEach((item: any) => {
        if (item.file_path) {
          imagePaths.push(item.file_path);
        }
      });
    });
    return imagePaths;
  };

  const allImages = getAllImagePaths(
    images.backdrops,
    images.logos,
    images.posters
  );

  return (
    <div className="">
      <Navbar />
      <div className="mx-auto flex flex-col gap-12">
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail.poster_path})`,
          }}
          className="relative"
        >
          <div className="absolute w-full h-full backdrop-filter backdrop-blur-3xl backdrop-saturate-100 transform translate-x-0 translate-y-0 translate-z-0 will-change-transform"></div>
          <div className="flex justify-between gap-0  relative z-10 px-4 pt-12">
            <div className="w-max flex flex-col gap-3">
              <h4 className="text-5xl text-white">{detail.original_title}</h4>
              <div className="flex items-center gap-1 text-[#A8AAAA] -mt-2">
                <Attribute className="text-white">{year}</Attribute>
                <Dot className="bg-[#A8AAAA]" />
                <Attribute>{`${hours}h ${minutes}m`}</Attribute>
                <Dot className="bg-[#A8AAAA]" />
                <Attribute>{detail.adult ? "13+" : "PG-13"}</Attribute>
              </div>
            </div>

            <ContentRating detail={detail} />
          </div>
          <div className="flex gap-1 h-max relative z-10 px-4 py-2 ">
            <div className="w-64">
              <MovieCard
                poster={detail.poster_path}
                action={false}
                className="border-none rounded-none"
              />
            </div>
            <div className="flex-1 w-[40%]">
              <Videos data={videos.results} />
            </div>
            <div className="w-64 flex flex-col gap-1">
              <Link
                href={`/video/${params.id}`}
                className="rounded-sm w-full h-1/2 bg-black text-white bg-opacity-20 flex flex-col gap-2 justify-center items-center"
              >
                <span className="icon-[bx--bxs-videos] text-4xl"></span>
                {videos.results.length} VIDEOS
              </Link>
              <Link
                href={`/title/${params.id}/mediaviewer/abcdefwksDS`}
                className="rounded-sm w-full h-1/2 bg-black text-white bg-opacity-20 flex flex-col gap-2 justify-center items-center"
              >
                <span className="icon-[ph--images-square-fill] text-4xl"></span>
                {allImages.length} PHOTOS
              </Link>
            </div>
          </div>
          <div className="relative z-10 px-4 pb-12">
            <Details
              director={director}
              writers={writer}
              cast={detail.credits.cast}
              overview={detail.overview}
              genres={detail.genres}
              review={review.results}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="px-4 flex flex-col gap-20 w-[68%]">
            <AllVideos videos={videos} />
            <AllImages images={allImages} id={params.id} />
            <Suspense>
              <Cast detail={detail} />
            </Suspense>
            <Suspense>
              <Realted genres={detail.genres} />
            </Suspense>
            <Suspense>
              <UserReview review={review} />
            </Suspense>
            <Suspense>
              <Latest />
            </Suspense>
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
      </div>
      <Footer />
    </div>
  );
}
