"use client";

import { ScrollSection } from "@/shared/components/scrollSection";
import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import AnimatedHoverText from "@/shared/components/animatedText";

const FeaturesClients = () => {
  return (
    <section className="min-h-screen py-[8rem] w-full max-w-[85rem] mx-auto">
      <div className="flex flex-row h-full items-center gap-x-9">
        <ScrollSection
          speed={4}
          className="overflow-hidden basis-2/3 !rounded-4xl"
          zoom
        >
          <div className="h-[450px] bg-primary rounded-4xl w-full relative">
            <div className="absolute top-0 -left-10 card_01 w-[350px] h-[350px]"></div>
            <div className="absolute top-0 right-0 pt-12 px-9">
              <h1 className="text-[100px] leading-[72px] font-medium text-secondary">
                08+
              </h1>

              <div className="mt-10">
                <p className="text-secondary text-xl leading-[25px] font-light text-right">
                  Happy clients who <br /> trust my work
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 pb-8 pr-9 right-0 w-full">
              <motion.div
                initial="initial"
                className="w-fit ml-auto"
                whileHover="hovered"
              >
                <Button
                  variant={"outline"}
                  size={"lg"}
                  style={{ lineHeight: 2 }}
                  className="rounded-full shadow-none !h-[60px] w-[160px] font-semibold text-2xl border-3 text-black border-black relative cursor-pointer bg-transparent gap-x-2 overflow-hidden"
                >
                  <AnimatedHoverText>Reviews</AnimatedHoverText>
                </Button>
              </motion.div>
            </div>
          </div>
        </ScrollSection>

        <ScrollSection
          speed={4}
          className="overflow-hidden basis-4/4 !rounded-4xl"
          zoom
        >
          <div className="h-[450px] bg-secondary rounded-4xl w-full relative">
            <div className="absolute top-0 left-0 card_02 w-full h-full"></div>
          </div>
        </ScrollSection>
      </div>
      <div className="flex flex-row h-full mt-[36px] items-center gap-x-9">
        <ScrollSection
          speed={4}
          className="overflow-hidden basis-4/4 !rounded-4xl"
          zoom
        >
          <div className="h-[450px] bg-secondary rounded-4xl w-full relative">
            <div className="absolute top-0 bottom-0 -right-5 card_03 w-[400px] h-full"></div>
            <div className="absolute top-0 left-0 pt-12 px-9">
              <h1 className="text-[100px] leading-[72px] font-medium text-white">
                3+
              </h1>

              <div className="mt-10">
                <p className="text-white text-xl leading-[25px] font-light text-left">
                  Years of professional <br /> experience in frontend <br />{" "}
                  development
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 pb-8 pl-9 right-0 w-full">
              <motion.div
                initial="initial"
                className="w-fit mr-auto"
                whileHover="hovered"
              >
                <Button
                  variant={"outline"}
                  size={"lg"}
                  style={{ lineHeight: 2 }}
                  className="rounded-full shadow-none !h-[60px] w-[260px] font-semibold text-2xl border-3 text-white border-white relative cursor-pointer bg-transparent gap-x-2 overflow-hidden"
                >
                  <AnimatedHoverText>Start new project</AnimatedHoverText>
                </Button>
              </motion.div>
            </div>
          </div>
        </ScrollSection>

        <ScrollSection
          speed={4}
          className="overflow-hidden basis-2/3 !rounded-4xl"
          zoom
        >
          <div className="h-[450px] bg-secondary rounded-4xl w-full relative">
            <div className="absolute bottom-10 -right-20 card_04 w-[350px] h-[350px]"></div>
            <div className="absolute top-0 left-0 pt-12 px-9">
              <h1 className="text-[100px] leading-[72px] font-medium text-white">
                10+
              </h1>

              <div className="mt-10">
                <p className="text-white text-xl leading-[25px] font-light text-left">
                  Successfully <br /> completed projects
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 pb-8 pl-9 right-0 w-full">
              <motion.div
                initial="initial"
                className="w-fit mr-auto"
                whileHover="hovered"
              >
                <Button
                  variant={"outline"}
                  size={"lg"}
                  style={{ lineHeight: 2 }}
                  className="rounded-full shadow-none !h-[60px] w-[160px] font-semibold text-2xl border-3 text-white border-white relative cursor-pointer bg-transparent gap-x-2 overflow-hidden"
                >
                  <AnimatedHoverText>Projects</AnimatedHoverText>
                </Button>
              </motion.div>
            </div>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
};

export default FeaturesClients;
