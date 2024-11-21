"use client";

import { ChevronDown, Menu, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { navLinks, shopLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Logo from "../resuables/Logo";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <header className="sticky top-0 left-0 z-50 flex items-center justify-between max-w-screen-[1600px] px-3 py-3 mx-auto sm:px-10 md:px-14 lg:px-20 bg-background/50 backdrop-blur-lg ">
      <Logo />

      {/* Desktop Nav */}
      <div className="flex items-center justify-center gap-2 max-lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"}>
              Categories <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {shopLinks.map((link, idx) => (
              <DropdownMenuItem key={idx}>
                <Link href={link.href}>{link.name}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {navLinks.map((link, idx) => (
          <Button
            key={idx}
            variant={"ghost"}
            asChild
            className={cn(
              "border",
              pathName === link.href
                ? "border-primary bg-foreground/20 text-foreground"
                : "text-foreground "
            )}
          >
            <Link
              href={link.href}
              className={cn(navLinks.length - 1 === idx && "hidden")}
            >
              {link.name}
            </Link>
          </Button>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 max-lg:hidden">
        <Button variant={"ghost"} size={"icon"} asChild>
          <Link href={"/cart"}>
            <ShoppingCart className="size-5" />
          </Link>
        </Button>
        <SignedOut>
          <Button variant={"outline"} size={"lg"}>
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <Button variant={"ghost"} size={"icon"}>
            <UserButton />
          </Button>
        </SignedIn>
        <ThemeSwitcher
          className="max-sm:hidden"
          size={"icon"}
          variant={"outline"}
        />
      </div>

      {/* Mobile Nav */}
      <div className="flex items-center justify-center gap-2 lg:hidden">
        <SignedIn>
          <Button variant={"ghost"} size={"icon"}>
            <UserButton />
          </Button>
          <Button variant={"outline"} size={"icon"} asChild className="">
            <Link href={"/cart"}>
              <ShoppingCart className="size-5" />
            </Link>
          </Button>
        </SignedIn>
        <SignedOut>
          <Button asChild variant={"outline"}>
            <SignInButton />
          </Button>
        </SignedOut>

        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Button variant={"secondary"} size={"icon"}>
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="">
            <div className="flex flex-col items-center justify-between h-full pt-20 relative">
              <div className="flex flex-col items-start w-full gap-3 ">
                <Accordion
                  className="rounded-md bg-secondary w-full "
                  type="single"
                  collapsible
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="flex items-center justify-center">
                      Categories
                    </AccordionTrigger>
                    {shopLinks.map((link) => (
                      <AccordionContent
                        className="px-4 py-2 mx-3 my-1 last:mb-3  rounded-md bg-background "
                        key={link.idx}
                      >
                        <Link
                          href={link.href}
                          className="hover:underline underline-offset-2 w-fit"
                        >
                          {link.name}
                        </Link>
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                </Accordion>

                {navLinks.map((link, idx) => (
                  <Button key={idx} variant={"ghost"} className="w-full border">
                    <Link href={link.href}>{link.name}</Link>
                  </Button>
                ))}
              </div>
              <div className="flex items-center gap-2 justify-between w-full">
                <div className="flex flex-1">
                  <SignedOut>
                    <Button
                      asChild
                      variant={"outline"}
                      size={"lg"}
                      className="flex-1 w-full"
                    >
                      <SignInButton />
                    </Button>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
                <ThemeSwitcher />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
