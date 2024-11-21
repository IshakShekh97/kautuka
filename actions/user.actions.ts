import prisma from "@/lib/db";

export const GetAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};
