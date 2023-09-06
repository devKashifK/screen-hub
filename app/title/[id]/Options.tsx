import { Dot } from "@/components/custom/Dot";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

export function Options({ id }: { id: any }) {
  const option = [
    {
      id: 1,
      name: "Cast & Crew",
      href: `/${id}/full_credit/${id}`,
    },
    {
      id: 2,
      name: "User reviews",
      href: "",
    },
    {
      id: 3,
      name: "Trivia",
      href: "",
    },
  ];
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex">
          {/* <div className="flex gap-2 ml-2 justify-center items-center">
            <Separator orientation="vertical" className=" bg-hoverColor" />
            <div className="flex justify-center text-white items-center gap-1 hover:bg-[black] hover:bg-opacity-20 p-1 rounded-sm">
              <span className="icon-[octicon--apps-16]"></span>All Topics
            </div>
            <Separator orientation="vertical" className="bg-hoverColor" />
            <div className="rounded-full text-white hover:bg-hoverColor w-10 h-10 flex justify-center items-center p-1">
              <span className="icon-[octicon--share-android-16] text-2xl cursor-pointer"></span>
            </div> */}
        </div>
      </div>
    </div>
    // </div>
  );
}

export async function ContentRating({ detail }: { detail: any }) {
  return (
    <div className="flex gap-6 mt-1 justify-end">
      <div className="flex justify-start items-center flex-col gap-1">
        <h4 className="tracking-widest text-sm font-medium text-white">
          IMDb Rating
        </h4>
        <div className="hover:bg-[black] hover:bg-opacity-20 px-2 py-1 rounded-sm flex justify-center items-center flex-col">
          <div className="flex justify-center items-center gap-1 cursor-pointer">
            <span className="text-[#F5C92A] text-3xl icon-[ph--star-fill]"></span>
            <div className="font-bold text-xl text-white">
              {detail.vote_average.toFixed(1)}
              <span className="text-sm text-white"> /10</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-start items-center flex-col gap-1 cursor-pointer">
        <h4 className="tracking-widest text-sm font-medium text-white">
          Your Rating
        </h4>
        <div className="text-textHighlight hover:bg-[black] hover:bg-opacity-20 px-2 rounded-sm flex justify-center items-center gap-1 py-1 font-bold text-xl">
          <span className=" text-3xl icon-[ic--round-star-outline] font-bold"></span>
          Rate
        </div>
      </div>
      <div className="flex justify-start items-center flex-col gap-1 cursor-pointer">
        <h4 className="tracking-widest text-sm font-medium text-white">
          Popularity
        </h4>
        <div className="hover:bg-[black] text-white hover:bg-opacity-20 px-2 rounded-sm flex justify-center items-center gap-1 py-1">
          <span className=" text-3xl icon-[mdi--arrow-right-thin-circle-outline]"></span>
          {detail.popularity.toFixed(1)}
        </div>
      </div>
    </div>
  );
}
