import NextLink from "next/link";
import React from "react";
import { LinkProps } from "~/types";
import { clsx } from "~/utils";

const links: LinkProps[] = [
  { label: "F1", sup: "®", isActive: true },
  { label: "F2", sup: "™" },
  { label: "F3", sup: "™" },
  { label: "F1 ACADEMY", sup: "®" }
];

export const HeaderF2F3Nav = () => {
  return (
    <div className="HeaderF2F3Nav relative flex items-center gap-x-3 pl-4 xl:gap-x-5">
      {React.Children.toArray(
        links.map(({ label, sup, isActive }, index) => (
          <NextLink
            href=""
            className={clsx(
              "transition-colors hover:text-f1-black",
              isActive ? "text-f1-black" : "text-f1-gray"
            )}
          >
            <span className="font-f1 font-bold">
              {index === links.length - 1 ? (
                <>
                  {label.split(" ")[0]}
                  <sup>{sup}</sup> {label.split(" ")[1]}
                </>
              ) : (
                <>
                  {label}
                  <sup>{sup}</sup>
                </>
              )}
            </span>
          </NextLink>
        ))
      )}
    </div>
  );
};
