const TaskSummary = () => {
  return (
    <div className="mt-7 border-t-[1px] border-t-white bg-white/10">
      <div className="flex items-center justify-center p-5">
        <div className="mx-2 leading-[34px] text-white/70">
          {"Pomos: "}
          <span className="ml-[1px] mr-[2px] text-2xl font-bold text-white">
            0
          </span>
          <span className="ml-[1px] mr-[3px]">/</span>
          <span className="ml-[1px] mr-[2px] text-2xl font-bold text-white">
            3
          </span>
        </div>
        <div className="mx-2 leading-[34px] text-white/70">
          {"Finish at: "}
          <span className="ml-[1px] mr-[2px] text-[24px] font-bold text-white">
            15:57
          </span>
          {" ("}
          {1.4}
          {"h)"}
        </div>
      </div>
    </div>
  );
};

export default TaskSummary;
