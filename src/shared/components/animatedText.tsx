import React from "react";
import { motion } from "motion/react";

const AnimatedHoverText = ({
  children,
  duration,
  stagger,
}: {
  children: string;
  duration?: number;
  stagger?: number;
}) => {
  const DURATION = 0.25;
  const STAGGER = 0.025;

  return (
    <>
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: duration || DURATION,
              ease: "easeInOut",
              delay: stagger || STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {children}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </>
  );
};

export default AnimatedHoverText;
