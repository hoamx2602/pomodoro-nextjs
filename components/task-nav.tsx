import { BiDotsVertical } from "react-icons/bi";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const TaskNav = () => {
  return (
    <div>
      <div className="flex items-center justify-between w-[480px]">
        <p>Task</p>
        <Button className="bg-white/20 py-1 px-1.5 hover:bg-white/20 text-white/80">
          <BiDotsVertical className="h-6 w-6 hover:text-white" />
        </Button>
      </div>
      <Separator className="my-4" />
    </div>
  );
};

export default TaskNav;
