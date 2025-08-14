import { Button } from "@/components/ui/button";
import HeroOrbit from "./HeroOrbit";
import StarIcon from "/public/assets/icons/star.svg";
import SparkleIcon from "/public/assets/icons/sparkle.svg";

interface SectionHeroProps {
  title: string;
  description: string;
}

export default function SectionHero({ title, description }: SectionHeroProps) {
  return (
            <section className='py-12 md:py-20 bg-green-100 bg-gradient relative z-0 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'>
      {/* Subtle grain */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url("/assets/images/grain.jpg")` }}
      ></div>

      {/* Orbits */}
      <div className="absolute inset-0">
        <HeroOrbit size={220} rotation={-30} shouldOrbit orbitDuration="36s">
          <SparkleIcon className="size-6 text-orange-300/50" />
        </HeroOrbit>
        <HeroOrbit size={300} rotation={120} shouldOrbit orbitDuration="40s">
          <StarIcon className="size-8 text-green-300/50" />
        </HeroOrbit>
        <HeroOrbit size={600} rotation={170} shouldOrbit orbitDuration="33s">
          <StarIcon className="size-8 text-green-300/50" />
        </HeroOrbit>
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-gray-700 md:text-lg lg:text-xl">
          {description}
        </p>
        {/* <div className="mt-6 flex gap-4">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            View My Projects →
          </Button>
          <Button variant="outline" size="lg">
            Contact Me
          </Button>
        </div> */}
      </div>
    </section>
  );
}
