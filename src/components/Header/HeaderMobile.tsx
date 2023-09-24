"use client";

import { Bars3Icon, UserIcon } from "@heroicons/react/24/outline";
import NextLink from "next/link";
import { FC, useState } from "react";
import { Button } from "~/components/Buttons";
import { PropsWithClassName } from "~/types";
import { clsx } from "~/utils";
import { HeaderPrimaryNavLogo } from "./HeaderPrimaryNav";

export const HeaderMobile: FC<PropsWithClassName> = ({ className = "" }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <header className={clsx("relative flex flex-col ", className)}>
      <div className="relative z-10 flex h-16 items-center justify-between gap-x-3 bg-f1-red px-3">
        <Bars3Icon className="h-10 w-10 text-white" onClick={handleToggleMenu} />
        <HeaderPrimaryNavLogo />
        <Button className="h-11 w-11 bg-f1-black">
          <NextLink href="">
            <UserIcon className="h-6 w-6 text-white" />
          </NextLink>
        </Button>
      </div>
      <div
        className={clsx(
          "absolute left-0 -z-10 w-full bg-transparent transition-all duration-300",
          openMenu ? "top-16 h-[calc(100vh-64px)]" : "top-0 h-16"
        )}
      >
        <div className="relative -z-10 h-1/2 w-full bg-f1-red px-3 text-white">Menu here</div>
      </div>
    </header>
  );
};
