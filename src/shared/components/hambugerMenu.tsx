import React, { useState } from "react";
import { motion, MotionConfig } from "motion/react";

const HambugerMenu = () => {
  const [active, setActive] = useState(false);

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        onClick={() => setActive((prev) => !prev)}
        className="h-[60px] w-[60px] cursor-pointer relative rounded-full shadow-none font-semibold bg-white"
        animate={active ? "open" : "closed"}
      >
        <motion.span
          style={{
            left: "50%",
            top: "45%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-[3px] w-8 bg-black"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["45%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "45%"],
            },
          }}
        />
        <motion.span
          style={{
            left: "50%",
            bottom: "35%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-[3px] w-8 bg-black"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
              bottom: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
              bottom: ["50%", "50%", "35%"],
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

export default HambugerMenu;
