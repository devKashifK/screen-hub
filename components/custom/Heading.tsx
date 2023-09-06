import { cn } from "@/lib/utils";
// import { Separator } from "@radix-ui/react-separator";
import React from "react";

export function Title({
  className,
  children,
}: {
  className?: string;
  children?: string;
}) {
  return (
    <h4 className={cn("text-title text-4xl font-medium", className)}>
      {children}
    </h4>
  );
}

export function Heading({
  className,
  children,
}: {
  className?: string;
  children?: any;
}) {
  return (
    <div
      className={cn(
        "flex gap-3 justify-start items-center dark:text-white text-black text-3xl font-bold",
        className
      )}
    >
      <span className="flex w-1.5 h-8 bg-title rounded-sm"></span>
      <h5>{children}</h5>
      <span className="icon-[zondicons--cheveron-right] text-title font-normal text-5xl"></span>
    </div>
  );
}
