"use client";

import { useEffect, useState } from "react";
import Logo from "./logo";
import { AnimatePresence, motion } from "motion/react";
import styles from "../assets/navStyles.module.scss";
import HambugerMenu from "./hambugerMenu";
import CurvedMenu from "./curvedMenu";
import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";
import AnimatedHoverText from "./animatedText";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menu = {
    open: {
      width: "1420px",
      height: "650px",
      borderRadius: "50px",
      top: "0",
      right: "-30px",
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: "60px",
      height: "60px",
      borderRadius: "50px",
      top: "0px",
      right: "0px",
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  if (!mounted) {
    return null;
  }

  return (
    <header className="bg-transparent absolute w-full z-50 top-0 left-0 right-0">
      <div className="max-w-full flex mx-auto items-center justify-between md:py-10 px-5 py-3 md:px-20 w-full">
        <Logo />
        <div className="flex flex-row gap-x-5">
          <Button
            variant={"outline"}
            onClick={() => {
              console.log("clicked");
              setTheme(theme === "dark" ? "light" : "dark");
            }}
            size={"icon"}
            className="h-[60px] w-[60px] rounded-full shadow-none font-semibold text-2xl !border-none bg-transparent hover:bg-white duration-300 ease-in hover:text-white backdrop-blur-sm dark:hover:text-black cursor-pointer flex items-center flex-row gap-x-2 overflow-hidden"
          >
            <Moon size={32} strokeWidth={3} />
          </Button>
          <motion.div initial="initial" whileHover="hovered">
            <Button
              variant={"outline"}
              size={"lg"}
              style={{ lineHeight: 2 }}
              className="rounded-full shadow-none mr-[80px] !h-[60px] w-[200px] font-semibold text-2xl border-3 dark:border-white border-black relative cursor-pointer backdrop-blur-sm bg-transparent gap-x-2 overflow-hidden"
            >
              <AnimatedHoverText>Say Hello</AnimatedHoverText>
            </Button>
          </motion.div>
          <div className={styles.header}>
            <motion.div
              className={styles.menu}
              variants={menu}
              animate={isActive ? "open" : "closed"}
              initial="closed"
            >
              <AnimatePresence>{isActive && <CurvedMenu />}</AnimatePresence>
            </motion.div>
            <HambugerMenu
              isActive={isActive}
              toggleMenu={() => {
                setIsActive(!isActive);
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
