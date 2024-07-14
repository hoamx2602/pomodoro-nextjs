"use client";

import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { FaCheckCircle } from "react-icons/fa";
import { BiDotsVertical } from "react-icons/bi";
import { getTasks } from "@/actions/get-task";
import { Task } from "@prisma/client";

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchTasks() {
      setIsLoading(true);
      const result = await getTasks();

      setTasks(result);
      setIsLoading(false);
    }
    fetchTasks();
  }, []);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const newItems = Array.from(tasks);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setTasks(newItems);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="mb-3"
          >
            {tasks.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <>
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="mt-2 rounded border-l-8 border-transparent bg-white p-[10px] text-base hover:border-l-8 hover:border-[#cccccc]"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex flex-row items-center justify-between py-2">
                          <FaCheckCircle className="mr-3 h-7 w-7 text-[#dfdfdf] hover:text-[#ebeaea]" />
                          <span className="font-semibold text-[#555555]">
                            {item.project && (
                              <span className="mr-2 rounded bg-[#f0f0f0] px-[6px] py-[2px] text-[13px] font-bold text-[#8a8989]">
                                {item.project}
                              </span>
                            )}
                            {item.title}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="mr-4 text-[#aaaaaa]">
                            0 <span>/1</span>
                          </span>
                          <BiDotsVertical className="h-7 w-7 rounded border-[1px] border-[#d3d3d3] text-[#858484] hover:bg-[#e2e1e1]" />
                        </div>
                      </div>
                      <div className="px-5">
                        {item.note && (
                          <p className="mb-1 rounded bg-[#fcf8de] px-[12px] py-[10px] text-[15px] text-[#605515] shadow-md">
                            {item.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;
