import { Dot } from "@/components/custom/Dot";

import { HighlightText, Role, Title } from "@/components/custom/Typo";
import WatchlistButton from "@/components/custom/WatchlistButton";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";

export default function Details({
  director,
  writers,
  cast,
  overview,
  genres,
  review,
}: {
  director?: any;
  writers?: any;
  cast?: any;
  overview?: string;
  genres?: any;
  review?: any;
}) {
  return (
    <div className="flex gap-10 items-center">
      <div className="w-[60%]">
        <div className="flex gap-4 py-2 flex-col text-white">
          <div className="flex gap-2">
            {genres.map((item: any) => (
              <Badge
                key={item.id}
                className="cursor-pointer rounded-full bg-transparent border border-hoverColor  text-white px-3 py-1  hover:bg-opacity-10 hover:text-black"
              >
                {item.name}
              </Badge>
            ))}
          </div>
          {overview}
        </div>
        <div className="flex gap-4 border-t py-3 border-hoverColor ">
          <Role className="text-white"> Director </Role>
          <HighlightText>{director.original_name}</HighlightText>
        </div>
        <div className="flex gap-4 py-3 border-t border-hoverColor ">
          <Role className="text-white">Writers</Role>
          {writers.map((item: any) => (
            <>
              <Link
                href={"#"}
                key={item.id}
                className="flex justify-center items-center"
              >
                <HighlightText>{item.original_name}</HighlightText>
                <Dot />
              </Link>
            </>
          ))}
        </div>
        <div className="flex gap-4 w-full justify-between py-3 items-center border-t border-hoverColor ">
          <div className="flex gap-4">
            <Role className="text-white">Stars</Role>
            {cast?.slice(0, 3).map((item: any) => (
              <Link
                href={"#"}
                key={item.id}
                className="flex justify-center items-center"
              >
                <HighlightText>{item.name}</HighlightText>
                <Dot />
              </Link>
            ))}
          </div>
          <span className="icon-[ic--baseline-chevron-right] cursor-pointer text-xl text-white"></span>
        </div>
        <div className="flex gap-4 border-y border-hoverColor  py-3 text-white">
          Production, box office & more at IMDbProtext-white
        </div>
      </div>
      <div className="flex justify-center gap-5 w-[30%] flex-col">
        <WatchlistButton />
        <Link href={"#"} className="text-title hover:underline font-bold">
          {review.length} Reviews
        </Link>
      </div>
    </div>
  );
}

function Highlight({ role, name }: { role: "string"; name: any }) {
  return (
    <div className="flex gap-4 border-t py-3 border-white">
      {role} <HighlightText>{name}</HighlightText>
    </div>
  );
}
