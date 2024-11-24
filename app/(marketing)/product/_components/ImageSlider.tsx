"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Suspense, useState } from "react";

interface ImageSliderProps {
  images: string[];
}
const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageClick = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <>
      <div className="grid gap-6 md:gap-3 items-start grid-cols-1 place-items-center">
        <div className="relative rounded-lg overflow-hidden max-sm:h-[600px] w-full sm:w-[600px] sm:h-[600px]">
          <Suspense fallback={<Skeleton className="w-full h-full" />}>
            <Image
              src={images[currentImage]}
              alt={"slider"}
              width={600}
              height={600}
              className="object-cover sm:w-[600px] sm:h-[600px]  rounded-lg transition-all duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <Button
                variant={"outline"}
                size={"icon"}
                className="rounded-full"
                onClick={handlePrevImage}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant={"outline"}
                size={"icon"}
                className="rounded-full"
                onClick={handleNextImage}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </Suspense>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {images.map((image, index) => (
            <Suspense
              key={index}
              fallback={<Skeleton className="w-full h-full" />}
            >
              <Image
                src={image}
                alt={"slider"}
                width={100}
                height={100}
                className={cn(
                  "rounded-lg object-cover w-[100px] h-[100px] cursor-pointer border-foreground border",
                  index === currentImage &&
                    "border-4 border-blue-500 transition-all duration-150"
                )}
                onClick={() => handleImageClick(index)}
              />
            </Suspense>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
