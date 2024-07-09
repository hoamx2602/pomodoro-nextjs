"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { BiDotsVertical } from "react-icons/bi";
import { Separator } from "./ui/separator";
import { FaPlusCircle } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { useAppContext } from "@/context";
import Mode from "./mode";
import TimeCount from "./time-count";
import StartButton from "./start-button";

const MainTimer = () => {
  const { setTime, isRunning, setIsRunning } = useAppContext();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime: number) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const onClick = () => {
    console.log("🟢====>1111111111", 1111111111);
  };
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Card
          className={cn(
            "w-[480px] border-none m-auto relative flex flex-col items-center justify-center mt-10 bg-white/15",
            isRunning && "bg-black"
          )}
        >
          <div
            className={cn(
              "z-10 absolute top-2 flex space-x-4 mb-4 mt-4",
              isRunning && "hidden"
            )}
          >
            <Mode />
          </div>
          <div className="mt-20 flex items-center flex-col font-bold">
            <TimeCount />
            <StartButton />
          </div>
        </Card>

        {/* Title */}
        <div className="flex flex-col mt-10 justify-center items-center text-white text-lg">
          <p className="text-[#D7E2EB]">#1</p>
          <p>fwefwefwef</p>
        </div>

        {/* Tasks */}
        <div>
          <div className="flex items-center justify-between w-[480px]">
            <p>Task</p>
            <Button className="bg-white/20 py-1 px-1.5 hover:bg-white/20 text-white/80">
              <BiDotsVertical className="h-6 w-6 hover:text-white" />
            </Button>
          </div>
          <Separator className="my-4" />
        </div>

        {/* Diglog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              onClick={onClick}
              className="flex flex-row w-[480px] items-center h-16 justify-center border-dashed cursor-pointer border-2 bg-black/10 border-white/40 hover:bg-black/10 hover:border-white/50 text-white/80 hover:text-white/95 font-semibold rounded-lg text-lg"
            >
              <FaPlusCircle className="h-5 w-5 mr-2" /> Add Task
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add new task</DialogTitle>
              <DialogDescription>Create new task</DialogDescription>
            </DialogHeader>
            {/* Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default MainTimer;
