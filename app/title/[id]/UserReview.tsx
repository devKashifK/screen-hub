"use client";
import FormatedDate from "@/components/custom/Date";

import { Dot } from "@/components/custom/Dot";
import { Heading } from "@/components/custom/Heading";
import { Description, HighlightText } from "@/components/custom/Typo";
import React from "react";

export default function UserReview({ review }: { review?: any }) {
  return (
    <div className="flex flex-col gap-6">
      <Heading>User reviews</Heading>
      <div className="flex flex-col gap-5 w-full">
        {review.results.map((review: any) => {
          return (
            <>
              <Tooltip key={review.id} content={review.content} />
              <div className="flex gap-1 items-center text-black dark:text-white text-sm">
                <HighlightText>{review.author}</HighlightText>
                <Dot className="" />
                <FormatedDate dateString={review.created_at} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export function Tooltip({ content }: { content?: any }) {
  const lines = content.split("\r\n");
  return (
    <div className="relative flex flex-col gap-5 ">
      <div className="border-hoverColor  border px-4 py-8 rounded-sm  w-full relative ">
        <div className="bg-title px-3 rounded-md w-max mb-4 ">Review</div>
        <div className="flex flex-col gap-1">
          <h4 className="font-bold text-lg dark:text-white text-black">
            {lines[0]}
          </h4>

          {lines.slice(1).map((paragraph: string, index: number) => (
            <Description key={index} className="mt-2 ">
              {paragraph}
            </Description>
          ))}
        </div>
        <div className="absolute -bottom-[13px] left-12 transform -translate-x-1/2">
          <div className="w-4 h-6 bg-white dark:bg-[#000000] border-hoverColor  border-b border-r p-3 rounded-sm rotate-45 transform origin-center"></div>
        </div>
      </div>
    </div>
  );
}
