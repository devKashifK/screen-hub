import React, { Suspense } from "react";
import { nowPlaying } from "@/app/(services)/explore";
import { HighlightText } from "./Typo";
import Link from "next/link";
import BlurredImage from "./BlurredImage";

export default async function NowPlaying() {
  const playing = await nowPlaying();
  return (
    <div className="flex gap-1 w-full  relative">
      {playing.results
        .splice(Math.floor(Math.random() * playing.results.length - 3), 3)
        .map((item: any) => (
          <Suspense key={item.id}>
            <div className="relative w-max h-max group transition-all cursor-pointer">
              <div className="relative w-[120px] h-[150px]">
                <BlurredImage poster={item.poster_path} />
              </div>
              <div className="absolute -top-full left-0 w-full h-full bg-black bg-opacity-40 group-hover:flex group-hover:top-0 transition-all px-2 py-3 ease-in-out hidden justify-between flex-col items-start">
                <div className="bg-title px-1 py-1 rounded-sm">
                  <p className="text-[7px] text-white">Now Playing</p>
                </div>
                <Link href={`/title/${item.id}`} className="text-white">
                  <HighlightText className="text-white relative z-40 text-sm- font-extrabold">
                    {item.title}
                  </HighlightText>
                </Link>
              </div>
            </div>
          </Suspense>
        ))}
    </div>
  );
}
