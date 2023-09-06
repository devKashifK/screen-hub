import { Heading } from "@/components/custom/Heading";
import Images from "@/components/custom/Images";
import React from "react";

import "swiper/css";
import "swiper/css/pagination";

export default function AllImages({ images, id }: { images?: any; id: any }) {
  return (
    <div className="flex flex-col gap-5">
      <Heading className="text-black">
        <div className="flex justify-center items-center gap-3">
          Images <span className="text-sm text-[#909090]">{images.length}</span>
        </div>
      </Heading>
      <div className="w-full h-56">
        <Images images={images} id={id} />
      </div>
    </div>
  );
}
