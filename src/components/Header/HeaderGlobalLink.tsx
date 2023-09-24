import NextLink from "next/link";
import { FC } from "react";
import { LinkProps } from "~/types";

export const HeaderGlobalLink: FC<LinkProps> = ({ label }) => {
  return (
    <NextLink
      href=""
      className="HeaderGlobalLink border-y-2 border-white py-[6px] uppercase transition-all duration-150 hover:border-b-f1-red hover:text-f1-red"
    >
      {label}
    </NextLink>
  );
};
