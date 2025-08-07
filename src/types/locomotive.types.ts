import { RefObject } from "react";

export interface LocomotiveScrollInstance {
  scrollTo: (
    target: string | number | HTMLElement,
    options?: ScrollToOptions
  ) => void;
  update: () => void;
  destroy: () => void;
  start: () => void;
  stop: () => void;
  on: (event: string, callback: (args: any) => void) => void;
  off: (event: string, callback: (args: any) => void) => void;
}

export interface ScrollToOptions {
  offset?: number;
  duration?: number;
  easing?: [number, number, number, number];
  disableLerp?: boolean;
  callback?: () => void;
}

export interface UseLocoScrollReturn {
  ref: RefObject<HTMLDivElement | null>;
  locomotiveScrollRef: RefObject<LocomotiveScrollInstance | null>;
}

export interface ScrollProviderProps {
  children: React.ReactNode;
}

export interface ScrollContextValue {
  locomotiveScrollRef: RefObject<LocomotiveScrollInstance | null>;
}

export interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "vertical" | "horizontal";
  sticky?: boolean;
  once?: boolean;
  target?: string;
  call?: string;
  zoom?: boolean;
}
