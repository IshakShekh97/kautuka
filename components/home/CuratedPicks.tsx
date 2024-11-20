/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { CuratedPicksContant } from "@/constants";

const CuratedPicks = () => {
  return (
    <div className="py-20">
      <p className="text-3xl font-extrabold">Curated Picks</p>

      <div className="py-10">
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-20 md:gap-x-4 lg:gap-x-8 xl:gap-x-20 gap-y-5 ">
          {CuratedPicksContant.map((item, index) => (
            <div
              className="relative col-span-1 overflow-hidden rounded-xl place-items-center justify-items-center max-sm:mx-5"
              key={index}
            >
              <img
                src={item.src}
                alt={item.title}
                key={index}
                className="aspect-square object-cover size-96  rounded-md  "
              />
              <div className="absolute flex items-center justify-center w-full bottom-5">
                <Button
                  className="w-[70%] py-6 justify-between"
                  variant={"secondary"}
                >
                  {item.title}
                  <item.icon />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuratedPicks;
