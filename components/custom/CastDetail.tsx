import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { Attribute } from "./Typo";

export default function CastDetail({
  image,
  name,
  characterName,
  id,
}: {
  image?: string;
  name?: string;
  characterName?: string;
  id?: string;
}) {
  return (
    <div className="flex-shrink-0 flex justify-center items-center flex-col gap-3">
      <Suspense>
        <Image
          src={
            image
              ? `https://image.tmdb.org/t/p/original/${image}`
              : "/profile.jpg"
          }
          alt=""
          className="rounded-full h-56 w-56 object-cover"
          height={224}
          width={224}
        />
      </Suspense>
      <div className="flex flex-col justify-center items-center">
        <Link
          href={`/name/${id}`}
          className="font-bold dark:text-white text-black hover:underline"
        >
          {name}
        </Link>
        <Attribute>{characterName}</Attribute>
      </div>
    </div>
  );
}
