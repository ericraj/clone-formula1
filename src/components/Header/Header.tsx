import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="relative w-full">
      <div className="flex w-full flex-col">
        <div className="min-h-50 text-f1-text mx-auto flex w-full bg-white text-xs">
          <div className="max-w-page mx-auto flex w-full items-center justify-between gap-x-5 py-3">
            <div className="flex items-center font-bold">
              <Link href="">
                <Image
                  src="https://www.formula1.com/etc/designs/fom-website/images/fia_logo.png"
                  alt="Federation Internationale de l'Automobile"
                  width={37}
                  height={25}
                  className="opacity-40"
                />
              </Link>
            </div>
            <div className="flex items-center font-semibold">
              <div className="Links flex items-center gap-x-3">
                <Link
                  href=""
                  className="hover:text-f1-red hover:border-b-f1-red border-b-2 border-white pb-[6px] uppercase transition-colors"
                >
                  Authentics
                </Link>
                <Link href="" className="uppercase">
                  Store
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-f1-red min-h-70 mx-auto w-full text-white">
          <div className="max-w-page min-h-70 mx-auto flex w-full items-center">Aze</div>
        </div>
      </div>
    </header>
  );
};
