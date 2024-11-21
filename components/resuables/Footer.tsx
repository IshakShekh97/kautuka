import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { contactLinks, legalLinks, navLinks, socialLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

const Footer = ({ className }: { className?: string }) => {
  return (
    <div className="pt-5 bg-muted">
      <div className={cn(" w-full pb-10", className)}>
        {/* Desktop Nav */}
        <div className="items-center hidden mx-auto font-bold lg:flex justify-evenly md:max-w-screen-2xl">
          <div className="">
            <div className="flex flex-col gap-1 max-w-[20rem] mt-10 text-xl items-center">
              <p>
                Buy High Quality Products from the best brands in the world.
              </p>
              <Link href={"/dashboard"}>
                <Button variant={"ghost"} className="underline pt-5">
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
          <div className="">
            <h1 className="pt-8 pb-4 text-2xl font-extrabold">Navigation</h1>
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  href={link.href}
                  className="hover:underline underline-offset-2 text-muted-foreground w-fit"
                  key={link.idx}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="">
            <h1 className="pt-8 pb-4 text-2xl font-extrabold">Legals</h1>
            <div className="flex flex-col gap-1">
              {legalLinks.map((link) => (
                <a
                  href={link.href}
                  className="hover:underline underline-offset-2 text-muted-foreground w-fit"
                  key={link.idx}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="">
            <h1 className="pt-8 pb-4 text-2xl font-extrabold">Contact Us</h1>
            <div className="flex flex-col gap-1">
              {contactLinks.map((link) => (
                <a
                  href={link.href}
                  className="hover:underline underline-offset-2 text-muted-foreground w-fit"
                  key={link.idx}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="">
            <h1 className="pt-8 pb-4 text-2xl font-extrabold">Socials</h1>
            <div className="flex flex-col gap-1">
              {socialLinks.map((link) => (
                <a
                  href={link.href}
                  className="hover:underline underline-offset-2 text-muted-foreground w-fit"
                  key={link.idx}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="flex flex-col justify-center px-3 pb-10 lg:hidden">
          <div className="">
            <div className="flex flex-col gap-1 px-5 mt-20 font-bold text-center text-muted-foreground">
              <p className="text-lg sm:text-3xl md:text-4xl">
                Buy High Quality Products With Best Prices and Maximum
                Satisfaction.
              </p>
              <Link href={"/dashboard"}>
                <Button variant={"ghost"} className="underline pt-5">
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
          <Accordion
            className="px-3 mt-2 rounded-md bg-secondary "
            type="single"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Navigation</AccordionTrigger>
              {navLinks.map((link) => (
                <AccordionContent
                  className="px-4 py-2 mb-3 rounded-md bg-background "
                  key={link.idx}
                >
                  <a
                    href={link.href}
                    className="hover:underline underline-offset-2 w-fit"
                  >
                    {link.name}
                  </a>
                </AccordionContent>
              ))}
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Legals</AccordionTrigger>
              {legalLinks.map((link) => (
                <AccordionContent
                  className="px-4 py-2 mb-3 rounded-md bg-background "
                  key={link.idx}
                >
                  <a
                    href={link.href}
                    className="hover:underline underline-offset-2 w-fit"
                  >
                    {link.name}
                  </a>
                </AccordionContent>
              ))}
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Contact Us</AccordionTrigger>
              {contactLinks.map((link) => (
                <AccordionContent
                  className="px-4 py-2 mb-3 rounded-md bg-background "
                  key={link.idx}
                >
                  <a
                    href={link.href}
                    className="hover:underline underline-offset-2 w-fit"
                  >
                    {link.name}
                  </a>
                </AccordionContent>
              ))}
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Socials</AccordionTrigger>
              {socialLinks.map((link) => (
                <AccordionContent
                  className="px-4 py-2 mb-3 rounded-md bg-background "
                  key={link.idx}
                >
                  <a
                    href={link.href}
                    className="hover:underline underline-offset-2 w-fit"
                  >
                    {link.name}
                  </a>
                </AccordionContent>
              ))}
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <Separator className="mx-auto max-w-screen-2xl bg-primary" />
      <div className="py-5 text-center text-muted-foreground">
        CopyRight &copy;
        {new Date().getFullYear()} Kautuka. All Rights Reserved
        <p className="text-center text-muted-foreground">
          Developed with ❤️ by{" "}
          <Link
            href="https://github.com/IshakShekh97"
            className="hover:underline"
            target="_blank"
          >
            Ishak Shekh
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
