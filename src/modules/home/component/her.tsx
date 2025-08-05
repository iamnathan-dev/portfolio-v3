"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import AtroHelmet from "@/shared/assets/img/02_hero-img.webp";
import Heart from "@/shared/assets/img/01_hero-img.webp";
import NavStar from "@/shared/assets/svg/navStar.svg";

const Hero = () => {
  const controls = useAnimation();
  const itemWidth = 350; // Approximate width of NavStar (100px) + text (30px) + gap (20px)
  const itemCount = 100; // Number of items for smooth looping
  const totalWidth = itemWidth * itemCount;

  useEffect(() => {
    controls.start({
      x: -totalWidth / 2, // Move half the total width for seamless looping
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 170, // Adjusted for smoother speed
          ease: "linear",
        },
      },
    });
  }, [controls]);

  const TextContent = () => (
    <div className="flex flex-row items-center gap-x-5">
      {Array.from({ length: itemCount }).map((_, index) => (
        <div
          className="flex flex-row items-center gap-x-5 mb-3"
          style={{ width: itemWidth }}
          key={index}
        >
          <Image
            src={NavStar}
            height={300}
            width={300}
            className="w-full mt-6"
            alt="Nav Star"
          />
          <div>code</div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="h-screen relative overflow-hidden">
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

      <div className="h-full w-full max-w-7xl mx-auto flex items-center justify-center">
        <h1 className="dark:text-white leading-[132px] text-black text-[120px] font-medium">
          <div className="flex flex-row items-center gap-x-10 mx-auto w-fit">
            <div>Design,</div>
            <div className="w-[400px] overflow-hidden h-[130px] flex items-center justify-center text-black bg-primary rounded-full">
              <div className="overflow-hidden w-[400px]">
                <motion.div
                  className="flex"
                  animate={controls}
                  style={{ width: totalWidth }}
                >
                  <TextContent />
                </motion.div>
              </div>
            </div>
          </div>
          and some wonders
        </h1>
      </div>
    </section>
  );
};

export default Hero;
