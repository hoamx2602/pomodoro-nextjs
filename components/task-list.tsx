import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { FaCheckCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { BiDotsVertical } from "react-icons/bi";

const TaskList = () => {
  const [items, setItems] = useState([
    { id: "1", content: "Item 1", project: "WELDONE" },
    { id: "2", content: "Item 2", project: "WELDONE" },
    { id: "3", content: "Item 3", project: "WELDONE" },
  ]);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setItems(newItems);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="mb-3"
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <>
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="mt-2 rounded border-l-8 border-transparent bg-white p-[10px] text-base hover:border-l-8 hover:border-[#cccccc]"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex flex-row items-center justify-between py-2 pb-[18px]">
                          <FaCheckCircle className="mr-3 h-7 w-7 text-[#dfdfdf] hover:text-[#ebeaea]" />
                          <span className="font-semibold text-[#555555]">
                            <span className="mr-2 bg-[#f0f0f0] px-[6px] py-[2px] text-[13px] text-[#8a8989] font-bold rounded">
                              {item.project}
                            </span>
                            {item.content}
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
                        <p className="py-[10px] px-[12px] text-[15px] rounded shadow-md bg-[#fcf8de] text-[#605515] mb-1">This is a notes</p>
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
