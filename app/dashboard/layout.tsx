import Header from "@/components/dashboard/Header";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const DashBoardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();
  if (!user) {
    return redirect("/");
  }
  const emailAddress = [...user.emailAddresses].map(
    (email) => email.emailAddress
  );
  if (
    !emailAddress.includes(process.env.SECRET_EMAIL_1 as string) &&
    !emailAddress.includes(process.env.SECRET_EMAIL_2 as string)
  ) {
    return redirect("/");
  }

  return (
    <div className="">
      <Header />
      <div className="flex w-full flex-col max-w-screen-[1600px] mx-auto px-3 pt-5  sm:px-10 md:px-14 lg:px-20 ">
        <section className="my-10">{children}</section>
      </div>
    </div>
  );
};

export default DashBoardLayout;
