import { Button } from "@/components/ui/button";
import { features } from "@/constants";
import { cn } from "@/lib/utils";

const BrandFeatures = () => {
  return (
    <div className="pt-10 mb-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-sm:place-items-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className={cn(
              `flex flex-col max-w-sm p-4 space-y-3 bg-background rounded-2xl border border-r-[6px] border-b-4 border-gray-600`
            )}
          >
            <Button variant={"secondary"} size={"icon"}>
              <feature.icon className={`size-7`} />
            </Button>
            <h4 className="text-xl font-bold">{feature.name}</h4>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandFeatures;
