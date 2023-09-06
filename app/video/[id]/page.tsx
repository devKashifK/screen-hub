import { getAllVideo } from "@/app/(services)/contentData";
import React from "react";

export default async function page({ params }: any) {
  const videos = await getAllVideo(params.id);
  console.log(params.id);
  return <div>{params.id}</div>;
}
