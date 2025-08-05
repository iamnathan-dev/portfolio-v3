"use client";

import { useEffect, useRef, useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Menu, Moon, X } from "lucide-react";
import Logo from "./logo";
import { AnimatePresence, motion } from "motion/react";
import { navbarData } from "../constants/navbar.contant";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import styles from "../assets/navStyles.module.scss";
import Link from "next/link";
import HambugerMenu from "./hambugerMenu";
import CurvedMenu from "./curvedMenu";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const textRef = useRef<HTMLSpanElement | null>(null);
  const charsRef = useRef<NodeListOf<HTMLSpanElement> | null>(null);

  useEffect(() => {
    if (textRef.current) {
      const text = textRef.current;
      const chars = text.textContent?.split("") || [];
      text.innerHTML = chars
        .map(
          (char, i) => `<span class="inline-block" data-char${i}>${char}</span>`
        )
        .join("");
      charsRef.current = text.querySelectorAll("span");
    }
  }, []);

  const handleMouseEnter = () => {
    if (charsRef.current) {
      gsap.from(charsRef.current, {
        y: (i: number) => Math.sin(i * 0.5) * 20,
        duration: 1,
        stagger: 0.05,
        ease: "elastic.out",
      });

      gsap.to(charsRef.current, {
        y: 0,
        duration: 1,
        stagger: 0.05,
        ease: "elastic.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (charsRef.current) {
      gsap.to(charsRef.current, {
        y: 0,
        duration: 1,
        stagger: 0.05,
        ease: "elastic.out",
      });
    }
  };

  const menu = {
    open: {
      width: "480px",
      height: "650px",
      borderRadius: "25px",
      top: "-25px",
      right: "-25px",
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: "80px",
      height: "80px",
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

  return (
    <header className="bg-transparent fixed top-0 w-full">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center max-w-7xl justify-between lg:px-0 lg:py-3 p-4 mt-5"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="hidden lg:flex items-center gap-x-3 lg:flex-1 lg:justify-end">
          <div className={styles.header}>
            <HambugerMenu
              isActive={isActive}
              toggleMenu={() => {
                setIsActive(!isActive);
              }}
            />
            <motion.div
              className={styles.menu}
              variants={menu}
              animate={isActive ? "open" : "closed"}
              initial="closed"
            >
              <AnimatePresence>{isActive && <CurvedMenu />}</AnimatePresence>
            </motion.div>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center  justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Menu strokeWidth={1.25} />
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-transparent p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <X strokeWidth={1.25} />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navbarData.map((item, index) => {
                  return (
                    <Link
                      href={item.href}
                      key={index}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
