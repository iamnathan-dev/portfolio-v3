import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useLocoScroll } from "@/shared/hooks/useLocoScroll";
import {
  ScrollContextValue,
  ScrollProviderProps,
} from "@/types/locomotive.types";

const ScrollContext = createContext<ScrollContextValue | undefined>(undefined);

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  const { ref, locomotiveScrollRef } = useLocoScroll(!isLoading);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleRouteChange = (): void => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.scrollTo(0, { duration: 0 });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events, locomotiveScrollRef]);

  return (
    <ScrollContext.Provider value={{ locomotiveScrollRef }}>
      <div ref={ref} id="scroll-container" data-scroll-container>
        {children}
      </div>
    </ScrollContext.Provider>
  );
};

export const useScrollContext = (): ScrollContextValue => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};
