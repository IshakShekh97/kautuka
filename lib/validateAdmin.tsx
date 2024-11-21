import { currentUser } from "@clerk/nextjs/server";

export async function validateAdmin() {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const emailAddress = [...user?.emailAddresses].map(
    (email) => email.emailAddress
  );

  if (
    !emailAddress.includes(process.env.SECRET_EMAIL_1 as string) &&
    !emailAddress.includes(process.env.SECRET_EMAIL_2 as string)
  ) {
    throw new Error("User not found");
  }

  return user;
}
