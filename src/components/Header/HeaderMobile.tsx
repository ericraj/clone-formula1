"use client";

import { Bars3Icon, UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import NextLink from "next/link";
import { FC, useState } from "react";
import { Button } from "~/components/Buttons";
import { F1_IMG_BASE_URL } from "~/constants";
import { LinkProps, PropsWithClassName } from "~/types";
import { clsx } from "~/utils";
import { HeaderActions } from "./HeaderActions";
import { globalLinks } from "./HeaderGlobalLinks";
import { HeaderMobileLinks } from "./HeaderMobileLinks";
import { HeaderPrimaryNavLogo, primaryLinks } from "./HeaderPrimaryNav";

const _primaryLinks: LinkProps[] = primaryLinks.map((link) => ({
  ...link,
  isExpandable: true
}));

const _globalLinks: LinkProps[] = [
  {
    label: "F1 TV",
    imgSrc: `${F1_IMG_BASE_URL}/f1-tv-logo.svg`,
    type: "img",
    isExpandable: true,
    animationDelayIndex: 0
  },
  ...globalLinks.map((link) => ({ ...link, isExpandable: true }))
];

const f2F3Links: LinkProps[] = [
  { label: "F2", imgSrc: `${F1_IMG_BASE_URL}/f2_logo.png`, animationDelayIndex: 0 },
  { label: "F3", imgSrc: `${F1_IMG_BASE_URL}/f3_logo.png`, animationDelayIndex: 0 },
  { label: "F1 Academy", imgSrc: `${F1_IMG_BASE_URL}/f1academy.svg`, animationDelayIndex: 1 }
].map((link, index) => ({
  ...link,
  id: _primaryLinks.length + _globalLinks.length + index,
  type: "img",
  imgWidth: index === 2 ? 117 : 66,
  imgHeight: 30
}));

export const HeaderMobile: FC<PropsWithClassName> = ({ className = "" }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <header className={clsx("HeaderMobile relative flex flex-col ", className)}>
      <div className="relative z-10 flex h-16 items-center justify-between gap-x-3 bg-f1-red px-3">
        {openMenu ? (
          <XMarkIcon className="h-10 w-10 cursor-pointer text-white" onClick={handleToggleMenu} />
        ) : (
          <Bars3Icon className="h-10 w-10 cursor-pointer text-white" onClick={handleToggleMenu} />
        )}
        <HeaderPrimaryNavLogo />
        <Button className="h-11 w-11 bg-f1-black">
          <NextLink href="">
            <UserIcon className="h-6 w-6 text-white" />
          </NextLink>
        </Button>
      </div>
      <div
        className={clsx(
          "absolute left-0 -z-10 w-full overflow-y-auto overflow-x-hidden bg-transparent transition-all duration-300",
          openMenu ? "top-16 h-[calc(100vh-64px)]" : "top-0 h-16"
        )}
      >
        <div className="relative -z-10 flex h-1/2 w-full flex-col bg-transparent">
          <HeaderMobileLinks links={_primaryLinks} open={openMenu} />
          <HeaderActions
            className="w-full !gap-x-6 !bg-white px-3.6 pt-5"
            btnClassName="w-full"
            animated={true}
            open={openMenu}
          />
          <HeaderMobileLinks
            links={_globalLinks}
            className="!bg-white !py-3.6 !font-titilliumweb uppercase !text-f1-text"
            linkClassName="!border-f1-gray-light"
            open={openMenu}
            defaultAnimationDelay={0.3}
          />
          <HeaderMobileLinks
            links={f2F3Links}
            className="!bg-white pb-[30px]"
            linkClassName="!border-f1-gray-light"
            open={openMenu}
            defaultAnimationDelay={0.4}
          />
        </div>
      </div>
    </header>
  );
};
