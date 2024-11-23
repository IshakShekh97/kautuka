import Navbar from "@/components/home/Navbar";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const CartPage = async () => {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div>
      <Navbar />
      <div className="px-3 pt-5 mx-auto sm:px-10 md:px-14 lg:px-20 max-w-screen-[1600px]">
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-lg">Check out your selected items.</p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
