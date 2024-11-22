import prisma from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function GET() {
  const user = await currentUser();

  if (!user) {
    throw new Error("Something went wrong");
  }

  const dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (dbUser) {
    return redirect("/");
  }

  if (!dbUser) {
    await prisma.user.create({
      data: {
        id: user.id,
        email: user.emailAddresses[0].emailAddress,
        firstName: user.firstName ?? "",
        lastName: user.lastName ?? "",
        profileImageUrl:
          user.imageUrl ?? `https://avatar.vercel.sh/${user.fullName}`,
      },
    });
  }

  return redirect("/");
}
