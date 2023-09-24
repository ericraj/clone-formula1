import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import NextLink from "next/link";
import { FC } from "react";
import { LinkProps, PropsWithClassName } from "~/types";
import { clsx } from "~/utils";

const links: LinkProps[] = [
  { label: "Latest", isExpandable: true },
  { label: "Video" },
  { label: "F1 Unlocked" },
  { label: "Schedule", isExpandable: true },
  { label: "Results", isExpandable: true },
  { label: "Drivers", isExpandable: true },
  { label: "Teams", isExpandable: true },
  { label: "Gaming", isExpandable: true },
  { label: "Live Timing" }
];

export const HeaderPrimaryNavLogo: FC<PropsWithClassName> = ({ className = "" }) => {
  return (
    <NextLink href="">
      <Image
        src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg"
        alt="Formula 1"
        width={130}
        height={32.5}
        className={clsx("Logo", className)}
      />
    </NextLink>
  );
};

export const HeaderPrimaryNav = () => {
  return (
    <div className="flex h-full w-full items-center">
      <HeaderPrimaryNavLogo className="mr-[30px]" />
      <ul className="PrimaryLinks flex h-full items-center">
        {links.map(({ label, isExpandable }) => (
          <li key={label} className="flex h-full items-center">
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
        ))}
      </ul>
    </div>
  );
};
