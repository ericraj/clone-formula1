import { FC } from "react";
import { PropsWithClassName } from "~/types";
import { clsx } from "~/utils";

export const HeaderSeparator: FC<PropsWithClassName> = ({ className = "" }) => {
  return <div className={clsx("HeaderSeparator h-[25px] w-[1px] bg-f1-gray-light", className)} />;
};
