import { LinkProps } from "~/types";
import { HeaderGlobalLink } from "./HeaderGlobalLink";

const links: LinkProps[] = [
  { label: "Authentics" },
  { label: "Store" },
  { label: "Tickets" },
  { label: "Hospitality" },
  { label: "Experiences" }
];

export const HeaderGlobalLinks = () => {
  return (
    <div className="HeaderGlobalLinks flex items-center gap-x-4 font-semibold xl:gap-x-6">
      {links.map(({ label }) => (
        <HeaderGlobalLink key={label} label={label} />
      ))}
    </div>
  );
};
