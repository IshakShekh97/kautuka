"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import all from "@/public/curatedPicks/men.jpg";
import polo from "@/public/images/shirt-5.webp";
import oversize from "@/public/images/shirt-4.webp";
import { ArrowUpRight } from "lucide-react";

const ShopByCategory = () => {
  return (
    <div className="py-20">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl md:text-4xl font-bold">Shop By Category</h2>
        <Button asChild variant={"outline"} size={"lg"}>
          <Link href={"/products"}>Browse All</Link>
        </Button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-w-1 sm:row-span-2">
          <Image src={all} alt="all" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-70 group-hover:opacity-100  transition-all duration-300" />
          <div className="p-6 flex items-end">
            <Link href={"/products"} className="w-full flex items-end gap-4">
              <div className="">
                <h3 className="text-xl font-medium text-white">All Products</h3>
                <p className="mt-1 text-sm text-white flex items-center gap-2 underline underline-offset-4">
                  Shop for all your needs in one place
                  <ArrowUpRight className="size-6" />
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:relative sm:aspect-none sm:h-full ">
          <Image
            src={oversize}
            alt="oversize"
            className="object-cover object-center sm:absolute sm:inset-0 sm:w-full sm:h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-70 group-hover:opacity-100  transition-all duration-300 sm:absolute sm:inset-0" />
          <div className="p-6 flex items-end sm:absolute sm:inset-0">
            <Link
              href={"/products/oversize"}
              className="w-full flex items-end gap-4"
            >
              <div className="">
                <h3 className="text-xl font-medium text-white">Oversized</h3>
                <p className="mt-1 text-sm text-white flex items-center gap-2 underline underline-offset-4">
                  Shop for all your needs in one place
                  <ArrowUpRight className="size-6" />
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:relative sm:aspect-none sm:h-full ">
          <Image
            src={polo}
            alt="polo"
            className="object-cover object-center sm:absolute sm:inset-0 sm:w-full sm:h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-70 group-hover:opacity-100  transition-all duration-300 sm:absolute sm:inset-0" />
          <div className="p-6 flex items-end sm:absolute sm:inset-0">
            <Link
              href={"/products/polo"}
              className="w-full flex items-end gap-4"
            >
              <div className="">
                <h3 className="text-xl font-medium text-white">Polos</h3>
                <p className="mt-1 text-sm text-white flex items-center gap-2 underline underline-offset-4">
                  Shop for all your needs in one place
                  <ArrowUpRight className="size-6" />
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
