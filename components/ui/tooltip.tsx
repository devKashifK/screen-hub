"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;
const TooltipPortal = TooltipPrimitive.Portal;

const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipArrow = TooltipPrimitive.Arrow;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
    arrow?: boolean;
  }
>(({ className, sideOffset = 4, arrow = true, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "group z-[10000] overflow-hidden rounded-md bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-xl animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      className
    )}
    {...props}
  >
    {props.children}
    {arrow ? (
      <TooltipArrow className="fill-white group-data-[side=top]:-mt-px shadow-none text-xl h-2" />
    ) : null}
  </TooltipPrimitive.Content>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipPortal,
  TooltipArrow,
};
