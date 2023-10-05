"use client";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, MotionProps, motion } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";
import { FC } from "react";
import { LinkProps, PropsWithClassName } from "~/types";
import { clsx } from "~/utils";

export const headerMobileLinksMotionProps = (delay = 0): MotionProps => ({
  initial: { translateX: "-5%", opacity: 0 },
  animate: { translateX: 0, opacity: 1 },
  exit: {
    translateX: "-5%",
    opacity: 0,
    transition: { duration: 0, delay: 0 }
  },
  transition: { ease: [0.4, 0, 0.2, 1], duration: 0.5, delay }
});

export interface HeaderMobileLinksProps extends PropsWithClassName {
  links: LinkProps[];
  open: boolean;
  defaultAnimationDelay?: number;
  ulClassName?: string;
  liClassName?: string;
  linkContainerClassName?: string;
  linkClassName?: string;
}

export const HeaderMobileLinks: FC<HeaderMobileLinksProps> = ({
  links,
  open,
  className = "",
  ulClassName = "",
  liClassName = "",
  linkContainerClassName = "",
  linkClassName = "",
  defaultAnimationDelay = 0
}) => {
  return (
    <div
      className={clsx(
        "HeaderMobileLinks flex w-full flex-col bg-f1-red py-4 font-f1 text-sm font-normal text-white",
        className
      )}
    >
      <ul className={clsx("flex h-full w-full flex-wrap items-center", ulClassName)}>
        {links.map(
          ({ label, isExpandable, type, imgSrc, imgWidth, imgHeight, animationDelayIndex }) => {
            const delay = animationDelayIndex || 0;
            return (
              <li key={label} className={clsx("flex h-auto w-1/2 flex-col", liClassName)}>
                <AnimatePresence>
                  {open && (
                    <motion.span
                      {...headerMobileLinksMotionProps(defaultAnimationDelay + 0.1 * delay)}
                      className={clsx(
                        "LinkContainer h-full w-full px-3.6 py-1.1",
                        linkContainerClassName
                      )}
                    >
                      <NextLink
                        href="#"
                        className={clsx(
                          "flex h-full items-center justify-between gap-x-1.1 rounded-br-10 border-b border-r border-f1-red-light p-2.5 pl-0",
                          linkClassName
                        )}
                      >
                        {type === "img" && imgSrc ? (
                          <Image
                            src={imgSrc}
                            alt={label}
                            width={imgWidth || 75}
                            height={imgHeight || 12}
                          />
                        ) : (
                          label
                        )}
                        {isExpandable && <ChevronRightIcon className="h-5 w-5 text-inherit" />}
                      </NextLink>
                    </motion.span>
                  )}
                </AnimatePresence>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
