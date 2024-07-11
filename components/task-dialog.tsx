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

const TaskDialog = () => {
  const [showNote, setShowNote] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const onClick = () => {
    setOpenDialog(true);
  };
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    est: z.number().min(0),
    note: z.string(),
    project: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      est: 0,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
          className="flex w-full flex-row items-center h-16 justify-center border-dashed cursor-pointer border-2 bg-black/10 border-white/40 hover:bg-black/10 hover:border-white/50 text-white/80 hover:text-white/95 font-semibold rounded-lg text-lg"
        >
          <FaPlusCircle className="h-5 w-5 mr-2" /> Add Task
        </Button>
      </DialogTrigger>

      <DialogContent className="p-0 max-w-[600px]">
        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="p-6 pb-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="px-0 border-none focus:outline-none focus:ring-0 focus-visible:border-none shadow-none text-3xl placeholder-gray-300 italic font-medium"
                        placeholder="What are you working on?"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="text-[#555555] font-semibold text-xl w-full mt-7">
                Est Pomodoros
              </p>
              <div className="flex flex-row items-center space-x-4 mt-3">
                <FormField
                  control={form.control}
                  name="est"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="border-none focus:outline-none focus:ring-0 focus-visible:border-none shadow-none w-20 text-base font-semibold text-[#555555] bg-[#EFEFEF]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center space-x-1">
                  <Button
                    className="bg-white shadow-lg border-[1px] border-[#DFDFDF] px-3"
                    type="button"
                  >
                    <TiArrowSortedUp className="text-[#666666] h-5 w-5" />
                  </Button>
                  <Button
                    className="bg-white shadow-lg border-[1px] border-[#DFDFDF] px-3"
                    type="button"
                  >
                    <TiArrowSortedDown className="text-[#666666] h-5 w-5" />
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
                          "bg-[#EFEFEF] placeholder-gray-300 text-base text-[#555555] mt-5",
                          !showNote && "hidden"
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
                          "bg-[#EFEFEF] text-[#555555] h-12 mt-5 focus:outline-none focus:ring-0 focus-visible:border-none placeholder-gray-400 text-base",
                          !showProject && "hidden"
                        )}
                        placeholder="Project name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center space-x-1 mt-4">
                <Button
                  type="button"
                  variant="link"
                  className={cn(
                    "font-semibold px-1 text-base text-black/40 underline",
                    showNote && "hidden"
                  )}
                  onClick={() => setShowNote(true)}
                >
                  + Add Note
                </Button>
                <Button
                  type="button"
                  variant="link"
                  className={cn(
                    "font-semibold px-1 text-base text-black/40 underline",
                    showProject && "hidden"
                  )}
                  onClick={() => setShowProject(true)}
                >
                  + Add Project
                </Button>
              </div>
            </div>
            <DialogFooter className="flex justify-end space-x-2 bg-[#EFEFEF] py-4 px-4 rounded-b-lg mt-2">
              <Button
                variant="ghost"
                className="bg-transparent hover:bg-transparent hover:font-semibold hover:text-gray-500 outline-none text-gray-400 text-base"
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
