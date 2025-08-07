import { useScrollContext } from "@/providers/scrollProvider";
import { useEffect, RefObject } from "react";

interface UseScrollTriggerOptions {
  onEnter?: () => void;
  onLeave?: () => void;
  onProgress?: (progress: number) => void;
}

export const useScrollTrigger = (
  elementRef: RefObject<HTMLElement>,
  options: UseScrollTriggerOptions = {}
): void => {
  const { locomotiveScrollRef } = useScrollContext();
  const { onEnter, onLeave, onProgress } = options;

  useEffect(() => {
    if (!locomotiveScrollRef.current || !elementRef.current) return;

    const element = elementRef.current;
    const locomotive = locomotiveScrollRef.current;

    const handleCall = (args: any): void => {
      if (args.el === element) {
        if (args.way === "enter" && onEnter) {
          onEnter();
        } else if (args.way === "leave" && onLeave) {
          onLeave();
        }
      }
    };

    const handleProgress = (progress: number): void => {
      if (onProgress) {
        onProgress(progress);
      }
    };

    locomotive.on("call", handleCall);
    if (onProgress) {
      locomotive.on("scroll", handleProgress);
    }

    return () => {
      locomotive.off("call", handleCall);
      if (onProgress) {
        locomotive.off("scroll", handleProgress);
      }
    };
  }, [locomotiveScrollRef, elementRef, onEnter, onLeave, onProgress]);
};
