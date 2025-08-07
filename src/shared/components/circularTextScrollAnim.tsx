import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Twists from "@/shared/assets/img/twists.webp";
import Link from "next/link";

const RotatingText = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  // Transform scroll progress to rotation degrees with smooth spring animation
  const rawRotate = useTransform(scrollYProgress, [0, 1], [0, 60 * 3]);
  const rotate = useSpring(rawRotate, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const text = "* SCROLL FOR MORE * SCROLL FOR MORE * SCROLL FOR MORE ";
  const characters = text.split("");

  const radius = 70; // px
  const charactersCount = characters.length;
  const degreeIncrement = 360 / charactersCount;

  return (
    <Link
      href={"#projects"}
      ref={ref}
      className="relative w-[160px] mt-10 h-[160px]"
    >
      <motion.div
        className="absolute inset-0 group cursor-pointer"
        style={{ rotate }}
      >
        {characters.map((char, i) => {
          const angle = i * degreeIncrement;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);
          const rotation = angle + 90; // Rotate each character to align with the circle

          return (
            <span
              key={i}
              className="absolute text-white text-xs font-semibold"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                transformOrigin: "center",
              }}
            >
              {char}
            </span>
          );
        })}
      </motion.div>

      {/* Center icon */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src={Twists}
          alt="center"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export default RotatingText;
