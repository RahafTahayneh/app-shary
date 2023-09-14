import { prisma } from "@/utils/db";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const createNewUser = async () => {
  const user = await currentUser();

  const match = await prisma.user.findUnique({
    where: {
      clerkId: user?.id as string,
    },
  });

  if (!match && user) {
    await prisma.user.create({
      data: {
        firstName: user?.firstName,
        lastName: user?.lastName,
        clerkId: user?.id,
        email: user?.emailAddresses[0].emailAddress,
      },
    });
  }

  redirect("/links");
};

const NewUser = async () => {
  await createNewUser();
  return <div>...loading</div>;
};

export default NewUser;
