import { cn } from "@/lib/utils";
import React, { Suspense } from "react";
import { shuffledComponent } from "../(services)/explore";
import { Heading } from "@/components/custom/Heading";

export default function Sidebar({
  title,
  className,
  components,
}: {
  title?: string;
  className?: string;
  components: any;
}) {
  const shuffled = shuffledComponent(components);
  return (
    <div
      className={cn(
        "w-full h-full px-2 flex gap-10 justify-start items-start flex-col",
        className
      )}
    >
      <Heading className="text-title">{title}</Heading>
      {shuffled.map((component, index) => (
        <Suspense key={index}>{component}</Suspense>
      ))}
    </div>
  );
}
