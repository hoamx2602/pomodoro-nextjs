"use server";

import { getUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { taskSchema } from "@/schemas";
import { z } from "zod";

export const createTask = async (values: z.infer<typeof taskSchema>) => {
  const validatedFields = taskSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const user = await getUser();

  if (user) {
    await db.task.create({
      data: {
        ...validatedFields.data,
        userId: user.id,
      },
    });

    return {
      success: "Create success task",
    };
  } else {
    return {
      error: "User not found!",
    };
  }
};
