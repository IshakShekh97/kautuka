import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import React from "react";

const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center md:h-screen min-h-[100vh] max-sm:py-10  w-full">
      {children}
      <ThemeSwitcher className="fixed bottom-10 right-10" size={"icon"} />
    </div>
  );
};

export default ClerkLayout;
