import { prisma } from "./db";
import { auth } from "@clerk/nextjs";

export const getUserFromClerkID = async (select = { id: true }) => {
  const { userId } = auth();
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId as string,
    },
    select,
  });

  return user;
};
