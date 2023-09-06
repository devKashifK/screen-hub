import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import React from "react";

export default function ImagePopover() {
  return (
    <div>
      <Popover modal={true}>
        <PopoverTrigger className="rounded-full w-7 h-7 flex justify-center items-center bg-white z-10">
          click
        </PopoverTrigger>
        <PopoverContent className="" sideOffset={5}>
          <div className="p-96 bg-red-500 z-50"> kdjhakjhhbjbkhbhkjb</div>
          akjedhakhd
        </PopoverContent>
      </Popover>
    </div>
  );
}
