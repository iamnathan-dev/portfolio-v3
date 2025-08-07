import {
  LocomotiveScrollInstance,
  UseLocoScrollReturn,
} from "@/types/locomotive.types";
import { useEffect, useRef } from "react";

export const useLocoScroll = (start: boolean): UseLocoScrollReturn => {
  const ref = useRef<HTMLDivElement | null>(null);
  const locomotiveScrollRef = useRef<LocomotiveScrollInstance | null>(null);

  useEffect(() => {
    if (!start) return;

    const initLocomotiveScroll = async (): Promise<void> => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      if (ref.current) {
        locomotiveScrollRef.current = new LocomotiveScroll({
          el: ref.current,
          smooth: true,
          multiplier: 1,
          class: "is-reveal",
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
            breakpoint: 768,
          },
        }) as unknown as LocomotiveScrollInstance;
      }
    };

    initLocomotiveScroll();

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
      }
    };
  }, [start]);

  return { ref, locomotiveScrollRef };
};
