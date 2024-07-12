import { auth } from "@clerk/nextjs/server";
import { db } from "./db";
import { User } from "@prisma/client";

export const getUser = async () => {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  return user as User;
};
