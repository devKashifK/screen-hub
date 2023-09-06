import { cn } from "@/lib/utils";
import React from "react";

export const Dot = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "mx-2 text-center flex justify-center items-center w-0.5 h-0.5 rounded-full dark:bg-white bg-black",
        className
      )}
    ></div>
  );
};
