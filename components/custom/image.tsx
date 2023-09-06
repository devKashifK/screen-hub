"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function ImageCard({
  image,
  id,
  zoom = true,
  width = "w-full",
  className,
}: {
  image?: string;
  id?: any;
  zoom?: boolean;
  width?: string;
  className?: string;
}) {
  const [isLoading, setLoading] = useState(true);
  const path = usePathname();
  var segments = path.split("/");
  var name = segments[1];

  return (
    <>
      <div
        className={cn(
          width,
          "h-[90%] relative shrink-0 cursor-pointer group transition-all",
          className
        )}
      >
        <Image
          src={`https://image.tmdb.org/t/p/original/${image}`}
          alt=""
          className={cn(
            "object-cover duration-700 ease-in-out",
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          )}
          fill={true}
          onLoadingComplete={(image) => setLoading(false)}
        />
        <div className="absolute -top-full left-0 h-full w-full group-hover:top-0 transition-all bg-black opacity-30"></div>
        {zoom && (
          <Link
            href={`/${name}/${id}/mediaviewer/${image}`}
            className="absolute hidden  bottom-2 right-2 w-6 h-6 bg-white group-hover:flex justify-center items-center rounded-full z-10"
          >
            <span className="icon-[iconoir--expand] text-sm text-textHighlight"></span>
          </Link>
        )}
      </div>
    </>
  );
}
