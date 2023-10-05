import { FC, PropsWithChildren } from "react";
import { PropsWithClassName } from "~/types";
import { clsx } from "~/utils";

export interface ButtonProps extends Required<PropsWithChildren>, PropsWithClassName {}

export const Button: FC<ButtonProps> = ({ children, className = "" }) => {
  return (
    <button
      className={clsx(
        "flex h-9 items-center justify-center gap-x-1 rounded-5 px-3 text-xs font-semibold uppercase",
        className
      )}
    >
      {children}
    </button>
  );
};
