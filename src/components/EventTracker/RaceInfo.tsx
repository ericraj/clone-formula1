"use client";

import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import img2023 from "~/assets/images/2023.avif";
import circuitBrazilImg from "~/assets/images/circuit-brazil.avif";
import { clsx } from "~/utils";

export const RaceInfo = () => {
  const [isHoverRaceTitle, setHoverIsRaceTitle] = useState(false);

  return (
    <div className="flex w-full flex-col">
      <span className="mb-2.5 block font-f1 text-xs font-bold">03 - 05 November</span>
      <div className="flex items-start">
        <div className="mr-3.6 w-[100px] rounded-tr-10 border-r border-t border-r-f1-black-light border-t-f1-black-light pr-2.5 pt-2.5">
          <Image
            src={circuitBrazilImg}
            alt="F1 live race circuit"
            width={0}
            height={0}
            className="h-14 w-[75px]"
          />
        </div>
        <div
          className={clsx(
            "flex w-full items-center border-t pt-5 transition-all duration-300",
            isHoverRaceTitle ? "border-t-f1-red" : "border-t-f1-black-light"
          )}
        >
          <div
            className="flex cursor-pointer items-center"
            onMouseEnter={() => setHoverIsRaceTitle(true)}
            onMouseLeave={() => setHoverIsRaceTitle(false)}
          >
            <span className="flex font-f1 text-[32px] font-bold uppercase">Brazil</span>
            <Image
              src={img2023}
              alt="2023"
              width={0}
              height={0}
              className="ml-2.5 h-[26.69px] w-[100px]"
            />
            <span className="flex w-8 justify-center">
              <ChevronRightIcon
                className={clsx(
                  "h-6 w-6 transition-colors duration-300",
                  isHoverRaceTitle ? "text-f1-red" : "text-white"
                )}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
