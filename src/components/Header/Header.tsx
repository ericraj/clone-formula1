import Image from "next/image";
import NextLink from "next/link";
import { FC } from "react";
import { F1_IMG_BASE_URL } from "~/constants";
import { PropsWithClassName } from "~/types";
import { clsx } from "~/utils";
import { HeaderActions } from "./HeaderActions";
import { HeaderF2F3Nav } from "./HeaderF2F3Nav";
import { HeaderGlobalLinks } from "./HeaderGlobalLinks";
import { HeaderPrimaryNav } from "./HeaderPrimaryNav";
import { HeaderSeparator } from "./HeaderSeparator";

export interface HeaderProps extends PropsWithClassName {}

export const Header: FC<HeaderProps> = ({ className = "" }) => {
  return (
    <header className={clsx("Header relative flex w-full flex-col", className)}>
      <div className="flex w-full flex-col">
        <div className="mx-auto flex h-12 w-full bg-white px-2 text-xs text-f1-text 2xl:px-0">
          <div className="mx-auto flex w-full max-w-page items-center justify-between gap-x-5 py-3">
            <div className="flex items-center">
              <NextLink href="" className="Logo mr-5">
                <Image
                  src={`${F1_IMG_BASE_URL}/fia_logo.png`}
                  alt="Federation Internationale de l'Automobile"
                  width={37}
                  height={25}
                  className="opacity-40"
                />
              </NextLink>
              <HeaderSeparator />
              <HeaderF2F3Nav />
            </div>
            <div className="flex items-center">
              <HeaderGlobalLinks />
              <div className="mx-4 flex items-center gap-x-4">
                <HeaderSeparator />
                <NextLink href="">
                  <Image
                    src={`${F1_IMG_BASE_URL}/f1-tv-logo.svg`}
                    alt="F1 TV Logo"
                    width={0}
                    height={0}
                    className="h-3 w-[72px]"
                  />
                </NextLink>
                <HeaderSeparator />
              </div>
              <HeaderActions />
            </div>
          </div>
        </div>
        <div className="mx-auto flex h-[70px] min-h-70 w-full items-center bg-f1-red px-2 text-white 2xl:px-0">
          <div className="mx-auto flex h-full w-full max-w-page items-center">
            <HeaderPrimaryNav />
          </div>
        </div>
      </div>
    </header>
  );
};
