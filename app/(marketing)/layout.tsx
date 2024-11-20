import Navbar from "@/components/home/Navbar";
import React from "react";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      <div className="px-3 pt-5 mx-auto sm:px-10 md:px-14 lg:px-20 max-w-screen-[1600px]">
        {children}
      </div>
    </div>
  );
};

export default MarketingLayout;
