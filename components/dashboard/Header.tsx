"use client";

import { dashboardNavItems } from "@/constants/dashboard";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { MenuIcon } from "lucide-react";
import Logo from "../resuables/Logo";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 flex items-center justify-between h-16 gap-4 border-b bg-transparent backdrop-blur-md">
      <Logo />

      <nav className="hidden font-medium md:flex flex-row items-center gap-5 text-sm lg:gap-6 ">
        {dashboardNavItems.map((item) => (
          <Link href={item.href} key={item.idx} className={""}>
            <Button
              variant={"outline"}
              className={cn(
                item.href === pathname && "bg-foreground text-background"
              )}
            >
              {item.name}
            </Button>
          </Link>
        ))}
        <ThemeSwitcher />
        <UserButton />
      </nav>

      <div className="flex items-center justify-center gap-2 md:hidden">
        <UserButton />
        <ThemeSwitcher size={"icon"} className="" />
        <Sheet>
          <SheetTrigger asChild>
            <Button size={"icon"} variant={"outline"}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <p>Navigation</p>
              </SheetTitle>
            </SheetHeader>

            <div className="size-full font-medium flex flex-col items-center gap-5 text-sm py-10">
              {dashboardNavItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.idx}
                  className={"sm:w-[60%] w-full mx-auto"}
                >
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full",
                      item.href === pathname && "bg-foreground text-background"
                    )}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
