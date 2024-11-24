// import { TextGenerateEffect } from "@/components/ace/text-generate-effect";
import { features } from "@/constants";

const Features = () => {
  return (
    <div className="w-full mb-32 mt-10 relative px-3 sm:px-6 md:px-9">
      <div className="flex flex-col items-center justify-center">
        {/* <TextGenerateEffect
          className="sm:text-5xl text-4xl text-center underline underline-offset-4"
          words="Why Choose Us?"
        /> */}
        <div className="sm:text-5xl text-3xl font-black text-center underline underline-offset-4">
          Why Choose Us?
        </div>

        <div className="max-w-3xl mx-auto text-center pt-14 sm:py-20">
          <p className="font-semibold leading-7 text-primary text-xl">
            Kautuka{" "}
            <span className="bg-gradient-to-bl from-emerald-500 to-amber-500 bg-clip-text text-transparent">
              Threads
            </span>
          </p>
          <h1 className="text-center text-4xl mt-2 font-bold tracking-tight sm:text-5xl">
            The mission to provide{" "}
            <span className="bg-gradient-to-bl from-emerald-500 to-amber-500 bg-clip-text text-transparent">
              high-quality & stylish
            </span>{" "}
            Clothing .
          </h1>
          <p className="mt-6 text-base leading-snug text-muted-foreground">
            We provide high-quality, stylish, and sustainable clothing options
            that cater to the modern consumer. With a focus on innovation and
            customer satisfaction.
          </p>
        </div>

        <div className="bg-gradient-to-b from-amber-500 to-emerald-600 size-40 absolute blur-[100px] left-[45%] top-[30%]" />

        {/* Cards */}
        <div className="mx-auto max-w-2xl lg:max-w-4xl max-sm:mt-10  relative">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 md:max-w-none md:grid-cols-2 md:gap-y-6">
            {features.map((feature, index) => (
              <div
                className="relative pl-16 backdrop-blur backdrop-saturate-200 backdrop-brightness-200  p-3 rounded-xl border border-primary/10"
                key={index}
              >
                <div className="text-base font-semibold leading-7">
                  <div className="bg-emerald-500 text-black absolute left-3 top-4 flex size-10 items-center justify-center rounded-lg">
                    <feature.icon className="size-6" />
                  </div>
                  {feature.name}
                </div>

                <p className="mt-2 text-muted-foreground leading-snug">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
