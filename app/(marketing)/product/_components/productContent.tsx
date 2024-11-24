"use client";

import { Product } from "@prisma/client";
import ImageSlider from "./ImageSlider";
import { ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProductContentProps {
  id: string;
  product: Product;
}

const ProductContent = ({ product }: ProductContentProps) => {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start lg:gap-x-24 sm:py-6 py-2">
        <ImageSlider images={product.images} />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-black">{product.name}</h1>
          <p className="text-2xl font-bold text-emerald-500">
            ₹ {product.price}
          </p>
          <div className="mt-3 flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          </div>
          <p className="text-base text-muted-foreground text-pretty">
            {product.description}
          </p>
          <Button className="" size={"lg"} asChild>
            <Link href={`/buy/${product.id}`}>
              <ShoppingBag className="w-4 h-4 mr-2" />
              Buy Now
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductContent;
