import { getLatest } from "@/app/(services)/contentData";
import { MovieCard } from "@/components/custom/Card";
import { Heading } from "@/components/custom/Heading";
import React from "react";

export default async function Latest() {
  const latest = await getLatest();
  return (
    <div className="w-full flex flex-col gap-5">
      <Heading>Latest Picks</Heading>
      <div className="flex gap-5 w-full flex-wrap">
        {latest.results.slice(0, 12).map((item: any) => (
          <MovieCard
            poster={item.poster_path}
            rating={item.vote_average}
            title={item.original_title}
            video={item.video}
            adult={item.adult}
            id={item.id}
            key={item.id}
            width="w-[190px]"
            height="h-[280px]"
            watchlist={false}
            trailer={false}
          />
        ))}
      </div>
    </div>
  );
}
