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
  if (!emailAddress.includes("shekhishak90@gmail.com")) {
    return redirect("/");
  }

  return (
    <div className="h-screen">
      <div className="flex w-full flex-col max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <Header />
        <section className="my-10">{children}</section>
      </div>
    </div>
  );
};

export default DashBoardLayout;
