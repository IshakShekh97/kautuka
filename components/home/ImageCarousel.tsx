/* eslint-disable @next/next/no-img-element */
"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const carouselImages = [
  {
    src: "/images/1.jpg",
    alt: "tshirts",
    content: "Level up Your style with our Winter collection",
  },
  {
    src: "/images/2.jpg",
    alt: "tshirts",
    content: "Level up Your style with our new collection",
  },
  {
    src: "/images/3.jpg",
    alt: "tshirts",
    content: "Level up Your style with our Shirts",
  },
  {
    src: "/images/4.jpg",
    alt: "tshirts",
    content: "Level up Your style with our Sweatshirts",
  },
  {
    src: "/images/5.jpg",
    alt: "tshirts",
    content: "Level up Your style with our Tsirts and Jeans",
  },
];

const ImageCarousel = () => {
  return (
    <>
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="relative mt-10 overflow-hidden rounded-lg"
      >
        <CarouselContent className="">
          {carouselImages.map((image, index) => (
            <CarouselItem
              key={index}
              className="object-center w-full h-[50vh]  xl:h-[34rem] relative"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="overflow-hidden rounded-lg "
              />
              <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full gap-3 max-md:hidden">
                <p className="px-5 py-2 text-4xl font-bold text-white rounded-xl backdrop-blur-xl">
                  {image.content}
                </p>
                <Button variant={"secondary"}>
                  Shop Now
                  <ChevronRightIcon />
                </Button>
              </div>
              <div className="absolute bottom-0 flex flex-col items-center justify-center gap-3 pb-5 md:hidden">
                <p className="px-5 py-2 text-4xl font-bold text-foreground rounded-xl backdrop-blur-xl">
                  {image.content}
                </p>
                <Button
                  variant={"secondary"}
                  className="max-md:bg-primary max-md:text-secondary"
                >
                  Shop Now
                  <ChevronRightIcon />
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute flex items-center top-10 right-20">
          <CarouselPrevious className="bg-foreground text-background" />
          <CarouselNext className="bg-foreground text-background" />
        </div>
      </Carousel>
    </>
  );
};

export default ImageCarousel;
