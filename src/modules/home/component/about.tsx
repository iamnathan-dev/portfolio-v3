"use client";

import Image from "next/image";
import NavStar from "@/shared/assets/svg/navStar.svg";
import React from "react";
import Paragraph from "@/shared/components/textOpacitcyParagraph";
import { ScrollSection } from "@/shared/components/scrollSection";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import AnimatedHoverText from "@/shared/components/animatedText";

const About = () => {
  const paragraph = `I am a creative frontend developer specializing in innovative design and cutting-edge
development.`;

  return (
    <section className="min-h-screen py-[8rem] w-full max-w-[85rem] mx-auto">
      <div className="h-screen overflow-hidden w-full rounded-[50px] parallex"></div>

      <div className="mt-[8rem]">
        <div className="flex flex-row">
          <div className="basis-1/2">
            <ScrollSection
              speed={-5}
              direction="horizontal"
              className="flex flex-row items-center gap-x-5"
            >
              <Image
                src={NavStar}
                width={40}
                height={40}
                alt="Nav Star"
                className="invert"
              />
              <div className="text-2xl">Who I am</div>
            </ScrollSection>
          </div>

          <div className="basis-2/3">
            <ScrollSection speed={-5}>
              <Paragraph paragraph={paragraph} />

              <div className="mt-[4rem]">
                <motion.div
                  initial="initial"
                  className="w-fit"
                  whileHover="hovered"
                >
                  <Button
                    variant={"outline"}
                    size={"lg"}
                    style={{ lineHeight: 2 }}
                    className="rounded-full shadow-none mr-[80px] !h-[60px] w-[200px] font-semibold text-2xl border-3 dark:border-white border-black relative cursor-pointer bg-transparent gap-x-2 overflow-hidden"
                  >
                    <AnimatedHoverText>Say Hello</AnimatedHoverText>
                  </Button>
                </motion.div>
              </div>
            </ScrollSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
