import styles from "../assets/navStyles.module.scss";
import { motion } from "framer-motion";
import { footerLinks, navbarData } from "../constants/navbar.contant";
import Image from "next/image";
import NavStar from "../assets/svg/navStar.svg";
import Link from "next/link";
import AnimatedHoverText from "./animatedText";

export default function CurvedMenu() {
  const slideIn = {
    initial: {
      opacity: 0,
      y: 20,
    },
    enter: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.75 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
    },
  };

  return (
    <div className={styles.nav}>
      <div className="flex flex-row h-full">
        <div className="h-full basis-1/2">
          <div className={styles.body}>
            <div className={styles.linkContainer}>
              <motion.p
                variants={slideIn}
                custom={0}
                initial="initial"
                animate="enter"
                exit="exit"
                className={`text-black w-64 text-xl`}
              >
                🦄 Innovative design and cutting-edge development
              </motion.p>
            </div>
            <div className="mt-10">
              {navbarData.map((link, i) => {
                const { title, href } = link;
                return (
                  <div key={`b_${i}`} className={styles.linkContainer}>
                    <motion.div
                      custom={i}
                      variants={slideIn}
                      className="w-full"
                      initial="initial"
                      animate="enter"
                      exit="exit"
                    >
                      <motion.div initial="initial" whileHover="hovered">
                        <Link
                          href={href}
                          className="flex flex-row overflow-hidden relative items-center w-full font-semibold justify-between"
                        >
                          <AnimatedHoverText>{title}</AnimatedHoverText>
                          <Image src={NavStar} alt="Nav Star" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
          <motion.div className={styles.footer}>
            {footerLinks.map((link, i) => {
              const { title, href } = link;
              return (
                <motion.a
                  variants={slideIn}
                  custom={i}
                  href={href}
                  initial="initial"
                  className="text-black text-xl"
                  animate="enter"
                  exit="exit"
                  key={`f_${i}`}
                >
                  {title}
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        <div className="basis-1/2 w-full pt-[150px]">
          <div className={styles.linkContainer}>
            <motion.p
              variants={slideIn}
              custom={0}
              initial="initial"
              animate="enter"
              exit="exit"
              className={`text-black w-[65%] ml-auto text-xl text-right`}
            >
              👋 Nice to see you! <br /> I'm Nathaniel Joseph, a skilled
              frontend developer based in Abuja, Nigeria
            </motion.p>
          </div>

          <div className="mt-10">
            <motion.div
              variants={slideIn}
              custom={0}
              initial="initial"
              animate="enter"
              exit="exit"
              className="bg-gray-50 p-3 rounded-3xl overflow-hidden w-[65%] ml-auto h-[270px]"
            >
              <video
                autoPlay
                preload="auto"
                muted
                poster="/assets/images/videoframe_909.png"
                loop
                className="w-full h-full object-cover rounded-2xl"
              >
                <source src="/assets/video/nav-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
