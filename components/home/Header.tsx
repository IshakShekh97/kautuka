import React from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeSwitcher } from "../ThemeSwitcher";
import Logo from "../resuables/Logo";

const Header = () => {
  return (
    <header className="fixed w-full h-20 bg-muted/10 backdrop-blur flex items-center justify-between sm:px-5 px-3 z-[99]">
      <ThemeSwitcher
        variant={"outline"}
        btnClassName="!bg-transparent border border-primary/30"
      />
      <Logo />
      <div className="">
        <Button size={"icon"}>
          <ShoppingCart />
        </Button>
      </div>
    </header>
  );
};

export default Header;
