import React from "react";
import { Back } from "@/components/custom/Back";
import { getPerson, getPersonAllImage } from "@/app/(services)/person";
import { ImageViewer } from "@/app/title/[id]/mediaviewer/[slug]/ImageViewer";
import Info from "./Info";

export default async function page({ params }: { params: any }) {
  const details = await getPerson(params.id);
  const image = await getPersonAllImage(params.id);

  return (
    <div className="h-screen flex flex-col gap-4 overflow-hidden bg-black relative">
      <div className="flex justify-between items-center px-5 pt-2">
        <Back className="flex gap-2 px-4 py-2 justify-center items-center cursor-pointer text-white hover:bg-gray-500 rounded-sm  hover:bg-opacity-20 font-bold">
          <span className="icon-[material-symbols--close-rounded] text-lg"></span>
          Close
        </Back>
        <div className="flex gap-2 px-4 py-2 justify-center items-center cursor-pointer text-white hover:bg-gray-500 rounded-sm  hover:bg-opacity-20 font-bold">
          <span className="icon-[ph--share-network-bold] text-lg"></span>
          Share
        </div>
      </div>
      <div className="h-full">
        <ImageViewer images={image} slug={params.slug} />
      </div>
      <Info info={details} />
    </div>
  );
}
