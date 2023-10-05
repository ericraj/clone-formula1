import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import NextLink from "next/link";
import React, { FC } from "react";
import { F1_IMG_BASE_URL } from "~/constants";
import { LinkProps, PropsWithClassName } from "~/types";
import { clsx } from "~/utils";

export const primaryLinks: LinkProps[] = [
  { label: "Latest", isExpandable: true, animationDelayIndex: 0 },
  { label: "Video", animationDelayIndex: 0 },
  { label: "F1 Unlocked", animationDelayIndex: 1 },
  { label: "Schedule", isExpandable: true, animationDelayIndex: 1 },
  { label: "Results", isExpandable: true, animationDelayIndex: 2 },
  { label: "Drivers", isExpandable: true, animationDelayIndex: 2 },
  { label: "Teams", isExpandable: true, animationDelayIndex: 3 },
  { label: "Gaming", isExpandable: true, animationDelayIndex: 3 },
  { label: "Live Timing", animationDelayIndex: 4 }
];

export const HeaderPrimaryNavLogo: FC<PropsWithClassName> = ({ className = "" }) => {
  return (
    <NextLink href="">
      <Image
        src={`${F1_IMG_BASE_URL}/f1_logo.svg`}
        alt="Formula 1"
        width={0}
        height={0}
        priority={true}
        className={clsx("Logo h-[32.5px] w-[130px]", className)}
      />
    </NextLink>
  );
};

export const HeaderPrimaryNav = () => {
  return (
    <div className="HeaderPrimaryNav flex h-full w-full items-center">
      <HeaderPrimaryNavLogo className="mr-[30px]" />
      <ul className="PrimaryLinks flex h-full items-center">
        {React.Children.toArray(
          primaryLinks.map(({ label, isExpandable }) => (
            <li className="flex h-full items-center">
              <NextLink
                href=""
                className={clsx(
                  "relative flex h-full items-center gap-x-1.1 px-2 font-f1 text-xs tracking-[.2px] transition-all duration-150 hover:bg-f1-black 2xl:px-4 2xl:text-sm 2xl:tracking-[.5px]"
                )}
              >
                {label}
                {isExpandable && <ChevronDownIcon className="h-6 w-4 text-white" />}
              </NextLink>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
