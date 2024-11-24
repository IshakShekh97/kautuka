"use client";

import { Product } from "@prisma/client";
import ProductCard from "../resuables/ProductCard";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  return (
    <div className="pb-20">
      <p className="text-2xl md:text-4xl font-extrabold">Featured Products</p>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {products.map((product) => (
          <Suspense
            fallback={<Skeleton className="h-[400px] w-full" />}
            key={product.id}
          >
            <ProductCard product={product} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
