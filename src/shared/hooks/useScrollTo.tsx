import { useScrollContext } from "@/providers/scrollProvider";
import { ScrollToOptions } from "@/types/locomotive.types";
import { useCallback } from "react";

export const useScrollTo = () => {
  const { locomotiveScrollRef } = useScrollContext();

  const scrollTo = useCallback(
    (
      target: string | number | HTMLElement,
      options?: ScrollToOptions
    ): void => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.scrollTo(target, options);
      }
    },
    [locomotiveScrollRef]
  );

  const scrollToTop = useCallback(
    (options?: ScrollToOptions): void => {
      scrollTo(0, options);
    },
    [scrollTo]
  );

  return { scrollTo, scrollToTop };
};
