"use client";
import { Attribute } from "@/components/custom/Typo";
import { cn } from "@/lib/utils";
import { TabsList } from "@radix-ui/react-tabs";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Header({
  children,
  tab,
  page,
  totalPage,
}: {
  children: any;
  tab?: any;
  page?: any;
  totalPage?: any;
}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrollPosition(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <TabsList
      className={cn(
        "h-max py-4 flex gap-5 justify-between items-center rounded-none w-full z-20 relative shadow-md px-10",
        scrollPosition > 100 ? "bg-[#1A1A1A]" : "bg-black",
        scrollPosition > 100 ? "fixed top-0" : "flex"
      )}
    >
      <div>{children}</div>
      <div className="z-50 flex gap-2 items-center justify-center">
        <Link
          href={`/discover/${tab}?page=${page - 1}`}
          className="bg-hoverColor w-6 h-6 rounded-full flex justify-center items-center"
        >
          <span className="icon-[zondicons--cheveron-left]"></span>
        </Link>
        <Link
          href={`/discover/${tab}?page=${page + 1} `}
          className="bg-hoverColor w-6 h-6 rounded-full flex justify-center items-center"
        >
          <span className="icon-[zondicons--cheveron-right]"></span>
        </Link>
        <Attribute className="ml-2">{`${page} / ${totalPage}`}</Attribute>
      </div>
    </TabsList>
  );
}
