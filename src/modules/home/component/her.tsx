import Image from "next/image";
import React from "react";
import AtroHelmet from "@/shared/assets/img/02_hero-img.webp";
import Heart from "@/shared/assets/img/01_hero-img.webp";

const Hero = () => {
  return (
    <section className="min-h-screen h-full relative">
      <Image
        src={AtroHelmet}
        alt="astro helmet"
        width={160}
        height={160}
        className="absolute top-8 right-[270px] -z-10 bounce"
      />

      <Image
        src={Heart}
        alt="astro helmet"
        width={260}
        height={260}
        className="absolute top-24 left-24 -z-10 pulse"
      />
    </section>
  );
};

export default Hero;
