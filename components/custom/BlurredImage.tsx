"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

export default function BlurredImage({
  poster,
  className,
}: {
  poster: string;
  className?: string;
}) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      src={`https://image.tmdb.org/t/p/original/${poster}`}
      alt=""
      fill={true}
      className={cn(
        "object-cover duration-1000 ease-in-out",
        className,
        isLoading
          ? "scale-110 blur-3xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      )}
      onLoadingComplete={(image) => setLoading(false)}
    />
  );
}
