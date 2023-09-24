import { FC, PropsWithChildren } from "react";
import { PropsWithClassName } from "~/types";
import { clsx } from "~/utils";

export interface ButtonProps extends Required<PropsWithChildren>, PropsWithClassName {}

export const Button: FC<ButtonProps> = ({ children, className = "" }) => {
  return (
    <button
      className={clsx(
        "rounded-5 flex h-9 items-center justify-center gap-x-1 px-3 text-xs font-semibold uppercase",
        className
      )}
    >
      {children}
    </button>
  );
};
