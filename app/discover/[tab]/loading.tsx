import React from "react";

export default function loading() {
  const blankArray = Array.from({ length: 20 }, (_, index) => index + 1);
  return (
    // <div className="flex gap-3 gap-y-9 flex-wrap w-full h-full ">
    //   {blankArray.map((blank) => {
    //     return (
    //       <div
    //         key={blank}
    //         className="w-[190px] h-[216px] flex-nowrap flex-shrink-0 px-10 py-1 rounded-tl-none rounded-tr-none rounded-bl-sm rounded-br-sm overflow-hidden shadow-none"
    //       >
    //         <Skeleton className="w-full h-full" />
    //       </div>
    //     );
    //   })}
    // </div>
    <></>
  );
}
