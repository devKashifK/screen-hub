"use client";
import { Attribute, HighlightText, Title } from "@/components/custom/Typo";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
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
        className="cursor-pointer absolute -top-5 right-14 w-10 h-10 flex justify-center items-center rounded-full bg-black bg-opacity-70 z-50"
        onClick={() => setShowBox(!showBox)}
      >
        <span className="icon-[material-symbols--close-rounded] text-xl hover:text-title text-white"></span>
      </div>
      <div className="flex flex-col gap-2 w-1/2 pr-20  border-r border-gray-500  justify-center">
        <HighlightText className="text-title">{info.name}</HighlightText>
        <div className="flex gap-2 flex-wrap">
          <Badge className="cursor-pointer rounded-full bg-transparent border border-textHighlight text-white px-3 py-1  hover:bg-opacity-10 hover:text-black">
            {info.birthday}
          </Badge>
          <Badge className="cursor-pointer rounded-full bg-transparent border border-textHighlight text-white px-3 py-1  hover:bg-opacity-10 hover:text-black">
            {info.gender === 2 ? "Male" : "Female"}
          </Badge>
          <Badge className="cursor-pointer rounded-full bg-transparent border border-textHighlight text-white px-3 py-1  hover:bg-opacity-10 hover:text-black">
            {info.known_for_department}
          </Badge>
          <Badge className="cursor-pointer rounded-full bg-transparent border border-textHighlight text-white px-3 py-1  hover:bg-opacity-10 hover:text-black">
            Place of Birth: {info.place_of_birth}
          </Badge>
        </div>
      </div>
      <div className="pl-5 flex gap-2 flex-col w-1/2">
        <div className="flex gap-1 flex-col overflow-y-auto hide-scroll">
          <Attribute className="text-sm">{info.biography}</Attribute>
        </div>
      </div>
    </div>
  );
}
