import { Heading } from "@/components/custom/Heading";
import React from "react";
import { nowPlaying } from "./(services)/explore";
import ContentSlide from "@/components/custom/ContentSlide";

export async function NowPlaying() {
  const inTheatres = await nowPlaying();
  return (
    <div className="flex gap-10 flex-col">
      <Heading>In Theatres</Heading>
      <ContentSlide data={inTheatres.results} slides={6} />
    </div>
  );
}
