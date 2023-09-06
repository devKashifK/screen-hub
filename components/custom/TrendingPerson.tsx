import { trendingPerson } from "@/app/(services)/explore";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { Attribute, HighlightText } from "./Typo";
import BlurredImage from "./BlurredImage";

export default async function TrendingPerson() {
  const trending = await trendingPerson();
  return (
    <div>
      <div className="flex gap-1 w-full  relative">
        {trending?.results
          ?.splice(Math.floor(Math.random() * trending.results.length - 3), 3)
          .map((item: any) => (
            <div
              className="relative w-max h-max group transition-all cursor-pointer"
              key={item.id}
            >
              <Suspense>
                <div className="w-[120px] h-[150px] relative">
                  <BlurredImage poster={item.profile_path} />
                </div>
              </Suspense>
              <div className="absolute -top-full left-0 w-full h-full bg-black bg-opacity-40 group-hover:flex group-hover:top-0 transition-all px-2 py-3 ease-in-out hidden justify-between flex-col items-start">
                <div className="bg-title px-1 py-1 rounded-sm">
                  <p className="text-[7px] text-white">Trending</p>
                </div>
                <Link
                  href={`/name/${item.id}`}
                  className="flex flex-col gap-1 text-white"
                >
                  <HighlightText className="text-white relative z-40 text-sm- font-extrabold">
                    {item.name}
                  </HighlightText>
                  <Attribute>{item.known_for_department}</Attribute>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
