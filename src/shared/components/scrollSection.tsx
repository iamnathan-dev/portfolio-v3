"use client";

import { ScrollSectionProps } from "@/types/locomotive.types";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export const ScrollSection: React.FC<ScrollSectionProps> = ({
  children,
  className = "",
  speed = 0,
  direction = "vertical",
  sticky = false,
  target,
  call,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-10% 0px -10% 0px",
  });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "vertical" ? 50 : 0,
      x: direction === "horizontal" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  const dataScrollProps: Record<string, string | number | boolean> = {
    "data-scroll": true,
    "data-scroll-speed": speed,
    "data-scroll-direction": direction,
  };

  if (sticky) {
    dataScrollProps["data-scroll-sticky"] = true;
  }

  if (target) {
    dataScrollProps["data-scroll-target"] = target;
  }

  if (call) {
    dataScrollProps["data-scroll-call"] = call;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      {...dataScrollProps}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      {...props}
    >
      {children}
    </motion.div>
  );
};
