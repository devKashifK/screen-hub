"use client";
import { Dot } from "@/components/custom/Dot";
import { Attribute, HighlightText, Title } from "@/components/custom/Typo";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";

export default function Info({ info }: { info: any }) {
  const [showBox, setShowBox] = useState(true);
  return (
    <div
      className={cn(
        "w-full h-[28%] border px-8 py-3 border-t-gray-500 absolute bottom-0 bg-black bg-opacity-70 z-30  gap-4",
        showBox ? "flex" : "hidden"
      )}
    >
      <div
        className="cursor-pointer absolute -top-5 right-14 w-10 h-10 border-gray-500 border flex justify-center items-center rounded-full bg-black bg-opacity-70 z-50 "
        onClick={() => setShowBox(!showBox)}
      >
        <span className="icon-[material-symbols--close-rounded] text-xl hover:text-title text-white"></span>
      </div>
      <div className="flex flex-col gap-2 w-1/2 pr-20  border-r border-gray-500 ">
        <HighlightText className="text-title">{info.title}</HighlightText>
        <Attribute className="text-sm">{info.overview}</Attribute>
      </div>
      <div className="pl-5 flex gap-2 flex-col">
        <div className="flex gap-1 flex-col">
          Top Cast :
          {info.credits.cast.slice(0, 3).map((item: any) => (
            <Link
              href={"#"}
              key={item.id}
              className="flex flex-col gap-1 justify-start items-start"
            >
              {/* <img
                src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                alt=""
                className="w-20 h-20 rounded-full bg-cover"
              /> */}

              <HighlightText className="text-title flex justify-center items-center">
                {item.name}
              </HighlightText>
            </Link>
          ))}
        </div>
        <div className="flex gap-2 ">
          {info.genres.map((item: any) => (
            <Badge
              key={item.id}
              className="cursor-pointer rounded-full bg-transparent border border-textHighlight text-white px-3 py-1  hover:bg-opacity-10 hover:text-black"
            >
              <Link href={"#"}>{item.name}</Link>
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
