"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import AtroHelmet from "@/shared/assets/img/02_hero-img.webp";
import Heart from "@/shared/assets/img/01_hero-img.webp";
import NavStar from "@/shared/assets/svg/navStar.svg";
import NavStarBig from "@/shared/assets/svg/navStarBig.svg";
import RotatingText from "@/shared/components/circularTextScrollAnim";
import { socialLinks } from "@/shared/constants/socials.constant";
import Link from "next/link";
import { ScrollSection } from "@/shared/components/scrollSection";

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
    <ScrollSection speed={-2} className="h-screen relative overflow-hidden">
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

      <div className="absolute bottom-0 left-0 right-0 pb-10">
        <div className="h-fit w-full max-w-[85rem] mx-auto">
          <h1 className="dark:text-white leading-[132px] ml-[5rem] mb-5 text-black text-[120px] font-medium">
            <div className="flex flex-row items-center gap-x-10 w-fit ml-[8rem]">
              <div>Design,</div>
              <div className="w-[400px] -z-20 overflow-hidden h-[130px] flex items-center  text-black bg-primary rounded-full">
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
            <div className="flex flex-row items-center gap-x-10">
              <Image
                src={NavStarBig}
                width={100}
                height={100}
                className="invert"
                alt="Nav Star"
              />
              <div>and some wonders</div>
            </div>
          </h1>

          <div className="mt-7 flex flex-row w-full h-full gap-x-20">
            <div className="border-t-[5px] border-dashed w-full border-t-[#252525]">
              <div className="flex flex-row items-center justify-between gap-x-10">
                <RotatingText />
                <p
                  className="text-white text-xl font-light w-[50%]"
                  style={{ lineHeight: 1.5 }}
                >
                  I am a creative frontend developer specializing in innovative
                  design and cutting-edge <br /> development.
                </p>

                <div className="flex flex-col gap-y-2">
                  {socialLinks.map((item, index) => (
                    <Link
                      href={item.href}
                      target="_blank"
                      key={index}
                      className="flex flex-row text-xl font-light items-center gap-x-2"
                    >
                      <Image
                        src={NavStar}
                        width={20}
                        height={20}
                        alt="Nav Star"
                        className="invert"
                      />
                      <div>{item.title}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-[450px] h-[200px] rounded-[35px] overflow-hidden bg-gray-300">
              <video
                autoPlay
                preload="auto"
                muted
                poster="/assets/images/videoframe_909.png"
                loop
                className="w-full h-full object-cover rounded-[35px]"
              >
                <source src="/assets/video/nav-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default Hero;
