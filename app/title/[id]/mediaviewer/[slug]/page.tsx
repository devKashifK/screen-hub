import { getDetails, getImages } from "@/app/(services)/contentData";
import React from "react";
import { ImageViewer } from "./ImageViewer";
import Info from "./Info";
import { Back } from "@/components/custom/Back";

export default async function page({ params }: { params: any }) {
  const details = await getDetails(params.id);
  const image = await getImages(params.id);
  const getAllImagePaths = (...arrays: any) => {
    const imagePaths: any = [];
    arrays.forEach((array: any) => {
      array.forEach((item: any) => {
        if (item.file_path) {
          imagePaths.push({
            file_path: item.file_path,
            width: item.width,
            height: item.height,
          });
        }
      });
    });
    return imagePaths;
  };

  const allImages = getAllImagePaths(
    image.backdrops,
    image.logos,
    image.posters
  );
  return (
    <div className="h-screen flex flex-col gap-4 overflow-hidden bg-black relative">
      <div className="flex justify-between items-center px-5 pt-2">
        <Back className="flex gap-2 px-4 py-2 justify-center items-center cursor-pointer hover:bg-gray-500 rounded-sm  hover:bg-opacity-20 font-bold">
          <span className="icon-[material-symbols--close-rounded] text-lg"></span>
          Close
        </Back>
        <div className="flex gap-2 px-4 py-2 justify-center items-center cursor-pointer hover:bg-gray-500 rounded-sm  hover:bg-opacity-20 font-bold">
          <span className="icon-[ph--share-network-bold] text-lg"></span>
          Share
        </div>
      </div>
      <div className="h-full">
        <ImageViewer images={allImages} slug={params.slug} />
      </div>
      <Info info={details} />
    </div>
  );
}
