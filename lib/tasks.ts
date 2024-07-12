import { Task } from "@prisma/client";
import { db } from "./db";

export async function getTaskById({ id }: { id?: string }) {
  try {
    if (!id) {
      throw new Error("id is required");
    }

    const task = await db.user.findUnique({
      where: {
        id,
      },
    });
    return { task };
  } catch (error) {
    return { error };
  }
}

export async function UpdateTask(id: string, data: Partial<Task>) {
  try {
    const task = await db.task.update({
      where: { id },
      data,
    });
    return { task };
  } catch (error) {
    return { error };
  }
}
