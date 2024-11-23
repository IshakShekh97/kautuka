"use client";

import { Banner } from "@prisma/client";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

interface BannerCarouselProps {
  banners: Banner[];
}

const BannerCarousel = ({ banners }: BannerCarouselProps) => {
  return (
    <>
      <Carousel plugins={[Autoplay({ delay: 3000 })]}>
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.title}>
              <div className="relative h-[65vh] lg:h-[78vh]">
                <Image
                  src={banner.imageString}
                  alt={"banner Image"}
                  fill
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="bg-white p-2 rounded-xl text-black border-b-8 border-r-8 border-black absolute top-10 w-max ml-5 ">
                <p className="px-5 py-2 text-2xl lg:text-4xl font-black">
                  {banner.title}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default BannerCarousel;
