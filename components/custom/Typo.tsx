import { cn } from "@/lib/utils";
import React from "react";

export function HighlightText({
  children,
  className,
}: {
  children?: any;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-textHighlight font-normal text-[16px] hover:underline ",
        className
      )}
    >
      {children}
    </span>
  );
}

export function Attribute({
  children,
  className,
}: {
  children?: any;
  className?: string;
}) {
  return (
    <span className={cn("text-textAttribute font-normal text-sm", className)}>
      {children}
    </span>
  );
}

export function Description({
  children,
  className,
}: {
  children?: any;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "dark:text-gray-300 text-[#212121] font-normal text-[16px]",
        className
      )}
    >
      {children}
    </span>
  );
}

export function Title({
  children,
  className,
}: {
  children?: any;
  className?: string;
}) {
  return (
    <h6
      className={cn(
        "dark:text-white text-[#212121] font-normal text-[16px]",
        className
      )}
    >
      {children}
    </h6>
  );
}

export function Role({
  children,
  className,
}: {
  children?: any;
  className?: string;
}) {
  return (
    <h6 className={cn("dark:text-white font-bold text-[16px]", className)}>
      {children}
    </h6>
  );
}
