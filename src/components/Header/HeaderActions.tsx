import { UserIcon } from "@heroicons/react/24/outline";
import { Button } from "~/components/Buttons";

export const HeaderActions = () => {
  return (
    <div className="flex items-center gap-x-1.1 ">
      <Button className="bg-f1-black text-white">
        <UserIcon className="h-5 w-5" />
        <span className="block">Sign in</span>
      </Button>
      <Button className="border-2 border-f1-red bg-f1-red text-white transition-all duration-150 hover:bg-white hover:text-f1-black">
        <span className="block">Subscribe</span>
      </Button>
    </div>
  );
};
