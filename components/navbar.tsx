import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { IoMdSettings } from "react-icons/io";
import { IoBarChartSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between py-4">
      <div className="text-xl font-semibold text-white hover:cursor-pointer">
        <div className="flex items-center dark:hidden">
          <FaCheckCircle className="mr-1 h-5 w-5" />
          <span className="mt-1 text-xl font-bold dark:bg-black dark:text-black">
            Pomofocus
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-x-2">
        <Button
          variant="outline"
          className="bg-white-alpha-20 border-none text-white"
        >
          <IoBarChartSharp className="mr-1 h-4 w-4" />
          Reports
        </Button>
        <Button
          className="bg-white-alpha-20 border-none text-white"
          variant="outline"
        >
          <IoMdSettings className="mr-1 h-4 w-4" />
          Setting
        </Button>
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
