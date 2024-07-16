"use server";

import { getUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { taskSchema } from "@/schemas";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const updateTask = async (
  values: z.infer<typeof taskSchema>,
  taskId: string,
) => {
  const validatedFields = taskSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const user = await getUser();

  if (!user) {
    return {
      error: "User not found!",
    };
  }

  const task = db.task.findUnique({
    where: {
      id: taskId,
    },
  });

  if (!task) {
    return {
      error: "Task not found!",
    };
  }

  const updated = await db.task.update({
    where: {
      id: taskId,
    },
    data: values,
  });

  revalidatePath("/", "layout");

  return {
    success: 'Update task success'
  }
};
