"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function Back({
  children,
  className,
}: {
  children?: any;
  className?: any;
}) {
  const router = useRouter();
  return (
    <div className={cn(className)} onClick={() => router.back()}>
      {children}
    </div>
  );
}
