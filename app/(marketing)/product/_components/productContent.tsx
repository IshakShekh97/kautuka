"use client";

import { Product } from "@prisma/client";
import ImageSlider from "./ImageSlider";
import { ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

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
          <div className="text-2xl font-bold text-emerald-500">
            ₹ {product.price}
          </div>
          <div className="mt-3 flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          </div>
          <div className="text-base text-muted-foreground text-pretty">
            {product.description}
          </div>

          <div className="flex flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <p className="text-base text-muted-foreground">Size:</p>
              <p className="text-base font-bold">{product.size}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-base text-muted-foreground">Stock:</p>
              <div className="text-base font-bold flex items-center gap-2">
                {product.stock === "inStock" ? (
                  <Badge variant={"positive"}> In Stock </Badge>
                ) : (
                  <Badge variant={"destructive"}>Out Of Stock</Badge>
                )}
              </div>
            </div>
          </div>

          {product.size.length}

          {product.stock === "inStock" ? (
            <>
              <Button className="" size={"lg"} asChild>
                <Link href={`/buy/${product.id}`}>
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Buy Now
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button className="" size={"lg"} disabled>
                <ShoppingBag className="w-4 h-4 mr-2" />
                Out Of Stock
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductContent;
