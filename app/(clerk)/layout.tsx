import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import React from "react";

const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center md:h-screen h-[80vh] w-full">
      {children}
      <ThemeSwitcher className="fixed bottom-10 right-10" size={"icon"} />
    </div>
  );
};

export default ClerkLayout;
