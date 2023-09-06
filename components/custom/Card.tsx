import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Attribute, Title } from "./Typo";
import BlurredImage from "./BlurredImage";

export function MovieCard({
  poster,
  rating,
  title,
  video,
  adult,
  id,
  action = true,
  width = "w-[190px]",
  height = "h-[216px]",
  watchlist = true,
  trailer = true,

  watchListButton = true,
  className,
}: {
  poster?: any;
  rating?: string;
  title?: string;
  video?: string;
  adult?: string;
  id?: string;
  action?: boolean;
  width?: string;
  height?: string;
  watchlist?: boolean;
  trailer?: boolean;
  watchListButton?: boolean;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        action ? width : "max-w-[266px]",
        "flex-nowrap flex-shrink-0  rounded-tl-none rounded-tr-none rounded-bl-sm rounded-br-sm overflow-hidden shadow-none",
        className
      )}
    >
      <CardHeader className="p-0 relative w-full">
        <div className={cn("relative w-full", action ? height : "h-[384px]")}>
          <BlurredImage poster={poster} />
        </div>
        {watchListButton && (
          <div className="cursor-pointer absolute -top-[10px] -left-[12px]">
            <span className="icon-[ion--bookmark-sharp] shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-[#00000066] text-6xl "></span>
            <span className="icon-[material-symbols--add] absolute top-3 left-[19px] text-xl "></span>
          </div>
        )}
      </CardHeader>
      {action && (
        <CardContent className={cn("px-2 py-2 ")}>
          <div className="flex flex-col gap-4 relative">
            <div className="flex gap-1 flex-col h-16">
              <div className="flex gap-5 items-center ">
                <div className="flex gap-2 items-center">
                  <span className="icon-[ic--baseline-star] text-[#F5C518]"></span>
                  <Attribute>{rating}</Attribute>
                </div>
                <div className="flex justify-center items-center w-10 px-2 py-1 rounded-sm bg-transparent hover:bg-[#8080806e]">
                  <span className="icon-[material-symbols--star-outline-rounded] text-[#4774AD] text-xl cursor-pointer"></span>
                </div>
              </div>
              <Title>{title?.substring(0, 40)}</Title>
            </div>
            <div className="flex flex-col gap-2">
              {watchlist && (
                <Button className="text-[#4774AD] dark:bg-[#252525] bg-white flex gap-1 text-sm font-bold hover:bg-[#8080806e]">
                  <span className="icon-[material-symbols--add] text-xl font-bold"></span>
                  Watchlist
                </Button>
              )}

              <div className="flex justify-between items-center">
                <Link
                  href={""}
                  className="bg-transparent dark:text-white text-black shadow-none flex gap-1 px-2 py-1 rounded-sm text-sm hover:bg-[#8080806e]"
                >
                  <span className="icon-[material-symbols--play-arrow-rounded] text-2xl"></span>
                  Trailer
                </Link>
                <Link
                  href={`/title/${id}`}
                  className="bg-transparent hover:bg-hoverColor w-10 h-10 rounded-full justify-center items-center flex"
                  // onClick={() => console.log("zz")}
                >
                  <span className="icon-[material-symbols--info-outline] text-lg"></span>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
