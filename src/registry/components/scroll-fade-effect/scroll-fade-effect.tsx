"use client";

import { ReactNode } from "react";

interface ScrollFadeEffectProps {
  children: ReactNode;
  direction?: "vertical" | "horizontal";
  fadeDistance?: number;
}

export function ScrollFadeEffect({
  children,
  direction = "vertical",
  fadeDistance = 40,
}: ScrollFadeEffectProps) {
  const isVertical = direction === "vertical";

  return (
    <div
      className={`relative overflow-hidden`}
      style={{
        maskImage: isVertical
          ? `linear-gradient(to bottom, transparent 0%, black ${fadeDistance}px, black calc(100% - ${fadeDistance}px), transparent 100%)`
          : `linear-gradient(to right, transparent 0%, black ${fadeDistance}px, black calc(100% - ${fadeDistance}px), transparent 100%)`,
        WebkitMaskImage: isVertical
          ? `linear-gradient(to bottom, transparent 0%, black ${fadeDistance}px, black calc(100% - ${fadeDistance}px), transparent 100%)`
          : `linear-gradient(to right, transparent 0%, black ${fadeDistance}px, black calc(100% - ${fadeDistance}px), transparent 100%)`,
      }}
    >
      {children}
    </div>
  );
}
