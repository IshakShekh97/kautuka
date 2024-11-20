"use server";

import { currentUser } from "@clerk/nextjs/server";

const ShowDashboardButton = async () => {
  const user = await currentUser();
  if (!user) {
    return;
  }
  const emailAddress = [...user.emailAddresses].map(
    (email) => email.emailAddress
  );
  if (!emailAddress.includes("shekhishak90@gmail.com")) {
    return <div className="fixed bottom-10 right-10">ShowDashboardButton</div>;
  }
};

export default ShowDashboardButton;
