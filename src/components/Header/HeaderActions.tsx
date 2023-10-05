"use client";

import { UserIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { Button } from "~/components/Buttons";
import { PropsWithClassName } from "~/types";
import { clsx } from "~/utils";
import { headerMobileLinksMotionProps } from "./HeaderMobileLinks";

export interface HeaderActionsProps extends PropsWithClassName {
  btnClassName?: string;
  signInBtnClassName?: string;
  subscribeBtnClassName?: string;
  animated?: boolean;
  open?: boolean;
}

export const HeaderActions: FC<HeaderActionsProps> = ({
  className = "",
  btnClassName = "",
  signInBtnClassName = "",
  subscribeBtnClassName = "",
  animated,
  open
}) => {
  const SignInButton = () => {
    return (
      <Button
        className={clsx(
          "bg-f1-black text-white hover:bg-f1-black-light",
          btnClassName,
          signInBtnClassName
        )}
      >
        <UserIcon className="h-5 w-5" />
        <span className="block">Sign in</span>
      </Button>
    );
  };

  const SubscribeButton = () => {
    return (
      <Button
        className={clsx(
          "border-2 border-f1-red bg-f1-red text-white hover:bg-white hover:text-f1-black",
          btnClassName,
          subscribeBtnClassName
        )}
      >
        <span className="block">Subscribe</span>
      </Button>
    );
  };

  return (
    <div className={clsx("HeaderActions flex w-full items-center gap-x-1.1", className)}>
      {animated ? (
        <>
          <AnimatePresence key={1}>
            {open && (
              <motion.div {...headerMobileLinksMotionProps(0.3)} className="w-1/2">
                <SignInButton />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence key={2}>
            {open && (
              <motion.div {...headerMobileLinksMotionProps(0.3)} className="w-1/2">
                <SubscribeButton />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <>
          <SignInButton />
          <SubscribeButton />
        </>
      )}
    </div>
  );
};
