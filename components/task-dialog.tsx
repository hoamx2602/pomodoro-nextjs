"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaPlusCircle } from "react-icons/fa";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";

const TaskDialog = () => {
  const onClick = () => {
    console.log("🟢====>1111111111", 1111111111);
  };
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    est: z.number().min(0),
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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          onClick={onClick}
          className="flex w-full flex-row items-center h-16 justify-center border-dashed cursor-pointer border-2 bg-black/10 border-white/40 hover:bg-black/10 hover:border-white/50 text-white/80 hover:text-white/95 font-semibold rounded-lg text-lg"
        >
          <FaPlusCircle className="h-5 w-5 mr-2" /> Add Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="border-none focus:outline-none focus:ring-0 focus-visible:border-none shadow-none text-3xl placeholder-gray-300 italic font-medium"
                      placeholder="What are you working on?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-[#555555] font-semibold text-xl w-full">Est Pomodoros</p>
            <div className="flex flex-row">
              <FormField
                control={form.control}
                name="est"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="border-none focus:outline-none focus:ring-0 focus-visible:border-none shadow-none w-20 bg-[#EFEFEF]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="bg-white shadow-lg border-[1px] border-[#DFDFDF] px-3" type="button">
                <TiArrowSortedUp className="text-[#666666] h-5 w-5" />
              </Button>
              <Button className="bg-white shadow-lg border-[1px] border-[#DFDFDF] px-3" type="button">
                <TiArrowSortedDown className="text-[#666666] h-5 w-5" />
                
              </Button>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDialog;
