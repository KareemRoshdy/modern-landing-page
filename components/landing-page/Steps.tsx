import thumbnail1 from "@/app/assets/01.png";
import thumbnail2 from "@/app/assets/02.png";
import thumbnail3 from "@/app/assets/03.png";

import Image from "next/image";
import { Layout, Pencil, Eye } from "lucide-react";
import AnimationContainer from "@/components/global/animation-container";

const steps = [
  {
    icon: Pencil,
    step: "Step 1",
    description: "",
    image: thumbnail1,
  },
  {
    icon: Layout,
    step: "Step 2",
    description: "",
    image: thumbnail2,
  },
  {
    icon: Eye,
    step: "Step 3",
    description: "",
    image: thumbnail3,
  },
];

const Steps = () => {
  return (
    <AnimationContainer className="md:max-w-7xl lg:max-w-[1280px] w-full sm:mx-auto mt-20 relative">
      <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-foreground/50 to-transparent" />

      <div className="absolute top-[10%] bottom-[10%] left-1/3 w-[1px] bg-gradient-to-b from-transparent via-foreground/50 to-transparent" />

      <div className="absolute right-1/3 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-foreground/50 to-transparent" />

      <AnimationContainer delay={0.2} className="grid md:grid-cols-3 w-full">
        {/* Steps */}
        {steps.map((step) => (
          <div
            key={step.step}
            className="group relative p-8 transition-all duration-300 bg-background/30 hover:bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl"
          >
            <div className="mb-6 inline-flex items-center gap-3 p-4 rounded-2xl border border-primary/10">
              <div className="p-2 bg-primary/10 rounded-xl">
                <step.icon className="size-5 text-primary" />
              </div>

              <h2 className="text-2xl font-medium text-primary tracking-wider">
                {step.step}
              </h2>
            </div>

            <p className="text-sm text-muted-foreground mb-8">
              {step.description}
            </p>

            <div className="relative h-52 w-full overflow-hidden rounded-2xl border border-white/5">
              <Image
                src={step.image}
                alt="thumbnail1"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </AnimationContainer>
    </AnimationContainer>
  );
};

export default Steps;
