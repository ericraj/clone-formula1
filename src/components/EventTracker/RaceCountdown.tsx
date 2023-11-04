"use client";

import { FC } from "react";
import { F1_IMG_BASE_URL } from "~/constants";
import { clsx } from "~/utils";

interface CountdownNumberProps {
  value: string;
  label: string;
}

const CountdownNumber: FC<CountdownNumberProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col">
      <p className="font-f1 text-[28px] font-bold leading-none tracking-[0.76px]">{value}</p>
      <span className="text-13 text-white-07 block text-center font-titilliumweb font-semibold uppercase">
        {label}
      </span>
    </div>
  );
};

export const RaceCountdown = () => {
  const bgClassName = "bg-50 bg-contain bg-no-repeat";
  const absoluteClassName = "absolute z-10 inset-0";

  return (
    <div className="flex w-full min-w-fit max-w-[25%] items-center gap-3.6 rounded-10 bg-f1-green px-3.6 py-3.1">
      <div className="flex w-full flex-col justify-center">
        <span className="text-13 mb-3.5 flex w-full justify-center border-b border-b-f1-gray-border pb-1.5 font-f1 font-bold uppercase leading-[14px]">
          Sprint Shootout
        </span>
        <div className="mx-auto flex w-fit items-center gap-2.5">
          <CountdownNumber value="00" label="days" />
          <CountdownNumber value="03" label="hrs" />
          <CountdownNumber value="20" label="mins" />
        </div>
      </div>
      <div className="flex h-full items-center justify-center py-1">
        <div
          className={clsx("h-19 w-19 relative overflow-hidden", bgClassName)}
          style={{ backgroundImage: `url('${F1_IMG_BASE_URL}/rolex-clock/face.png')` }}
        >
          <div
            className={clsx(
              "animate-[spin_86400s_linear_infinite]",
              bgClassName,
              absoluteClassName
            )}
            style={{ backgroundImage: `url('${F1_IMG_BASE_URL}/rolex-clock/hour-hand.png')` }}
          />
          <div
            className={clsx("animate-[spin_3600s_linear_infinite]", bgClassName, absoluteClassName)}
            style={{ backgroundImage: `url('${F1_IMG_BASE_URL}/rolex-clock/minute-hand.png')` }}
          />
          <div
            className={clsx("animate-[spin_60s_linear_infinite]", bgClassName, absoluteClassName)}
            style={{ backgroundImage: `url('${F1_IMG_BASE_URL}/rolex-clock/second-hand.png')` }}
          />
        </div>
      </div>
    </div>
  );
};
