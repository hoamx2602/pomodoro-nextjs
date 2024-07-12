import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 3 characters.",
  }),
  pomodoros: z.number().min(0),
  note: z.string(),
  project: z.string(),
});
