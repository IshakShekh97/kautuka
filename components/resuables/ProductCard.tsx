"use client";

import { Product } from "@prisma/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="rounded-lg">
      <Carousel
        plugins={[Autoplay({ delay: 2500 })]}
        className="w-full mx-auto rounded-lg"
      >
        <CarouselContent className="rounded-lg">
          {product.images.map((image, idx) => (
            <CarouselItem key={idx} className="rounded-lg">
              <div className="relative h-[400px]">
                <Image
                  src={image}
                  alt={product.name}
                  fill
                  className="object-cover object-center w-full h-full rounded-lg "
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="mr-16" />
        <CarouselPrevious className="ml-16" />
      </Carousel>

      <div className="flex justify-between items-center mt-2">
        <p className="text-xl font-semibold">{product.name}</p>
        <Badge className="text-base font-bold" variant={"price"}>
          ₹{product.price}
        </Badge>
      </div>
      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
        {product.description}
      </p>
      <Button asChild className="w-full mt-4">
        <Link href={`/product/${product.id}`}>Learn More</Link>
      </Button>
    </div>
  );
};

export default ProductCard;
