"use client";

import { AddToCart } from "@/actions/addToCart.action";
import { Button } from "@/components/ui/button";
import { featuredProducts } from "@/constants";
import { IndianRupee, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "sonner";

const FeaturedProducts = () => {
  return (
    <div className="pb-20">
      <p className="text-3xl font-extrabold">Featured Products</p>

      <div className="pt-10">
        <div className="flex w-full py-5 overflow-x-auto gap-x-5">
          {featuredProducts.map((product, index) => {
            return (
              <Link key={index} href={`/products/${index + 1}`}>
                <div className="bg-muted md:h-[30rem] h-[22rem] rounded-md overflow-hidden flex flex-col md:w-[28rem] w-[18rem]  shrink-0">
                  <div className="overflow-hidden bg-red-400 ">
                    <img
                      src={product.src}
                      alt={product.title}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="flex items-center justify-between px-5 py-3">
                    <div className="flex flex-col ">
                      <p>{product.title}</p>
                      <span className="flex items-center gap-2">
                        <IndianRupee className="size-4" />
                        <p>{product.price}</p>
                      </span>
                    </div>

                    <form action={AddToCart}>
                      <Button
                        variant={"outline"}
                        size={"icon"}
                        onClick={() => {
                          toast.success("Added to cart");
                        }}
                      >
                        <Link href={"/cart"}>
                          <ShoppingCart />
                        </Link>
                      </Button>
                    </form>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
