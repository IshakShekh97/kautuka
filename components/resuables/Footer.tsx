import { contactLinks, legalLinks, navLinks, socialLinks } from "@/constants";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const Footer = ({ className }: { className?: string }) => {
  return (
    <div className={cn("md:h-80  w-full", className)}>
      <div className="hidden md:flex items-center justify-evenly md:max-w-screen-2xl mx-auto font-bold">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold pt-8 pb-4">Navigation</h1>
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                className="hover:underline underline-offset-2 w-fit"
                key={link.idx}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl font-extrabold pt-8 pb-4">Legel </h1>
          <div className="flex flex-col gap-1">
            {legalLinks.map((link) => (
              <Link
                href={link.href}
                className="hover:underline underline-offset-2 w-fit"
                key={link.idx}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl font-extrabold pt-8 pb-4">Contact us </h1>
          <div className="flex flex-col gap-1">
            {contactLinks.map((link) => (
              <Link
                href={link.href}
                className="hover:underline underline-offset-2 w-fit"
                key={link.idx}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl font-extrabold pt-8 pb-4">Socials </h1>
          <div className="flex flex-col gap-1">
            {socialLinks.map((link) => (
              <Link
                href={link.href}
                className="hover:underline underline-offset-2 w-fit"
                key={link.idx}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col justify-center px-3 pb-10">
        <Accordion
          className="bg-secondary px-3 mt-2 rounded-md "
          type="single"
          collapsible
        >
          <AccordionItem value="item-1" className="">
            <AccordionTrigger>Navigation </AccordionTrigger>
            {navLinks.map((link) => (
              <AccordionContent
                className="bg-background px-4 py-2 rounded-md mb-3 "
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

          <AccordionItem value="item-2">
            <AccordionTrigger>Legals</AccordionTrigger>
            {legalLinks.map((link) => (
              <AccordionContent
                className="bg-background px-4 py-2 rounded-md mb-3 "
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

          <AccordionItem value="item-3">
            <AccordionTrigger>Contact Us</AccordionTrigger>
            {contactLinks.map((link) => (
              <AccordionContent
                className="bg-background px-4 py-2 rounded-md mb-3 "
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

          <AccordionItem value="item-4">
            <AccordionTrigger>Socials</AccordionTrigger>
            {socialLinks.map((link) => (
              <AccordionContent
                className="bg-background px-4 py-2 rounded-md mb-3 "
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
      </div>
    </div>
  );
};

export default Footer;
