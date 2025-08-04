"use client";

import { useEffect, useRef, useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Menu, Moon, X } from "lucide-react";
import Logo from "./logo";
import Link from "next/link";
import { navbarData } from "../constants/navbar.contant";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import HambugerMenu from "./hambugerMenu";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const textRef = useRef<HTMLSpanElement | null>(null);
  const charsRef = useRef<NodeListOf<HTMLSpanElement> | null>(null);

  useEffect(() => {
    if (textRef.current) {
      // Split text into individual character spans
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
        y: (i: number) => Math.sin(i * 0.5) * 20, // Sinusoidal wave effect
        duration: 1,
        stagger: 0.05, // Stagger each character
        ease: "elastic.out",
      });

      gsap.to(charsRef.current, {
        y: 0, // Reset position
        duration: 1,
        stagger: 0.05,
        ease: "elastic.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (charsRef.current) {
      gsap.to(charsRef.current, {
        y: 0, // Reset position
        duration: 1,
        stagger: 0.05,
        ease: "elastic.out",
      });
    }
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
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navbarData.map((item, index) => (
            <Link href={item.href} key={index} className="text-lg">
              <span>{item.title}</span>
            </Link>
          ))}
        </PopoverGroup>
        <div className="hidden lg:flex items-center gap-x-3 lg:flex-1 lg:justify-end">
          <Button
            variant={"outline"}
            size={"icon"}
            className="h-[60px] w-[60px] rounded-full shadow-none font-semibold text-2xl border-none backdrop-blur-sm hover:bg-white duration-300 ease-in hover:text-white dark:hover:text-black cursor-pointer flex items-center flex-row gap-x-2 overflow-hidden"
          >
            <Moon size={32} strokeWidth={3} />
          </Button>
          <Button
            variant={"outline"}
            size={"lg"}
            className="rounded-full shadow-none !h-[60px] w-[200px] font-semibold text-2xl border-3 dark:border-white border-black !bg-transparent cursor-pointer flex items-center hover:backdrop-blur-sm flex-row gap-x-2 overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span ref={textRef} className="tracking-wide">
              Contact{" "}
            </span>
          </Button>
          <HambugerMenu />
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
