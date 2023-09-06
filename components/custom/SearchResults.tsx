"use client";
import { searchMulti } from "@/app/(services)/explore";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getYear } from "../helpers/date";
import { Attribute } from "./Typo";
import Link from "next/link";
import { getVideos } from "@/app/(services)/person";
import { randomIndex } from "../helpers/extra";
import ReactPlayer from "react-player";

export default function SearchResults({ query }: { query: any }) {
  const [data, setData] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      const results = await searchMulti(query);
      setData(results.results);
    };

    fetchData();
  }, [query]);

  return (
    <div className="absolute bg-[#1F1F1F] w-full min-h-max max-h-[90vh] overflow-y-auto hide-scroll top-9 rounded-md z-50 left-0 pb-0 gap-0 flex flex-col last:border-none">
      {data?.map((result: any, index: any) => {
        if (result.media_type == "person") {
          return <PersonResultCard result={result} key={index} />;
        } else if (result.media_type === "movie") {
          return <MovieResultCard result={result} key={index} />;
        }
      })}
    </div>
  );
}

export function MovieResultCard({ result }: { result: any }) {
  return (
    <div className="border-b border-hoverColor  last:border-b-0 flex flex-col gap-0 pb-0">
      <Link
        href={`/title/${result.id}`}
        key={result.id}
        className="flex gap-2 px-2 py-2  hover:bg-[#313131] "
      >
        <div className="relative h-[80px] w-[70px] object-cover">
          <Image
            alt=""
            fill={true}
            src={
              result.poster_path
                ? `https://image.tmdb.org/t/p/original/${result.poster_path}`
                : "/blank.png"
            }
          />
        </div>
        <div className="flex flex-col justify-center">
          {result.title}
          <Attribute>{getYear(result.release_date)}</Attribute>
        </div>
      </Link>
      <ShowMovieVideo item={result} />
    </div>
  );
}

export function PersonResultCard({ result }: { result: any }) {
  const randomVideo = randomIndex(result.known_for, 2);

  return (
    <div className="border-b border-hoverColor  last:border-b-0 flex flex-col gap-0 pb-0">
      {result.profile_path ? (
        <>
          <Link
            href={`/name/${result.id}`}
            key={result.id}
            className="flex gap-2 px-2 py-2 hover:bg-[#313131] "
          >
            <div className="relative h-[80px] w-[70px] object-cover">
              <Image
                alt=""
                fill={true}
                src={
                  result.profile_path
                    ? `https://image.tmdb.org/t/p/original/${result.profile_path}`
                    : "/blank.png"
                }
              />
            </div>
            <div className="flex flex-col justify-center">
              {result.name}
              <Attribute>{result.known_for_department}</Attribute>
            </div>
          </Link>
          <div className="w-full h-60">
            {randomVideo.map((item: any, index: number) => (
              <ShowPersonalVideo item={item} key={index} />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export function ShowPersonalVideo({ item }: { item: any }) {
  const [videos, setVideos] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getVideos({ type: item.media_type, id: item.id });
      const filteredData = response.results.filter(
        (item: any) => item.type === "Clip" || "Trailer"
      );
      setVideos(randomIndex(filteredData, 2));
    };
    fetchData();
  }, [item]);
  if (videos?.length <= 1) {
    return null;
  }
  return (
    <div className="flex w-full h-60">
      {videos?.map((video: any, index: any) => {
        return (
          <div
            className="hover:bg-[#313131] py-2 px-2 flex flex-col w-full"
            key={index}
          >
            <div className="w-full h-[95%]">
              <ReactPlayer
                className="react-player"
                url={`https://www.youtube.com/watch?v=${video.key}`}
                width="100%"
                height="100%"
                light={true}
              />
            </div>
            <Attribute>{video.name.substring(0, 17)}</Attribute>
          </div>
        );
      })}
    </div>
  );
}

export function ShowMovieVideo({ item }: { item: any }) {
  const [videos, setVideos] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getVideos({ type: item.media_type, id: item.id });
      const filteredData = response.results.filter(
        (item: any) => item.type === "Clip" || "Trailer"
      );
      setVideos(randomIndex(filteredData, 2));
    };
    fetchData();
  }, [item]);
  if (videos?.length <= 1) {
    return null;
  }
  return (
    <div className="flex w-full h-60">
      {videos?.map((video: any, index: any) => {
        return (
          <div
            className="hover:bg-[#313131] py-2 px-2 flex flex-col w-full"
            key={index}
          >
            <div className="w-full h-[95%]">
              <ReactPlayer
                className="react-player"
                url={`https://www.youtube.com/watch?v=${video.key}`}
                width="100%"
                height="100%"
                light={true}
              />
            </div>
            <Attribute>{video.name.substring(0, 17)}</Attribute>
          </div>
        );
      })}
    </div>
  );
}
