"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaPlusCircle } from "react-icons/fa";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { z } from "zod";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "./ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { taskSchema } from "@/schemas";
import { createTask } from "@/actions/create-task";
import { toast } from "sonner";

const TaskDialog = () => {
  const [showNote, setShowNote] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const onClick = () => {
    setOpenDialog(true);
  };

  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
      pomodoros: 0,
      project: "",
      note: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof taskSchema>) {
    setError("");
    setSuccess("");
    createTask(values)
      .then((data) => {
        if (data?.success) {
          form.reset();
          toast.success(data.success);
          setOpenDialog(false);
        }

        if (data.error) {
          toast.error(data.error);
        }
      })
      .catch(() => {
        setError("Something went wrong");
      });
  }

  const onCloseDialog = () => {
    setShowNote(false);
    setShowProject(false);
    setOpenDialog(false);
  };
  return (
    <Dialog open={openDialog}>
      <DialogTrigger asChild>
        <Button
          onClick={onClick}
          className="flex h-16 w-full cursor-pointer flex-row items-center justify-center rounded-lg border-2 border-dashed border-white/40 bg-black/10 text-lg font-semibold text-white/80 hover:border-white/50 hover:bg-black/10 hover:text-white/95"
        >
          <FaPlusCircle className="mr-2 h-5 w-5" /> Add Task
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-[600px] p-0">
        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="p-6 pb-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="border-none px-0 text-3xl font-medium text-[#555555] placeholder-gray-300 shadow-none placeholder:italic focus:outline-none focus:ring-0 focus-visible:border-none"
                        placeholder="What are you working on?"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="mt-7 w-full text-xl font-semibold text-[#555555]">
                Est Pomodoros
              </p>
              <div className="mt-3 flex flex-row items-center space-x-4">
                <FormField
                  control={form.control}
                  name="pomodoros"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="w-20 border-none bg-[#EFEFEF] text-base font-semibold text-[#555555] shadow-none focus:outline-none focus:ring-0 focus-visible:border-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center space-x-1">
                  <Button
                    className="border-[1px] border-[#DFDFDF] bg-white px-3 shadow-lg"
                    type="button"
                  >
                    <TiArrowSortedUp className="h-5 w-5 text-[#666666]" />
                  </Button>
                  <Button
                    className="border-[1px] border-[#DFDFDF] bg-white px-3 shadow-lg"
                    type="button"
                  >
                    <TiArrowSortedDown className="h-5 w-5 text-[#666666]" />
                  </Button>
                </div>
              </div>
              <FormField
                control={form.control}
                name="note"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        className={cn(
                          "mt-5 bg-[#EFEFEF] text-base text-[#555555] placeholder-gray-300",
                          !showNote && "hidden",
                        )}
                        placeholder="Some notes"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="project"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className={cn(
                          "mt-5 h-12 bg-[#EFEFEF] text-base text-[#555555] placeholder-gray-400 focus:outline-none focus:ring-0 focus-visible:border-none",
                          !showProject && "hidden",
                        )}
                        placeholder="Project name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="mt-4 flex items-center space-x-1">
                <Button
                  type="button"
                  variant="link"
                  className={cn(
                    "px-1 text-base font-semibold text-black/40 underline",
                    showNote && "hidden",
                  )}
                  onClick={() => setShowNote(true)}
                >
                  + Add Note
                </Button>
                <Button
                  type="button"
                  variant="link"
                  className={cn(
                    "px-1 text-base font-semibold text-black/40 underline",
                    showProject && "hidden",
                  )}
                  onClick={() => setShowProject(true)}
                >
                  + Add Project
                </Button>
              </div>
            </div>
            <DialogFooter className="mt-2 flex justify-end space-x-2 rounded-b-lg bg-[#EFEFEF] px-4 py-4">
              <Button
                variant="ghost"
                className="bg-transparent text-base text-gray-400 outline-none hover:bg-transparent hover:font-semibold hover:text-gray-500"
                type="button"
                onClick={() => {
                  form.reset();
                  onCloseDialog();
                }}
              >
                Cancel
              </Button>
              <Button className="bg-[#222222] text-base" type="submit">
                Save
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDialog;
