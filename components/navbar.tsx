import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { IoMdSettings } from "react-icons/io";
import { IoBarChartSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between py-4">
      <div className="text-xl font-semibold hover:cursor-pointer text-white">
        <div className="flex items-center dark:hidden">
          <FaCheckCircle className="h-5 w-5 mr-1 " />
          <span className="text-xl font-bold mt-1 dark:bg-black dark:text-black">Pomofocus</span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-x-2">
        <Button
          variant="outline"
          className="bg-white-alpha-20 border-none text-white"
        >
          <IoBarChartSharp className="h-4 w-4 mr-1" />
          Reports
        </Button>
        <Button className="bg-white-alpha-20 border-none text-white" variant="outline">
          <IoMdSettings className="h-4 w-4 mr-1" />
          Setting
        </Button>
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
