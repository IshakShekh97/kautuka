"use client";

import { Menu, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";

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
import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
import Logo from "../resuables/Logo";
import CategorySelector from "../resuables/CategorySelector";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <header className="sticky top-0 left-0 z-50 flex items-center justify-between max-w-screen-[1600px] px-3 py-3 mx-auto sm:px-10 md:px-14 lg:px-20 bg-background/50 backdrop-blur-lg ">
      <Logo />

      {/* Desktop Nav */}
      <div className="flex items-center justify-center gap-2 max-lg:hidden">
        <CategorySelector />
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
        <SignedOut>
          <Button asChild variant={"outline"} size={"lg"}>
            <SignUpButton forceRedirectUrl={"/api/create-user"} />
          </Button>
        </SignedOut>
        <SignedIn>
          <Button asChild variant={"ghost"} size={"icon"}>
            <UserButton />
          </Button>
          <Button variant={"ghost"} size={"icon"} asChild>
            <Link href={"/cart"}>
              <ShoppingBag className="size-5" />
            </Link>
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
              <ShoppingBag className="size-5" />
            </Link>
          </Button>
        </SignedIn>
        <SignedOut>
          <Button asChild variant={"outline"}>
            <SignUpButton forceRedirectUrl={"/api/create-user"} />
          </Button>
        </SignedOut>

        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
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
                          className="hover:underline underline-offset-2 w-fit uppercase"
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
                      <SignUpButton forceRedirectUrl={"/api/create-user"} />
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
