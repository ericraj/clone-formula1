import { RaceCountdown } from "./RaceCountdown";
import { RaceInfo } from "./RaceInfo";

export const EventTracker = () => {
  return (
    <section className="EventTracker w-full bg-black text-white">
      <div className="mx-auto flex max-w-page flex-row items-center  gap-5 py-5">
        <RaceInfo />
        <RaceCountdown />
      </div>
    </section>
  );
};
