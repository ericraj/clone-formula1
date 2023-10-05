import React from "react";
import { LinkProps } from "~/types";
import { HeaderGlobalLink } from "./HeaderGlobalLink";

export const globalLinks: LinkProps[] = [
  { label: "Authentics", animationDelayIndex: 0 },
  { label: "Store", animationDelayIndex: 1 },
  { label: "Tickets", animationDelayIndex: 1 },
  { label: "Hospitality", animationDelayIndex: 2 },
  { label: "Experiences", animationDelayIndex: 2 }
];

export const HeaderGlobalLinks = () => {
  return (
    <div className="HeaderGlobalLinks flex items-center gap-x-4 font-semibold xl:gap-x-6">
      {React.Children.toArray(globalLinks.map(({ label }) => <HeaderGlobalLink label={label} />))}
    </div>
  );
};
